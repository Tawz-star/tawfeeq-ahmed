# Deployment Guide: R. Tawfeeq Ahmad Portfolio

This document outlines the quick step-by-step procedure to push this project to your GitHub account (**@Tawz-star**) and deploy it live on **Vercel**.

---

## Part 1: Push Code to GitHub

Your local Git repository is already initialized on the `main` branch with all production-ready files committed.

### Step 1: Create a New Repository on GitHub
1. Open your browser and go to [https://github.com/new](https://github.com/new).
2. Set **Repository name**: `portfolio` (or `tawfeeq-portfolio`).
3. Set visibility to **Public**.
4. **Important**: Do **NOT** check "Add a README file", ".gitignore", or "license" (we already have them).
5. Click **Create repository**.

### Step 2: Push your local code
In your terminal or PowerShell inside `c:\Users\tawfe\Desktop\tawfeeq ahmed`, run:

```bash
git remote add origin https://github.com/Tawz-star/portfolio.git
git branch -M main
git push -u origin main
```
*(If prompted by Git Credential Manager, log in with your GitHub account or Personal Access Token).*

---

## Part 2: Deploy on Vercel via GitHub

Once your repository is on GitHub, Vercel will automatically build and deploy it with a free `.vercel.app` URL and SSL certificate.

### Step 1: Sign in to Vercel
1. Go to [https://vercel.com/login](https://vercel.com/login).
2. Click **Continue with GitHub** (login with your **Tawz-star** account).

### Step 2: Import your Portfolio Project
1. In the Vercel Dashboard, click **Add New...** > **Project**.
2. Under "Import Git Repository", locate your `portfolio` (or `tawfeeq-portfolio`) repository and click **Import**.

### Step 3: Configure & Deploy
Vercel automatically detects Vite:
- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Click **Deploy**!

In ~30 seconds, your site will be live at `https://portfolio-tawz-star.vercel.app` (or your chosen project name).

---

## Updating the Site Later

Whenever you want to update your portfolio (e.g. adding new certifications or projects):
1. Make your changes in the code.
2. Run:
   ```bash
   git add .
   git commit -m "Update projects and certifications"
   git push origin main
   ```
3. Vercel will automatically re-deploy your site in seconds!
