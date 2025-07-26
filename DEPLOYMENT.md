# 🌐 Data Visualization Projects Deployment Guide

This guide will help you deploy your data visualization projects online so anyone can view them.

## 🎯 **Why Deploy Online?**

- **Accessibility**: Anyone can view your projects from anywhere
- **Professional**: Shows you can deploy and maintain live applications
- **Portfolio**: Essential for job applications and networking
- **Sharing**: Easy to share with potential employers or collaborators

## 🚀 **Deployment Options**

### **Option 1: GitHub Pages (Recommended - Free)**

#### **For Static Projects (Google Charts, R Markdown):**

1. **Create GitHub Repository for Each Project:**
   ```bash
   # For Assignment 1 (Google Charts)
   cd ~/Desktop/DV\ HW/assignment-1-tanvisun/
   git init
   git add .
   git commit -m "Initial commit - Google Charts Data Viz"
   git branch -M main
   git remote add origin https://github.com/tanvisun/google-charts-viz.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Your site will be live at: `https://tanvisun.github.io/google-charts-viz`

#### **For Vue.js Projects (Countries Dashboard):**

1. **Build the Project:**
   ```bash
   cd ~/Desktop/DV\ HW/dvhw6/countries-dashboard/
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   # Install gh-pages package
   npm install --save-dev gh-pages
   
   # Add to package.json scripts:
   # "deploy": "gh-pages -d dist"
   
   # Deploy
   npm run deploy
   ```

### **Option 2: Netlify (Free & Easy)**

#### **For All Projects:**

1. **Sign up at [netlify.com](https://netlify.com)**

2. **For Static Projects:**
   - Drag and drop your project folder to Netlify
   - Or connect your GitHub repository

3. **For Vue.js Projects:**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### **Option 3: Vercel (Free & Fast)**

1. **Sign up at [vercel.com](https://vercel.com)**
2. **Connect your GitHub repository**
3. **Automatic deployment for Vue.js projects**

## 📋 **Step-by-Step Deployment Plan**

### **Step 1: Deploy Countries Dashboard (Vue.js)**

```bash
# Navigate to the project
cd ~/Desktop/DV\ HW/dvhw6/countries-dashboard/

# Resolve any git issues first
git rebase --abort  # if there are conflicts
git status

# Build the project
npm run build

# Create new repository on GitHub
# Then push to GitHub
git add .
git commit -m "Build for deployment"
git push origin main

# Deploy to GitHub Pages
npm install --save-dev gh-pages
# Add "deploy": "gh-pages -d dist" to package.json scripts
npm run deploy
```

### **Step 2: Deploy D3.js Interactive Charts**

```bash
cd ~/Desktop/DV\ HW/dvhw5/
git init
git add .
git commit -m "Initial commit - D3.js Interactive Charts"
git branch -M main
git remote add origin https://github.com/tanvisun/d3-interactive-charts.git
git push -u origin main
```

### **Step 3: Deploy Google Charts Project**

```bash
cd ~/Desktop/DV\ HW/assignment-1-tanvisun/
git init
git add .
git commit -m "Initial commit - Google Charts Data Viz"
git branch -M main
git remote add origin https://github.com/tanvisun/google-charts-viz.git
git push -u origin main
```

### **Step 4: Deploy R Markdown Analysis**

```bash
cd ~/Desktop/DV\ HW/DV\ 2/
git init
git add .
git commit -m "Initial commit - R Markdown Data Analysis"
git branch -M main
git remote add origin https://github.com/tanvisun/r-markdown-analysis.git
git push -u origin main
```

## 🔗 **Update Portfolio Links**

Once deployed, update your portfolio with live URLs:

```javascript
// In script.js, update the project URLs
const projectUrls = {
    'countries-dashboard': 'https://tanvisun.github.io/countries-dashboard',
    'dvhw5': 'https://tanvisun.github.io/d3-interactive-charts',
    'assignment-1': 'https://tanvisun.github.io/google-charts-viz',
    'dv2': 'https://tanvisun.github.io/r-markdown-analysis'
};
```

## 🛠️ **Quick Deployment Script**

Create this script to automate deployment:

```bash
#!/bin/bash
# deploy-projects.sh

echo "🚀 Deploying Data Visualization Projects"
echo "========================================"

# Function to deploy a project
deploy_project() {
    local project_path="$1"
    local repo_name="$2"
    local project_name="$3"
    
    echo "📦 Deploying $project_name..."
    cd "$project_path"
    
    # Initialize git if not already done
    if [ ! -d ".git" ]; then
        git init
        git add .
        git commit -m "Initial commit - $project_name"
        git branch -M main
        git remote add origin "https://github.com/tanvisun/$repo_name.git"
        git push -u origin main
    else
        git add .
        git commit -m "Update $project_name"
        git push origin main
    fi
    
    echo "✅ $project_name deployed!"
}

# Deploy all projects
deploy_project "~/Desktop/DV HW/assignment-1-tanvisun" "google-charts-viz" "Google Charts"
deploy_project "~/Desktop/DV HW/dvhw5" "d3-interactive-charts" "D3.js Charts"
deploy_project "~/Desktop/DV HW/DV 2" "r-markdown-analysis" "R Markdown"

echo "🎉 All projects deployed successfully!"
```

## 📊 **Project URLs After Deployment**

Your projects will be available at:
- **Countries Dashboard**: `https://tanvisun.github.io/countries-dashboard`
- **D3.js Charts**: `https://tanvisun.github.io/d3-interactive-charts`
- **Google Charts**: `https://tanvisun.github.io/google-charts-viz`
- **R Markdown**: `https://tanvisun.github.io/r-markdown-analysis`

## 🎯 **Benefits of Online Deployment**

1. **Professional Portfolio**: Shows deployment skills
2. **Easy Sharing**: Share links with anyone
3. **Live Demonstrations**: Projects work immediately
4. **Version Control**: Track changes and improvements
5. **Collaboration**: Others can contribute or fork

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **Build Errors**: Check for missing dependencies
2. **404 Errors**: Ensure correct branch and folder settings
3. **CORS Issues**: Use proper hosting (GitHub Pages, Netlify, etc.)
4. **Data Loading**: Ensure data files are included in deployment

### **Performance Tips:**

1. **Optimize Images**: Compress screenshots and images
2. **Minify Code**: Use build tools to reduce file sizes
3. **CDN**: Use CDN for external libraries
4. **Caching**: Set appropriate cache headers

---

**Next Steps:**
1. Deploy your projects using the guide above
2. Update your portfolio with live URLs
3. Share your portfolio with potential employers
4. Keep projects updated with new features

**Happy deploying! 🚀** 