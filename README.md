# Liquid Metal Logo - Deployment Instructions

## 📦 Quick Deploy to Vercel (Web Interface - No Terminal Needed!)

### Step 1: Download This Project
Download all the files in this folder as a ZIP.

### Step 2: Create GitHub Repo (Optional but Recommended)
1. Go to https://github.com/new
2. Create a new repository called "liquid-metal-logo"
3. Upload all these files to the repo

### Step 3: Deploy to Vercel
1. Go to https://vercel.com/signup
2. Sign up with your GitHub account (it's free!)
3. Click "Add New Project"
4. Import your "liquid-metal-logo" repository
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy" - that's it!

### Step 4: Get Your URL
After deployment (takes ~2 minutes), you'll get a URL like:
`https://liquid-metal-logo.vercel.app`

---

## 🔗 Embed in Your Portfolio

Once deployed, add this to your portfolio's index.html:

Replace the `.logo-placeholder` div with:

```html
<iframe 
  src="https://your-project-name.vercel.app" 
  width="200" 
  height="200" 
  style="border: none; border-radius: 50%; overflow: hidden; background: transparent;"
  title="Liquid Metal Logo"
  scrolling="no"
></iframe>
```

Make sure to replace `your-project-name.vercel.app` with your actual Vercel URL!

---

## 🎨 Customization

To change the logo image, edit `src/main.jsx` and update the `image` prop:

```javascript
image="https://your-image-url.png"
```

To adjust size, change the `height` and `width` in the `style` prop.

---

## 🚀 Alternative: Deploy Without GitHub

If you don't want to use GitHub:

1. Go to https://vercel.com
2. Click "Add New Project"
3. Choose "Import from ZIP"
4. Upload the project folder as a ZIP
5. Click "Deploy"

That's it! No terminal, no npm, just web interfaces.

---

## 📝 Project Structure

```
liquid-metal-logo/
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── index.html            # HTML entry point
├── src/
│   └── main.jsx          # React component with shader
└── README.md             # This file
```

---

## 🆘 Troubleshooting

**Image not loading?**
- Make sure your GitHub repo is public
- Check the image URL is correct
- Try using the raw GitHub URL format

**Deployment failed?**
- Vercel should auto-install dependencies
- Check the build logs in Vercel dashboard
- Make sure all files were uploaded

**Shader not working?**
- Clear browser cache
- Check browser console for errors
- Ensure the iframe src URL is correct
