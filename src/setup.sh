#!/bin/bash

# Wedding Invitation Setup Script
# Made with ❤️ for Đạt & Khoa

echo "🎉 Setting up Wedding Invitation Website..."
echo "💒 Võ Minh Đạt & Đoàn Thị Kim Khoa"
echo "=====================================\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "🔗 Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'.' -f1 | sed 's/v//')
if [ $NODE_VERSION -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please upgrade to 18+."
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ NPM is not installed. Please install NPM first."
    exit 1
fi

echo "✅ NPM $(npm -v) detected"

# Clean any existing installation
echo "\n🧹 Cleaning previous installation..."
rm -rf node_modules package-lock.json dist

# Install dependencies
echo "\n📦 Installing dependencies..."
npm install --legacy-peer-deps

if [ $? -ne 0 ]; then
    echo "\n❌ Failed to install dependencies. Trying alternative method..."
    npm install --force
    if [ $? -ne 0 ]; then
        echo "❌ Installation failed. Please check your internet connection and try again."
        exit 1
    fi
fi

# Create necessary directories
echo "\n📁 Creating directories..."
mkdir -p public/music
mkdir -p dist

# Set executable permissions for scripts
chmod +x setup.sh 2>/dev/null || true

echo "\n✅ Setup completed successfully!"
echo "\n🚀 To start the development server:"
echo "   npm run dev"
echo "\n🏗️ To build for production:"
echo "   npm run build"
echo "\n📖 For more information, check README.md"
echo "\n💝 Happy coding! Made with love by Roxanatech"
echo "🎊 Chúc mừng hạnh phúc Đạt & Khoa! 🎊"