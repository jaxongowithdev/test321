import { toast } from 'sonner';

// Primary copy method using legacy document.execCommand
const legacyCopyToClipboard = (text: string): boolean => {
  try {
    // Create textarea element for copying
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Make it invisible but functional
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.style.opacity = '0';
    textArea.style.zIndex = '-1';
    textArea.setAttribute('readonly', '');
    
    // Add to DOM
    document.body.appendChild(textArea);
    
    // Focus and select all text
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile compatibility
    
    // Execute copy command
    const successful = document.execCommand('copy');
    
    // Clean up
    document.body.removeChild(textArea);
    
    return successful;
  } catch (err) {
    console.error('Legacy copy failed:', err);
    return false;
  }
};

// Check if we should even try Clipboard API
const shouldTryClipboardAPI = (): boolean => {
  try {
    // Don't try if not in secure context
    if (!window.isSecureContext) return false;
    
    // Don't try if navigator.clipboard doesn't exist
    if (!navigator.clipboard || !navigator.clipboard.writeText) return false;
    
    // Additional check: if we're in an iframe or have restrictions
    if (window.self !== window.top) return false;
    
    return true;
  } catch {
    return false;
  }
};

// Modern clipboard API with immediate fallback
const modernCopyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // If modern API fails, immediately use legacy
    console.warn('Modern clipboard failed, using legacy:', err);
    return legacyCopyToClipboard(text);
  }
};

export const copyToClipboard = async (
  text: string, 
  field: string, 
  setCopiedField: (field: string | null) => void
) => {
  let copySuccess = false;
  let method = '';
  
  try {
    // Strategy: Try legacy first as it's more reliable
    // Only try modern API in ideal conditions
    if (shouldTryClipboardAPI()) {
      copySuccess = await modernCopyToClipboard(text);
      method = copySuccess ? 'modern' : 'legacy';
    } else {
      // Go straight to legacy method
      copySuccess = legacyCopyToClipboard(text);
      method = 'legacy';
    }
    
    if (copySuccess) {
      setCopiedField(field);
      toast.success(`✅ Đã sao chép ${field}!`, {
        description: `Thông tin đã được copy thành công`,
        duration: 3000,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } else {
      // If all methods fail, show manual instruction
      throw new Error('Copy failed');
    }
    
  } catch (err) {
    console.error('All copy methods failed:', err);
    
    // Show manual copy instruction with the actual text
    toast.info('📋 Copy thủ công', {
      description: (
        <div className="space-y-2 max-w-xs">
          <p className="text-sm">Không thể copy tự động. Hãy copy text này:</p>
          <div className="bg-gray-100 p-2 rounded text-xs font-mono break-all select-all cursor-pointer border" 
               onClick={(e) => {
                 const selection = window.getSelection();
                 const range = document.createRange();
                 range.selectNodeContents(e.currentTarget);
                 selection?.removeAllRanges();
                 selection?.addRange(range);
               }}>
            {text}
          </div>
          <p className="text-xs opacity-75">💡 Click vào text trên để select, rồi Ctrl+C</p>
        </div>
      ),
      duration: 10000,
    });
  }
};