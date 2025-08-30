import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { createClient } from 'npm:@supabase/supabase-js';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Simple logging function
const log = (message: string, ...args: any[]) => {
  console.log(`[${new Date().toISOString()}]`, message, ...args);
};

// Enhanced CORS middleware
app.use('*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
  credentials: false,
}));

// Simple request logging middleware
app.use('*', async (c, next) => {
  log(`${c.req.method} ${c.req.url}`);
  await next();
});

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// RSVP endpoints
app.get('/make-server-769e25b3/rsvp', async (c) => {
  try {
    log('Getting RSVP list...');
    
    // Get all RSVP entries from the key-value store
    const rsvps = await kv.getByPrefix('rsvp:');
    
    log('Retrieved RSVPs:', rsvps.length, 'entries');
    
    // Sort by submission date (newest first)
    const sortedRsvps = rsvps.sort((a: any, b: any) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
    
    return c.json({ 
      success: true, 
      rsvps: sortedRsvps,
      total: sortedRsvps.length 
    });
  } catch (error) {
    log('Error getting RSVP list:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to get RSVP list',
      details: error.message 
    }, 500);
  }
});

app.post('/make-server-769e25b3/rsvp', async (c) => {
  try {
    const body = await c.req.json();
    log('Received RSVP data from:', body.name);
    
    // Validate required fields
    const { name, guestCount, attending, relationship } = body;
    if (!name || !guestCount || !attending || !relationship) {
      return c.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, 400);
    }
    
    // Create RSVP entry with ID
    const rsvpEntry = {
      ...body,
      id: body.id || Date.now().toString(),
      submittedAt: body.submittedAt || new Date().toISOString(),
    };
    
    // Store in key-value store with key prefix 'rsvp:'
    const key = `rsvp:${rsvpEntry.id}`;
    await kv.set(key, rsvpEntry);
    
    log('RSVP saved successfully:', key);
    
    return c.json({ 
      success: true, 
      message: 'RSVP submitted successfully',
      rsvp: rsvpEntry 
    });
  } catch (error) {
    log('Error saving RSVP:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to save RSVP',
      details: error.message 
    }, 500);
  }
});

// Test endpoint - simple ping
app.get('/make-server-769e25b3/ping', (c) => {
  log('Ping endpoint called');
  return c.json({ 
    message: 'pong',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/make-server-769e25b3/health', async (c) => {
  log('Health check endpoint called');
  try {
    // Test KV store
    const testKey = 'health-check-test';
    const testValue = { test: true, timestamp: new Date().toISOString() };
    await kv.set(testKey, testValue);
    const retrieved = await kv.get(testKey);
    await kv.del(testKey);

    return c.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      service: 'Wedding RSVP API',
      kvStore: retrieved ? 'OK' : 'ERROR',
      supabase: supabase ? 'Connected' : 'Disconnected'
    });
  } catch (error) {
    log('Health check failed:', error);
    return c.json({ 
      status: 'ERROR', 
      timestamp: new Date().toISOString(),
      service: 'Wedding RSVP API',
      error: error.message
    }, 500);
  }
});

// Default route
app.get('/', (c) => {
  log('Root endpoint called');
  return c.json({ 
    message: 'Wedding RSVP API Server',
    version: '1.0.0',
    endpoints: [
      'GET /make-server-769e25b3/ping - Simple ping test',
      'GET /make-server-769e25b3/health - Health check with KV test',
      'GET /make-server-769e25b3/rsvp - Get all RSVPs',
      'POST /make-server-769e25b3/rsvp - Submit new RSVP'
    ]
  });
});

Deno.serve(app.fetch);