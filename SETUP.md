# 🚀 Data Visualization Projects Setup Guide

This guide will help you set up and run your data visualization projects locally.

## 📁 Your Projects Overview

1. **Assignment 1** - Google Charts (Consumer Price Index & Internet Data)
2. **DV 2** - R Markdown Analysis (Import/Export & Threatened Species)
3. **DV HW 5** - D3.js Interactive Charts
4. **Countries Dashboard** - Vue.js with D3.js

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (for projects 3 & 4)
- R and RStudio (for project 2)
- Modern web browser (Chrome recommended)

### Quick Start

1. **Use the Launcher Script** (Recommended):
   ```bash
   ./launch-projects.sh
   ```

2. **Manual Setup**:

#### Project 1: Assignment 1 (Google Charts)
```bash
cd ~/Desktop/DV\ HW/assignment-1-tanvisun/
open index.html
```

#### Project 2: DV 2 (R Markdown)
```bash
cd ~/Desktop/DV\ HW/DV\ 2/
open DV.html
```

#### Project 3: DV HW 5 (D3.js)
```bash
cd ~/Desktop/DV\ HW/dvhw5/
npm install
npm run serve
```

#### Project 4: Countries Dashboard (Vue.js)
```bash
cd ~/Desktop/DV\ HW/dvhw6/countries-dashboard/
npm install
npm run serve
```

## 🌐 Portfolio Deployment

### Deploy to GitHub Pages:

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/tanvisun/data-viz-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Your site will be live at: `https://tanvisun.github.io/data-viz-portfolio`

## 📝 Project Details

### Assignment 1
- **Technology**: Google Charts, JavaScript
- **Data**: Consumer Price Index, Internet Usage
- **Features**: Interactive charts, data analysis

### DV 2
- **Technology**: R Markdown, R
- **Data**: Import/Export, Threatened Species
- **Features**: Statistical analysis, interactive visualizations

### DV HW 5
- **Technology**: D3.js, Bootstrap, Node.js
- **Data**: Countries dataset
- **Features**: Advanced D3.js visualizations, responsive design

### Countries Dashboard
- **Technology**: Vue.js, D3.js, Bootstrap
- **Data**: Multi-country datasets
- **Features**: 6+ D3 charts (treemap, sunburst, chord diagram, etc.)

## 🔧 Troubleshooting

### Node.js Projects Not Working
```bash
# Make sure you're in the project directory
cd ~/Desktop/DV\ HW/dvhw5/
npm install
npm run serve
```

### R Markdown Projects
- Open the `.Rmd` file in RStudio
- Click "Knit" to generate HTML
- Open the generated HTML file in browser

### Portfolio Links
- Local file links work on your machine
- For GitHub Pages, update links to point to deployed versions
- Consider hosting projects on GitHub Pages or Netlify

## 📊 Next Steps

1. **Customize Portfolio**: Update personal information and project descriptions
2. **Add Screenshots**: Replace placeholder icons with actual project screenshots
3. **Deploy Projects**: Host individual projects on GitHub Pages or Netlify
4. **Update Links**: Replace local file links with live URLs
5. **Add More Projects**: Continue adding new data visualization projects

## 🎯 Tips for Success

- **Keep Projects Updated**: Regularly update your portfolio with new projects
- **Document Well**: Include clear descriptions and technology stacks
- **Show Process**: Consider adding blog posts about your development process
- **Optimize Performance**: Compress images and optimize code for faster loading
- **Mobile First**: Ensure all projects work well on mobile devices

---

**Happy visualizing! 📊✨** 