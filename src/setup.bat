@echo off
setlocal

REM Wedding Invitation Setup Script for Windows
REM Made with love for Dat & Khoa

echo 🎉 Setting up Wedding Invitation Website...
echo 💒 Vo Minh Dat ^& Doan Thi Kim Khoa
echo =====================================
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    echo 🔗 Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js detected: 
node -v

REM Check if npm is installed
npm -v >nul 2>&1
if errorlevel 1 (
    echo ❌ NPM is not installed. Please install NPM first.
    pause
    exit /b 1
)

echo ✅ NPM detected:
npm -v

REM Clean any existing installation
echo.
echo 🧹 Cleaning previous installation...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist dist rmdir /s /q dist

REM Install dependencies
echo.
echo 📦 Installing dependencies...
npm install --legacy-peer-deps

if errorlevel 1 (
    echo.
    echo ❌ Failed to install dependencies. Trying alternative method...
    npm install --force
    if errorlevel 1 (
        echo ❌ Installation failed. Please check your internet connection and try again.
        pause
        exit /b 1
    )
)

REM Create necessary directories
echo.
echo 📁 Creating directories...
if not exist public\music mkdir public\music
if not exist dist mkdir dist

echo.
echo ✅ Setup completed successfully!
echo.
echo 🚀 To start the development server:
echo    npm run dev
echo.
echo 🏗️ To build for production:
echo    npm run build
echo.
echo 📖 For more information, check README.md
echo.
echo 💝 Happy coding! Made with love by Roxanatech
echo 🎊 Chuc mung hanh phuc Dat ^& Khoa! 🎊
echo.
pause