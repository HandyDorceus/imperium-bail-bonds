# FAQ Import Script Instructions

This script will automatically import all 25 comprehensive FAQs into your Sanity CMS.

## Prerequisites

Your Sanity API token should already be in `.env.local` file.

## How to Run

### Easiest Way - Run with environment variable inline:

```bash
# Run with the token from .env.local
SANITY_API_TOKEN=sk4M5PPP5Y2QBucYIVXnVP8usrHxrpD78ux59PGZp2xXJ3TiAztOivkMdr1dwaLFhWklQjBmEkmbe3xBrCc8MNcUNmkCkGhisIalWOmRhnt7dcYH8lQZ4Gc3kS2IMJkd5afEUNP4bICwLujWjk3SVxMFpUIuqp1InaN1hmrEocGf4cTfbXWQ node scripts/import-faqs.js
```

### Alternative - Export and run:

```bash
# Export the token first
export SANITY_API_TOKEN=sk4M5PPP5Y2QBucYIVXnVP8usrHxrpD78ux59PGZp2xXJ3TiAztOivkMdr1dwaLFhWklQjBmEkmbe3xBrCc8MNcUNmkCkGhisIalWOmRhnt7dcYH8lQZ4Gc3kS2IMJkd5afEUNP4bICwLujWjk3SVxMFpUIuqp1InaN1hmrEocGf4cTfbXWQ

# Run the import script
node scripts/import-faqs.js
```

## What the script does

The script will:
1. Connect to your Sanity project
2. Import all 25 FAQs with both English and Spanish content
3. Set proper categories (general, process, payment, legal)
4. Set display order (1-25)
5. Show progress for each FAQ imported

## Expected Output

```
🚀 Starting FAQ import...
📝 Importing 25 FAQs to Sanity...
✅ Imported FAQ #1: What is bail?
✅ Imported FAQ #2: What is a bail bond?
✅ Imported FAQ #3: How does a bail bond work?
...
✅ Imported FAQ #25: What hours do you operate?

============================================================
✨ Import complete!
✅ Successfully imported: 25 FAQs
============================================================

✨ All done! Check your Sanity Studio to see the imported FAQs.
```

## After Import

1. Go to your Sanity Studio at `/studio`
2. Navigate to the FAQ section
3. You should see all 25 FAQs
4. They're already organized by category and display order
5. Both English and Spanish content is included

## Troubleshooting

**Error: "Insufficient permissions"**
- Make sure your API token has Editor or Admin permissions

**Error: "Project not found"**
- Check that NEXT_PUBLIC_SANITY_PROJECT_ID is set correctly in your .env files

**Error: "Dataset not found"**
- Check that NEXT_PUBLIC_SANITY_DATASET is set correctly (usually "production")

**Some FAQs failed to import:**
- Check the error messages in the console
- You can re-run the script - it will create new documents (won't update existing)
- To avoid duplicates, delete all FAQs first and re-run

## Starting Fresh

If you want to delete all existing FAQs and start over:

```bash
# Go to Sanity Studio
# Navigate to FAQ section
# Select all FAQs
# Delete them
# Then run the import script again
```

## Notes

- The script creates NEW documents each time it runs
- Running it multiple times will create duplicate FAQs
- Delete existing FAQs first if you want to re-import
- The import takes about 30-60 seconds to complete
