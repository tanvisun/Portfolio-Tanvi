#!/bin/bash

# Data Visualization Projects Launcher
# This script helps you run your data visualization projects locally

echo "🚀 Data Visualization Projects Launcher"
echo "========================================"
echo ""

# Function to check if a directory exists
check_project() {
    if [ -d "$1" ]; then
        echo "✅ $2 found"
        return 0
    else
        echo "❌ $2 not found at $1"
        return 1
    fi
}

# Function to launch a project
launch_project() {
    local project_path="$1"
    local project_name="$2"
    local command="$3"
    
    echo ""
    echo "🎯 Launching $project_name..."
    echo "Path: $project_path"
    echo "Command: $command"
    echo ""
    
    cd "$project_path"
    if [ $? -eq 0 ]; then
        echo "📁 Changed to project directory"
        echo "🚀 Running: $command"
        echo ""
        eval "$command"
    else
        echo "❌ Failed to change to project directory"
    fi
}

# Check if projects exist
echo "🔍 Checking for projects..."
check_project "$HOME/Desktop/DV HW/assignment-1-tanvisun" "Assignment 1 (Google Charts)"
check_project "$HOME/Desktop/DV HW/DV 2" "DV 2 (R Markdown)"
check_project "$HOME/Desktop/DV HW/dvhw5" "DV HW 5 (D3.js)"
check_project "$HOME/Desktop/DV HW/dvhw6/countries-dashboard" "Countries Dashboard (Vue.js)"

echo ""
echo "📋 Available Projects:"
echo "1. Assignment 1 - Google Charts (Consumer Price Index & Internet Data)"
echo "2. DV 2 - R Markdown Analysis (Import/Export & Threatened Species)"
echo "3. DV HW 5 - D3.js Interactive Charts"
echo "4. Countries Dashboard - Vue.js with D3.js"
echo "5. Open Portfolio in Browser"
echo "6. Exit"
echo ""

read -p "Select a project to launch (1-6): " choice

case $choice in
    1)
        launch_project "$HOME/Desktop/DV HW/assignment-1-tanvisun" "Assignment 1" "open index.html"
        ;;
    2)
        launch_project "$HOME/Desktop/DV HW/DV 2" "DV 2" "open DV.html"
        ;;
    3)
        launch_project "$HOME/Desktop/DV HW/dvhw5" "DV HW 5" "npm run serve"
        ;;
    4)
        launch_project "$HOME/Desktop/DV HW/dvhw6/countries-dashboard" "Countries Dashboard" "npm run serve"
        ;;
    5)
        echo "🌐 Opening portfolio in browser..."
        open "$(pwd)/index.html"
        ;;
    6)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please select 1-6."
        exit 1
        ;;
esac

echo ""
echo "💡 Tips:"
echo "- For Node.js projects, make sure to run 'npm install' first if you haven't already"
echo "- The portfolio links will work once you deploy it to GitHub Pages"
echo "- You can also manually open the HTML files in your browser" 