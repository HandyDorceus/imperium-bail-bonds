# Imperium Bail Bonds Website

A professional, bilingual (English/Spanish) website for Imperium Bail Bonds built with Next.js 14, Sanity CMS, and Tailwind CSS.

## Features

- **Bilingual Support**: Full English and Spanish translations with easy language switching
- **Content Management**: Integrated Sanity CMS for easy content updates
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Contact Form**: Validated contact form with React Hook Form and Zod
- **Fast Performance**: Built with Next.js 14 App Router and optimized images
- **Accessible**: WCAG 2.1 AA compliant

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity CMS v3
- **Forms**: React Hook Form, Zod validation
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **Email**: Resend (optional)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Sanity account (free tier available at sanity.io)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd imperium-bail-bonds
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your configuration:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID (already set to `n54hpimx`)
   - `NEXT_PUBLIC_SANITY_DATASET`: Your dataset name (default: `production`)
   - `SANITY_API_TOKEN`: Your Sanity API token (optional for development)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Accessing Sanity Studio

The Sanity Studio is embedded in the application and accessible at:
```
http://localhost:3000/studio
```

You'll need to authenticate with your Sanity account the first time you access it.

## Project Structure

```
imperium-bail-bonds/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes
│   ├── contact/             # Contact page
│   ├── faq/                 # FAQ page
│   ├── reviews/             # Reviews page
│   ├── services/            # Services page
│   ├── studio/              # Sanity Studio
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   ├── CTAButton.tsx
│   └── CallButton.tsx
├── i18n/                    # Internationalization
│   ├── messages/
│   │   ├── en.json         # English translations
│   │   └── es.json         # Spanish translations
│   └── request.ts          # i18n configuration
├── lib/                     # Utility functions
├── sanity/                  # Sanity CMS configuration
│   ├── lib/                # Sanity client and utilities
│   └── schemas/            # Content schemas
├── public/                  # Static assets
├── next.config.ts          # Next.js configuration
├── sanity.config.ts        # Sanity configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Content Management

### Adding Content via Sanity Studio

1. **Access the Studio**: Go to `/studio` on your local or deployed site
2. **Available Content Types**:
   - **Pages**: General page content
   - **Services**: Bail bond services
   - **FAQs**: Frequently asked questions
   - **Reviews**: Customer testimonials
   - **Contact Info**: Contact details and business hours

3. **Bilingual Content**: All content fields support both English and Spanish. Fill in both language versions for complete bilingual support.

### Content Types

#### Services
- Title (bilingual)
- Description (bilingual)
- Full content (bilingual, rich text)
- Features list
- Display order

#### FAQs
- Question (bilingual)
- Answer (bilingual, rich text)
- Category (General, Process, Payment, Legal)
- Display order

#### Reviews
- Customer name
- Rating (1-5 stars)
- Review text (bilingual)
- Date
- Featured flag
- Approved flag

#### Contact Info
- Phone number
- Email address
- Physical address
- Business hours (bilingual)
- Emergency message (bilingual)
- Social media links

## Deployment

### Deploy to Vercel

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**
   In Vercel project settings, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN` (if needed)
   - `RESEND_API_KEY` (for email functionality)

4. **Deploy**
   Vercel will automatically deploy on every push to main branch

### Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions

## Email Integration (Optional)

To enable the contact form email functionality:

1. **Sign up for Resend**: [resend.com](https://resend.com)
2. **Get your API key**
3. **Add to environment variables**:
   ```env
   RESEND_API_KEY=your_api_key
   CONTACT_EMAIL=info@imperiumbailbonds.com
   ```
4. **Update the API route** at `app/api/contact/route.ts` (instructions included in comments)

## Customization

### Brand Colors

Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: { /* Deep blues */ },
  accent: { /* Gold/amber accents */ },
  trust: { /* Trust-building colors */ }
}
```

### Fonts

The project uses Google Fonts (Inter and Montserrat). To change fonts, edit `app/layout.tsx`:
```typescript
import { YourFont, YourHeadingFont } from "next/font/google";
```

### Translations

Edit translation files in `i18n/messages/`:
- `en.json`: English translations
- `es.json`: Spanish translations

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. The route is automatically created based on folder name
4. Add translations to `i18n/messages/`

### Adding New Sanity Schemas

1. Create schema file in `sanity/schemas/`
2. Import and add to `sanity/schemas/index.ts`
3. The schema will appear in Sanity Studio automatically

## Important Dates

- **Deadline**: February 4, 2025
- **Launch Target**: Before deadline

## Support

For questions or issues:
1. Check existing documentation
2. Review Sanity documentation: [sanity.io/docs](https://www.sanity.io/docs)
3. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## License

Private - All rights reserved by Imperium Bail Bonds

## Credits

Built with Next.js, Sanity CMS, and Tailwind CSS
