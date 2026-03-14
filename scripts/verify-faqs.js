/**
 * Verify FAQ updates
 * This script queries Sanity to verify all changes were applied correctly
 */

try {
  require('dotenv').config({ path: '.env.local' })
} catch (e) {}

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'n54hpimx',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function verifyFAQs() {
  console.log('🔍 Verifying FAQ updates...\n')

  // Get all FAQs
  const query = `*[_type == "faq"] | order(order asc) {
    _id,
    question,
    category,
    order
  }`

  const faqs = await client.fetch(query)

  console.log(`📊 Total FAQs in database: ${faqs.length}`)
  console.log(`   Expected: 22 (25 original - 3 deleted)\n`)

  // Verify deletions
  const deletedQuestions = [
    'How long is a bail bond good for?',
    'How much is bail for a DUI in California?',
    'How much is bail for domestic violence in California?'
  ]

  console.log('🗑️  VERIFYING DELETIONS:')
  for (const q of deletedQuestions) {
    const found = faqs.find(faq => faq.question.en === q)
    if (found) {
      console.log(`   ❌ FAILED: "${q}" still exists`)
    } else {
      console.log(`   ✅ Confirmed deleted: "${q}"`)
    }
  }

  // Verify updates
  const updatedQuestions = [
    'What is bail?',
    'How much does a bail bond cost in California?',
    'What discounts are available on bail bonds?',
    'What is collateral and when is it required?',
    'What happens if the defendant misses a court date?',
    'What is considered by the court when setting bail amounts in California?',
    'How quickly can someone be released after posting bail?'
  ]

  console.log('\n✏️  VERIFYING UPDATES:')
  for (const q of updatedQuestions) {
    const found = faqs.find(faq => faq.question.en === q)
    if (found) {
      console.log(`   ✅ Found: "${q}"`)
    } else {
      console.log(`   ❌ MISSING: "${q}"`)
    }
  }

  // Show all FAQs by category
  console.log('\n📋 FAQ LIST BY CATEGORY:\n')
  const categories = ['general', 'process', 'payment', 'legal']

  for (const cat of categories) {
    const catFAQs = faqs.filter(f => f.category === cat)
    console.log(`${cat.toUpperCase()} (${catFAQs.length}):`)
    catFAQs.forEach((faq, idx) => {
      console.log(`   ${idx + 1}. ${faq.question.en}`)
    })
    console.log('')
  }

  console.log('='.repeat(70))
  console.log('✨ Verification complete!')
  console.log('='.repeat(70))
}

verifyFAQs()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Verification failed:', error)
    process.exit(1)
  })
