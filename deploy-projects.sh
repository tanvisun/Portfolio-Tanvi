#!/bin/bash

echo "🚀 Data Visualization Projects Deployment Script"
echo "================================================"
echo ""

# Function to deploy a project
deploy_project() {
    local project_path="$1"
    local repo_name="$2"
    local project_name="$3"
    local build_command="$4"
    
    echo "📦 Deploying $project_name..."
    echo "Path: $project_path"
    echo "Repository: $repo_name"
    echo ""
    
    # Navigate to project directory
    cd "$project_path"
    if [ $? -ne 0 ]; then
        echo "❌ Error: Could not navigate to $project_path"
        return 1
    fi
    
    echo "📁 Current directory: $(pwd)"
    
    # Check if it's a Vue.js project (has package.json with vue dependency)
    if [ -f "package.json" ] && grep -q "vue" package.json; then
        echo "🔧 Vue.js project detected"
        
        # Install dependencies if needed
        if [ ! -d "node_modules" ]; then
            echo "📦 Installing dependencies..."
            npm install
        fi
        
        # Build the project
        echo "🏗️ Building project..."
        npm run build
        
        # Install gh-pages if not already installed
        if ! grep -q "gh-pages" package.json; then
            echo "📦 Installing gh-pages..."
            npm install --save-dev gh-pages
        fi
        
        # Add deploy script to package.json if not present
        if ! grep -q '"deploy"' package.json; then
            echo "📝 Adding deploy script to package.json..."
            # This is a simplified version - you might need to manually edit package.json
            echo "⚠️ Please manually add 'deploy': 'gh-pages -d dist' to your package.json scripts"
        fi
        
        # Deploy to GitHub Pages
        echo "🚀 Deploying to GitHub Pages..."
        npm run deploy
        
    else
        echo "📄 Static project detected"
        
        # Initialize git if not already done
        if [ ! -d ".git" ]; then
            echo "🔧 Initializing git repository..."
            git init
            git add .
            git commit -m "Initial commit - $project_name"
            git branch -M main
            git remote add origin "https://github.com/tanvisun/$repo_name.git"
            git push -u origin main
        else
            echo "📝 Updating existing repository..."
            git add .
            git commit -m "Update $project_name"
            git push origin main
        fi
        
        echo "✅ $project_name deployed to GitHub!"
        echo "🌐 Enable GitHub Pages in repository settings"
        echo "   URL will be: https://tanvisun.github.io/$repo_name"
    fi
    
    echo "✅ $project_name deployment completed!"
    echo ""
}

# Function to create GitHub repository
create_github_repo() {
    local repo_name="$1"
    local description="$2"
    
    echo "🔧 Creating GitHub repository: $repo_name"
    echo "Description: $description"
    
    # Note: This requires GitHub CLI or manual creation
    echo "⚠️ Please manually create the repository on GitHub:"
    echo "   https://github.com/new"
    echo "   Repository name: $repo_name"
    echo "   Description: $description"
    echo "   Make it public"
    echo ""
}

# Main deployment process
echo "🎯 Starting deployment process..."
echo ""

# Create repositories first
create_github_repo "google-charts-viz" "Consumer Price Index and Internet usage data visualization using Google Charts"
create_github_repo "d3-interactive-charts" "Advanced D3.js visualizations with interactive features and responsive design"
create_github_repo "r-markdown-analysis" "Comprehensive data analysis using R Markdown with interactive visualizations"
create_github_repo "countries-dashboard" "Interactive dashboard with 6+ D3 charts for country data analysis"

echo "⏳ Waiting for repositories to be created..."
echo "Press Enter when you've created all repositories on GitHub..."
read

# Deploy all projects
echo "🚀 Deploying projects..."
echo ""

deploy_project "~/Desktop/DV HW/assignment-1-tanvisun" "google-charts-viz" "Google Charts Data Viz"
deploy_project "~/Desktop/DV HW/dvhw5" "d3-interactive-charts" "D3.js Interactive Charts"
deploy_project "~/Desktop/DV HW/DV 2" "r-markdown-analysis" "R Markdown Data Analysis"

# Special handling for Vue.js project
echo "🌍 Deploying Countries Dashboard (Vue.js)..."
cd ~/Desktop/DV\ HW/dvhw6/countries-dashboard/

# Resolve any git issues
if git status | grep -q "rebase"; then
    echo "🔧 Resolving git rebase..."
    git rebase --abort
fi

# Build and deploy
npm install
npm run build
npm install --save-dev gh-pages

# Add deploy script to package.json
echo "📝 Adding deploy script..."
# You'll need to manually add: "deploy": "gh-pages -d dist" to package.json scripts

echo "🚀 Deploying Countries Dashboard..."
npm run deploy

echo ""
echo "🎉 Deployment completed!"
echo ""
echo "📊 Your projects will be available at:"
echo "   • Google Charts: https://tanvisun.github.io/google-charts-viz"
echo "   • D3.js Charts: https://tanvisun.github.io/d3-interactive-charts"
echo "   • R Markdown: https://tanvisun.github.io/r-markdown-analysis"
echo "   • Countries Dashboard: https://tanvisun.github.io/countries-dashboard"
echo ""
echo "🔧 Next steps:"
echo "   1. Enable GitHub Pages in each repository settings"
echo "   2. Update your portfolio with the live URLs"
echo "   3. Test all projects to ensure they work correctly"
echo ""
echo "💡 For Vue.js projects, you may need to manually add the deploy script to package.json:"
echo '   "deploy": "gh-pages -d dist"' 