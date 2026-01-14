# Deployment Guide - Imperium Bail Bonds

This guide covers deployment to Vercel and troubleshooting common issues.

## 🚀 Quick Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git remote add origin [YOUR_GITHUB_REPO_URL]
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables:**
   In Vercel Dashboard → Settings → Environment Variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=n54hpimx
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (3-5 minutes)
   - Visit your deployment URL

### Alternative: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Important Notes

The project includes:
- ✅ `.npmrc` file with `legacy-peer-deps=true` for Vercel compatibility
- ✅ `next-sanity@9.8.14` compatible with Next.js 15
- ✅ All dependencies tested and building successfully

### Vercel Environment Variables

In your Vercel project settings, add these environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=n54hpimx
NEXT_PUBLIC_SANITY_DATASET=production
```

Optional (for contact form email):
```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=info@imperiumbailbonds.com
```

The deployment should now work correctly on Vercel! The `.npmrc` file tells Vercel to use `--legacy-peer-deps` automatically, and the downgraded `next-sanity` version is compatible with Next.js 15.

### What Was Fixed:

1. **Downgraded next-sanity**: From `^12.0.12` (requires Next.js 16) to `^9.8.14` (compatible with Next.js 15)
2. **Added .npmrc file**: Tells npm to use `legacy-peer-deps=true` automatically
3. **Tested build**: Confirmed it builds successfully locally

The deployment should now work on Vercel! The `.npmrc` file ensures Vercel uses the same installation strategy we used locally.