# 🚀 GitHub Pages Deployment Guide

## 📋 **Quick Setup Steps**

### **Step 1: Create GitHub Repository**

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `Personal-Protfolio` (or your preferred name)
4. **Description**: "Unity Game Developer Portfolio"
5. **Make it Public** (required for free GitHub Pages)
6. **Don't initialize** with README (we already have files)
7. **Click "Create repository"**

### **Step 2: Connect Local Repository to GitHub**

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/Personal-Protfolio.git

# Add all files to git
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Push to GitHub
git push -u origin main
```

### **Step 3: Enable GitHub Pages**

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** section
4. **Source**: Select "GitHub Actions"
5. **Save** the settings

### **Step 4: Update Repository Name in Config**

**Important**: Update the repository name in `vite.config.js`:

```javascript
// Replace 'Personal-Protfolio' with your actual repository name
base: '/YOUR_REPOSITORY_NAME/',
```

### **Step 5: Set Up Contact Form (EmailJS)**

Since GitHub Pages only hosts static files, we need EmailJS for the contact form:

1. **Go to [EmailJS.com](https://www.emailjs.com/)**
2. **Sign up** for a free account
3. **Add Gmail service** and connect your account
4. **Create email template** with your branding
5. **Get your IDs**: Service ID, Template ID, and Public Key
6. **Update Contact.jsx** with your actual IDs:

```javascript
// Replace these placeholders with your actual EmailJS IDs
emailjs.init('user_xxxxxxx') // Your public key
'YOUR_SERVICE_ID', // Your service ID  
'YOUR_TEMPLATE_ID', // Your template ID
```

**See `EMAILJS_SETUP.md` for detailed instructions.**

## 🌐 **Your Website Will Be Available At:**

```
https://YOUR_USERNAME.github.io/Personal-Protfolio/
```

## 🔄 **Automatic Deployment**

Every time you push to the `main` branch:
1. **GitHub Actions** will automatically build your site
2. **Deploy** it to GitHub Pages
3. **Your site** will be updated within 2-3 minutes

## 📧 **Contact Form Options**

### **Option A: EmailJS (Recommended)**
- ✅ **Free tier**: 200 emails/month
- ✅ **Easy setup**: Just replace IDs in code
- ✅ **Direct email sending**: No third-party forms
- ✅ **Professional templates**: Custom HTML emails
- ✅ **Spam protection**: Built-in filtering

### **Option B: Formspree**
- ✅ **Free tier**: 50 submissions/month
- ✅ **Easy setup**: Just replace form ID
- ✅ **Email notifications**: Get emails when someone contacts you
- ✅ **Spam protection**: Built-in spam filtering

### **Option C: Netlify Forms**
- ✅ **Free tier**: 100 submissions/month
- ✅ **Better integration**: If you deploy to Netlify instead

## 🚀 **Deployment Commands**

```bash
# Make changes to your code
# Then commit and push:

git add .
git commit -m "Update portfolio"
git push origin main

# GitHub Actions will automatically deploy!
```

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **404 Error**: Check repository name in `vite.config.js`
2. **Contact form not working**: Set up Formspree form ID
3. **Images not loading**: Check image paths in `public/` folder
4. **Styling issues**: Ensure Tailwind CSS is building correctly

### **Check Deployment Status:**

1. **Go to your repository**
2. **Click "Actions"** tab
3. **Check the latest workflow** run
4. **Look for any errors** in the logs

## 📱 **Mobile Testing**

After deployment, test your site on:
- ✅ **Desktop browsers**
- ✅ **Mobile devices**
- ✅ **Different screen sizes**

## 🎯 **Next Steps After Deployment**

1. **Share your portfolio** with potential employers
2. **Add to your LinkedIn** profile
3. **Include in your resume**
4. **Share on social media**

---

**Your Unity Game Developer portfolio will be live on GitHub Pages!** 🎮✨

**Need help with any step? Let me know!**
