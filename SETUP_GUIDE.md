# Quick Setup Guide - Imperium Bail Bonds

This guide will help you get the website up and running quickly.

## ✅ Initial Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env.local
```

The Sanity project ID is already configured (`n54hpimx`). No changes needed unless you want to use a different dataset.

### 3. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### 4. Access Sanity Studio
Visit: http://localhost:3000/studio

You'll need to log in with your Sanity account the first time.

## 📝 Adding Content

### Priority Content to Add First:

1. **Contact Information** (`/studio`)
   - Go to "Contact Information"
   - Add phone number, email, address
   - Add business hours
   - Add 24/7 emergency message

2. **Services** (`/studio`)
   - Click "Service" → "Create"
   - Fill in English and Spanish versions
   - Add at least 3-4 services
   - Set display order (1, 2, 3, etc.)

3. **Customer Reviews** (`/studio`)
   - Click "Customer Review" → "Create"
   - Add customer name, rating, review text
   - Mark as "Approved" and optionally "Featured"

4. **FAQs** (`/studio`)
   - Click "FAQ" → "Create"
   - Add bilingual questions and answers
   - Choose category
   - Set display order

## 🚀 Deployment to Vercel (10 minutes)

### Option 1: Quick Deploy
1. Push code to GitHub:
   ```bash
   git remote add origin [YOUR_GITHUB_REPO_URL]
   git push -u origin main
   ```

2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Environment Variables in Vercel
In Vercel Dashboard → Settings → Environment Variables, add:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `n54hpimx`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`

(Optional for email functionality):
- `RESEND_API_KEY` = your Resend API key
- `CONTACT_EMAIL` = info@imperiumbailbonds.com

## 📧 Enable Contact Form Email (Optional)

1. Sign up at https://resend.com (free tier available)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   CONTACT_EMAIL=info@imperiumbailbonds.com
   ```
4. Update `app/api/contact/route.ts` (instructions in comments)
5. Restart dev server

## 🌐 Custom Domain Setup

1. In Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., imperiumbailbonds.com)
3. Follow DNS configuration instructions
4. Add both www and non-www versions

## 🔄 Language Switching

The language switcher is in the header. Language preference is saved in a cookie and persists across page visits.

## 📱 Testing on Mobile

1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Visit from mobile: `http://YOUR_IP:3000`

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
- `primary` colors: Main brand colors (blues)
- `accent` colors: Call-to-action colors (gold/amber)
- `trust` colors: Trust-building elements

### Change Fonts
Edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

### Update Phone Number
1. Edit contact info in Sanity Studio
2. Or update hardcoded numbers in:
   - `components/Footer.tsx`
   - `components/CallButton.tsx`
   - `app/contact/page.tsx`

## 🐛 Troubleshooting

### Build Errors
```bash
rm -rf node_modules .next
npm install --legacy-peer-deps
npm run build
```

### Sanity Studio Not Loading
- Clear browser cache
- Check if you're logged into Sanity
- Verify project ID in `.env.local`

### Images Not Loading
- Check `next.config.ts` image domains
- Verify Sanity CDN is accessible

## 📊 Analytics (Optional)

Add Google Analytics:
1. Get GA4 tracking ID
2. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Add tracking code to `app/layout.tsx`

## 🔒 Security Checklist

Before going live:
- [ ] Update placeholder phone numbers
- [ ] Update placeholder email addresses
- [ ] Add real business address
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check all page links work
- [ ] Verify language switching works
- [ ] Add real content to Sanity
- [ ] Set up SSL certificate (automatic with Vercel)

## 📞 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Sanity Docs: https://www.sanity.io/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Support: https://vercel.com/support

## ⏱️ Timeline to Launch

- **Day 1**: Setup + Add contact info and basic content
- **Day 2**: Add all services, FAQs, and reviews
- **Day 3**: Test, refine content, deploy to Vercel
- **Day 4**: Test with custom domain, final adjustments
- **Day 5**: Go live!

Target Launch: **Before February 4, 2025**
