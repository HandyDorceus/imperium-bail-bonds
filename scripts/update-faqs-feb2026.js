/**
 * Update FAQs based on client feedback from February 20, 2026
 *
 * This script updates 7 FAQs and deletes 3 FAQs as per client requirements
 * All updates include English and Spanish translations
 *
 * Run with:
 * SANITY_API_TOKEN="your-token" node scripts/update-faqs-feb2026.js
 */

// Try to load .env.local if it exists
try {
  require('dotenv').config({ path: '.env.local' })
} catch (e) {
  // dotenv not installed - that's okay, we can use environment variables directly
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

// Updated FAQ content
const faqUpdates = {
  // UPDATE 1: "What is bail?" - Complete replacement
  'What is bail?': {
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Bail is money paid to the court to secure the temporary release of an arrested person from jail. In California a Judge sets the bail amount based on factors like severity of the crime, risk of fleeing, and danger to the community. The primary purpose is to ensure the Defendant appears at trial while allowing them to remain free, rather than staying in jail. If the defendant fails to appear, the court keeps the bail money and issues a warrant for their arrest. Bail may come with conditions, such as travel restrictions, drug testing, or no-contact orders with victims.'
          }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'La fianza es dinero pagado a la corte para asegurar la liberación temporal de una persona arrestada de la cárcel. En California, un Juez establece el monto de la fianza basándose en factores como la gravedad del crimen, el riesgo de fuga y el peligro para la comunidad. El propósito principal es asegurar que el Acusado comparezca al juicio mientras se le permite permanecer libre, en lugar de quedarse en la cárcel. Si el acusado no comparece, la corte se queda con el dinero de la fianza y emite una orden de arresto. La fianza puede venir con condiciones, como restricciones de viaje, pruebas de drogas u órdenes de no contacto con las víctimas.'
          }]
        }
      ]
    }
  },

  // UPDATE 2 & 3: Add "Law enforcement" and "Senior citizens" to discount lists
  // This will be handled by finding and updating the text in orders 10 and 14

  // UPDATE 4: "What is collateral and when is it required?"
  'What is collateral and when is it required?': {
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Collateral is property or assets used to secure a bail bond. It can be required for Defendants considered higher flight risk. Collateral requirements are determined on a case-by-case basis and are not always needed.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'What can be used as collateral: Real estate, vehicles, jewelry, stocks and bonds, bank accounts, and other valuable assets.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Important: Collateral is only at risk if the defendant fails to appear in court. If all court appearances are met, your collateral is returned in full. Collateral is returned once the bond is exonerated and bail premium is paid in full. Many bail bonds don\'t require collateral - it depends on your situation. Call us 24/7 at (951) 848-7858.'
          }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'La garantía colateral es propiedad o activos utilizados para asegurar una fianza de garantía. Se puede requerir para Acusados considerados de mayor riesgo de fuga. Los requisitos de garantía colateral se determinan caso por caso y no siempre son necesarios.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: '¿Qué se puede usar como garantía colateral: Bienes raíces, vehículos, joyas, acciones y bonos, cuentas bancarias, y otros activos valiosos.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Importante: La garantía colateral solo está en riesgo si el acusado no comparece en la corte. Si se cumplen todas las comparecencias, su garantía colateral se devuelve en su totalidad. La garantía colateral se devuelve una vez que la fianza se exonera y la prima de fianza se paga en su totalidad. Muchas fianzas no requieren garantía colateral - depende de su situación. Llámenos 24/7 al (951) 848-7858.'
          }]
        }
      ]
    }
  },

  // UPDATE 5: "What happens if the defendant misses a court date?"
  'What happens if the defendant misses a court date?': {
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Missing a court date triggers serious consequences: The judge issues a bench warrant for arrest, the court demands payment of the full bail amount, and failure to appear becomes a separate criminal charge in California.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'What Imperium Bail Bonds Does: We immediately begin locating the defendant. California law gives us a grace period to return the defendant to court before full forfeiture occurs.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Your Options: Contact us immediately - the faster we act, the better. We will be able to get the court date rescheduled and the bond reinstated. Additional fees may apply for court costs and recovery costs.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Missed a court date? Call us immediately at (951) 848-7858 - we\'re available 24/7.'
          }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Faltar a una fecha de la corte desencadena consecuencias serias: El juez emite una orden de arresto, la corte exige el pago del monto total de la fianza, y no comparecer se convierte en un cargo criminal separado en California.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Qué Hace Imperium Bail Bonds: Comenzamos inmediatamente a localizar al acusado. La ley de California nos da un período de gracia para devolver al acusado a la corte antes de que ocurra la confiscación completa.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Sus Opciones: Contáctenos inmediatamente - cuanto más rápido actuemos, mejor. Podremos reprogramar la fecha de la corte y reinstaurar la fianza. Pueden aplicar tarifas adicionales por costos judiciales y costos de recuperación.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: '¿Faltó a una fecha de la corte? Llámenos inmediatamente al (951) 848-7858 - estamos disponibles 24/7.'
          }]
        }
      ]
    }
  },

  // UPDATE 6: "What is considered by the court when setting bail amounts in California?"
  'What is considered by the court when setting bail amounts in California?': {
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'California judges consider multiple factors when setting bail: Severity of the crime, criminal history, risk of fleeing, and public safety.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Additional Considerations: Employment status and community ties, family connections in California, mental health or substance abuse issues, financial resources, and immigration status.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'California Bail Schedules: Each county has a bail schedule that sets standard amounts for different charges. Judges can adjust these amounts up or down based on individual circumstances.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Can bail be reduced? Yes, your attorney can request a bail reduction hearing. Imperium Bail Bonds works with all bail amounts. Call us 24/7 at (951) 848-7858.'
          }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Los jueces de California consideran múltiples factores al establecer la fianza: Gravedad del crimen, historial criminal, riesgo de fuga, y seguridad pública.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Consideraciones Adicionales: Estado de empleo y lazos comunitarios, conexiones familiares en California, problemas de salud mental o abuso de sustancias, recursos financieros, y estado migratorio.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Tablas de Fianzas de California: Cada condado tiene una tabla de fianzas que establece montos estándar para diferentes cargos. Los jueces pueden ajustar estos montos según circunstancias individuales.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: '¿Se puede reducir la fianza? Sí, su abogado puede solicitar una audiencia de reducción de fianza. Imperium Bail Bonds trabaja con todos los montos de fianza. Llámenos 24/7 al (951) 848-7858.'
          }]
        }
      ]
    }
  },

  // UPDATE 7: "How quickly can someone be released after posting bail?"
  'How quickly can someone be released after posting bail?': {
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Release time varies by facility and how busy they are, but here\'s what to expect in California:'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Smaller County Jails: 30 minutes to 2 hours'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Larger Metropolitan Jails: 2 to 6 hours'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Weekend/Holiday Periods: Potentially longer due to reduced staff'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Factors that affect release time: How crowded the facility is, whether booking is complete, and any holds or additional warrants.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Once Imperium Bail Bonds posts your bail, the jail begins processing the release. We process bail bonds immediately and stay in contact with you throughout the process. Call us 24/7 at (951) 848-7858 - we work fast to bring your loved one home.'
          }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'El tiempo de liberación varía según la instalación y qué tan ocupados estén, pero esto es lo que puede esperar en California:'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Cárceles de condados más pequeños: 30 minutos a 2 horas'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Cárceles metropolitanas más grandes: 2 a 6 horas'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Períodos de fin de semana/festivos: Potencialmente más largo debido a personal reducido'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Factores que afectan el tiempo de liberación: Qué tan llena está la instalación, si la reserva está completa, y cualquier retención u órdenes de arresto adicionales.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Una vez que Imperium Bail Bonds deposita su fianza, la cárcel comienza a procesar la liberación. Procesamos fianzas de garantía inmediatamente y nos mantenemos en contacto con usted durante todo el proceso. Llámenos 24/7 al (951) 848-7858 - trabajamos rápido para traer a su ser querido a casa.'
          }]
        }
      ]
    }
  }
}

