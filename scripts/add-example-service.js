/**
 * Add Example Service to Sanity CMS
 *
 * This script adds a sample bail bond service to Sanity Studio
 * The client can add more services and modify this example later
 *
 * Run with:
 * node scripts/add-example-service.js
 */

// Try to load .env.local if it exists
try {
  require('dotenv').config({ path: '.env.local' })
} catch (e) {
  // dotenv not installed - that's okay
}

const { createClient } = require('@sanity/client')

// Initialize Sanity client
const client = createClient({
  projectId: 'n54hpimx',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Example service data
const exampleService = {
  _type: 'service',
  title: {
    en: '24/7 Bail Bond Services',
    es: 'Servicios de Fianzas 24/7'
  },
  slug: {
    _type: 'slug',
    current: '24-7-bail-bond-services'
  },
  description: {
    en: 'Fast, reliable bail bond services available 24 hours a day, 7 days a week. We serve all California counties with professional, confidential service.',
    es: 'Servicios de fianzas rápidos y confiables disponibles las 24 horas del día, los 7 días de la semana. Servimos todos los condados de California con servicio profesional y confidencial.'
  },
  content: {
    en: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Imperium Bail Bonds provides comprehensive bail bond services throughout California. Our experienced agents are available around the clock to help secure the release of your loved ones quickly and efficiently.' }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'What We Offer' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Our 24/7 bail bond services include immediate phone consultation, flexible payment plans with low down payments, service in all 58 California counties, and professional, confidential assistance throughout the entire process.' }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Why Choose Imperium Bail Bonds?' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'We understand that being arrested is stressful for both the defendant and their family. That\'s why we offer fast processing, compassionate service, transparent pricing with no hidden fees, and ongoing support until your case is resolved.' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Call us now at (951) 848-7858 - we\'re here to help 24/7.' }]
      }
    ],
    es: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Imperium Bail Bonds proporciona servicios integrales de fianzas en toda California. Nuestros agentes experimentados están disponibles las 24 horas para ayudar a asegurar la liberación de sus seres queridos de manera rápida y eficiente.' }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: 'Lo Que Ofrecemos' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Nuestros servicios de fianzas 24/7 incluyen consulta telefónica inmediata, planes de pago flexibles con pagos iniciales bajos, servicio en los 58 condados de California, y asistencia profesional y confidencial durante todo el proceso.' }]
      },
      {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: '¿Por Qué Elegir Imperium Bail Bonds?' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Entendemos que ser arrestado es estresante tanto para el acusado como para su familia. Por eso ofrecemos procesamiento rápido, servicio compasivo, precios transparentes sin tarifas ocultas, y apoyo continuo hasta que se resuelva su caso.' }]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Llámenos ahora al (951) 848-7858 - estamos aquí para ayudar 24/7.' }]
      }
    ]
  },
  features: [
    {
      en: 'Available 24 hours a day, 7 days a week',
      es: 'Disponible 24 horas al día, 7 días a la semana'
    },
    {
      en: 'Serving all 58 California counties',
      es: 'Sirviendo los 58 condados de California'
    },
    {
      en: 'Flexible payment plans available',
      es: 'Planes de pago flexibles disponibles'
    },
    {
      en: 'Fast release processing',
      es: 'Procesamiento rápido de liberación'
    },
    {
      en: 'Professional and confidential service',
      es: 'Servicio profesional y confidencial'
    }
  ],
  order: 1
}

async function addExampleService() {
  console.log('🚀 Adding example service to Sanity...')

  try {
    // Check if service already exists
    const existing = await client.fetch(`*[_type == "service" && slug.current == "${exampleService.slug.current}"][0]`)

    if (existing) {
      console.log('⚠️  Example service already exists. Skipping...')
      console.log(`   Service: ${existing.title.en}`)
      return
    }

    // Create the service
    const result = await client.create(exampleService)
    console.log('✅ Successfully added example service!')
    console.log(`   Title: ${result.title.en}`)
    console.log(`   Slug: ${result.slug.current}`)
    console.log(`   ID: ${result._id}`)

    console.log('\n✨ The service is now available in Sanity Studio and on your website!')
  } catch (error) {
    console.error('❌ Error adding service:', error.message)
    throw error
  }
}

// Run the script
addExampleService()
  .then(() => {
    console.log('\n✨ All done! Check your website to see the service.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Failed to add service:', error)
    process.exit(1)
  })
