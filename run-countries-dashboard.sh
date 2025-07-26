#!/bin/bash

echo "🌍 Countries Dashboard Launcher"
echo "==============================="
echo ""

# Navigate to the project directory
cd ~/Desktop/DV\ HW/dvhw6/countries-dashboard/

if [ $? -ne 0 ]; then
    echo "❌ Error: Could not navigate to the project directory"
    exit 1
fi

echo "✅ Navigated to project directory"
echo "📁 Current directory: $(pwd)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error: Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed successfully"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🚀 Starting the development server..."
echo "📊 The dashboard will open in your browser at http://localhost:8080"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run serve 