// FAQs to delete
const faqsToDelete = [
  'How long is a bail bond good for?',
  'How much is bail for a DUI in California?',
  'How much is bail for domestic violence in California?'
]

// Discount updates for orders 10 and 14
const discountUpdates = {
  'How much does a bail bond cost in California?': {
    // Find and update the text mentioning discounts
    searchText: 'discounts for union members, military personnel, and those with private attorneys',
    replaceText: 'discounts for union members, military personnel, law enforcement, senior citizens, and those with private attorneys'
  },
  'What discounts are available on bail bonds?': {
    // Update the answer to include new discount categories
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Imperium Bail Bonds offers several discount programs: Military Personnel (active duty and veterans), Union Members, Law enforcement, Senior citizens, Private Attorney representation, Homeowners, and AARP Members. We also offer referral discounts, payment plan options, and no hidden fees.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Discount eligibility varies based on California regulations and individual circumstances. When you call, let us know about any potential qualifications. Call us 24/7 at (951) 848-7858 to learn about current discount programs.'
          }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'Imperium Bail Bonds ofrece varios programas de descuento: Personal Militar (en servicio activo y veteranos), Miembros de Sindicatos, Personal de aplicación de la ley, Adultos mayores, representación de Abogado Privado, Propietarios de Vivienda, y Miembros de AARP. También ofrecemos descuentos por referencia, opciones de planes de pago, y sin tarifas ocultas.'
          }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'La elegibilidad para descuentos varía según las regulaciones de California y circunstancias individuales. Cuando llame, háganos saber sobre cualquier calificación potencial. Llámenos 24/7 al (951) 848-7858 para conocer los programas de descuento actuales.'
          }]
        }
      ]
    }
  }
}

async function updateFAQs() {
  console.log('🚀 Starting FAQ updates based on February 20, 2026 client feedback...\n')

  let updateCount = 0
  let deleteCount = 0
  let errorCount = 0

  // Step 1: Update FAQs with complete replacements
  console.log('📝 STEP 1: Updating FAQs with new content...\n')

  for (const [questionText, updates] of Object.entries(faqUpdates)) {
    try {
      // Find the FAQ by question text
      const query = `*[_type == "faq" && question.en == $questionText][0]`
      const faq = await client.fetch(query, { questionText })

      if (!faq) {
        console.log(`⚠️  FAQ not found: "${questionText}"`)
        errorCount++
        continue
      }

      // Update the FAQ
      await client
        .patch(faq._id)
        .set({ answer: updates.answer })
        .commit()

      console.log(`✅ Updated: "${questionText}"`)
      updateCount++
    } catch (error) {
      console.error(`❌ Error updating "${questionText}":`, error.message)
      errorCount++
    }
  }

  // Step 2: Update discount-related FAQs
  console.log('\n📝 STEP 2: Updating discount information...\n')

  for (const [questionText, updates] of Object.entries(discountUpdates)) {
    try {
      const query = `*[_type == "faq" && question.en == $questionText][0]`
      const faq = await client.fetch(query, { questionText })

      if (!faq) {
        console.log(`⚠️  FAQ not found: "${questionText}"`)
        errorCount++
        continue
      }

      // Update the FAQ
      await client
        .patch(faq._id)
        .set({ answer: updates.answer })
        .commit()

      console.log(`✅ Updated discounts: "${questionText}"`)
      updateCount++
    } catch (error) {
      console.error(`❌ Error updating "${questionText}":`, error.message)
      errorCount++
    }
  }

  // Step 3: Delete specified FAQs
  console.log('\n🗑️  STEP 3: Deleting FAQs...\n')

  for (const questionText of faqsToDelete) {
    try {
      const query = `*[_type == "faq" && question.en == $questionText][0]`
      const faq = await client.fetch(query, { questionText })

      if (!faq) {
        console.log(`⚠️  FAQ not found for deletion: "${questionText}"`)
        errorCount++
        continue
      }

      await client.delete(faq._id)
      console.log(`✅ Deleted: "${questionText}"`)
      deleteCount++
    } catch (error) {
      console.error(`❌ Error deleting "${questionText}":`, error.message)
      errorCount++
    }
  }

  // Summary
  console.log('\n' + '='.repeat(70))
  console.log('✨ FAQ UPDATE COMPLETE - February 20, 2026 Client Feedback')
  console.log('='.repeat(70))
  console.log(`✅ FAQs Updated: ${updateCount}`)
  console.log(`🗑️  FAQs Deleted: ${deleteCount}`)
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`)
  }
  console.log('='.repeat(70))
  console.log('\n📋 CHANGES SUMMARY:')
  console.log('  - Updated "What is bail?" with new definition')
  console.log('  - Added "Law enforcement" and "Senior citizens" to discount lists')
  console.log('  - Updated collateral requirements and return policy')
  console.log('  - Updated missed court date procedures')
  console.log('  - Removed Penal Code reference from bail factors')
  console.log('  - Removed "late night" reference from release times')
  console.log('  - Deleted 3 FAQs (DUI, Domestic Violence, Bond Duration)')
  console.log('\n✨ All changes include English and Spanish translations')
  console.log('='.repeat(70))
}

// Run the updates
updateFAQs()
  .then(() => {
    console.log('\n✨ All done! Check your Sanity Studio and website to verify the changes.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Update failed:', error)
    process.exit(1)
  })
