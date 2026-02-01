/**
 * Import FAQs to Sanity CMS
 *
 * This script imports all 25 comprehensive FAQs into Sanity Studio
 *
 * Run with:
 * SANITY_API_TOKEN="your-token" node scripts/import-faqs.js
 *
 * Or set SANITY_API_TOKEN in .env.local first
 */

// Try to load .env.local if it exists (optional - only if dotenv is installed)
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

// FAQ data
const faqs = [
  {
    order: 1,
    category: 'general',
    question: {
      en: 'What is bail?',
      es: '¿Qué es una fianza?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Bail is money paid to the court to secure the temporary release of someone who has been arrested. In California, a judge sets the bail amount based on the charges, criminal history, and flight risk. By posting bail, you\'re ensuring the defendant will appear for all court dates. If they attend all required court appearances, the bail money is returned at the end of the case.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Think of bail as a financial guarantee to the court. It allows your loved one to await their trial at home rather than in custody. Call us 24/7 at (951) 848-7858 to get started.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'La fianza es el dinero pagado a la corte para asegurar la liberación temporal de alguien que ha sido arrestado. En California, un juez establece el monto de la fianza basándose en los cargos, historial criminal y riesgo de fuga. Al pagar la fianza, está asegurando que el acusado comparecerá en todas las fechas de la corte. Si asisten a todas las comparecencias requeridas, el dinero de la fianza se devuelve al final del caso.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Piense en la fianza como una garantía financiera para la corte. Permite que su ser querido espere su juicio en casa en lugar de estar bajo custodia. Llámenos 24/7 al (951) 848-7858 para comenzar.' }]
        }
      ]
    }
  },
  {
    order: 2,
    category: 'general',
    question: {
      en: 'What is a bail bond?',
      es: '¿Qué es una fianza de garantía?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'A bail bond is a financial guarantee provided by a licensed bail bond company like Imperium Bail Bonds. Instead of paying the full bail amount to the court (which could be tens of thousands of dollars), you pay us a premium - typically 10% of the total bail amount in California.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'For example, if bail is set at $20,000, you would pay Imperium $2,000 (10%), and we post the full $20,000 bail with the court. This 10% premium is regulated by the California Department of Insurance and is non-refundable, as it\'s our fee for taking on the financial risk.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'We\'re available 24/7 to help your family. Contact us at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Una fianza de garantía es una garantía financiera proporcionada por una compañía de fianzas con licencia como Imperium Bail Bonds. En lugar de pagar el monto total de la fianza a la corte (que podría ser decenas de miles de dólares), nos paga una prima - típicamente el 10% del monto total de la fianza en California.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Por ejemplo, si la fianza se establece en $20,000, usted pagaría a Imperium $2,000 (10%), y nosotros depositamos los $20,000 completos con la corte. Esta prima del 10% está regulada por el Departamento de Seguros de California y no es reembolsable, ya que es nuestra tarifa por asumir el riesgo financiero.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Estamos disponibles 24/7 para ayudar a su familia. Contáctenos al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 3,
    category: 'general',
    question: {
      en: 'How does a bail bond work?',
      es: '¿Cómo funciona una fianza de garantía?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'The bail bond process is simple and fast with Imperium Bail Bonds:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '1. Contact Us: Call (951) 848-7858 anytime - we\'re available 24/7. Our agent will gather basic information about the defendant and the charges.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '2. Complete Paperwork: We can handle paperwork over the phone, online, or in person - whatever works best for you. This typically takes 15-20 minutes.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '3. Post Bail: Once payment is arranged (we offer payment plans), we immediately post the bail bond with the jail. Release typically occurs within 30 minutes to a few hours depending on the facility.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '4. Release & Support: Your loved one is released, and we provide ongoing support to ensure all court dates are met.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'We serve all counties in California and make the process as stress-free as possible.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'El proceso de fianza de garantía es simple y rápido con Imperium Bail Bonds:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '1. Contáctenos: Llame al (951) 848-7858 en cualquier momento - estamos disponibles 24/7. Nuestro agente recopilará información básica sobre el acusado y los cargos.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '2. Complete el papeleo: Podemos manejar el papeleo por teléfono, en línea o en persona - lo que funcione mejor para usted. Esto típicamente toma 15-20 minutos.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '3. Deposite la fianza: Una vez que se acuerde el pago (ofrecemos planes de pago), inmediatamente depositamos la fianza con la cárcel. La liberación típicamente ocurre dentro de 30 minutos a pocas horas dependiendo de la instalación.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '4. Liberación y apoyo: Su ser querido es liberado, y proporcionamos apoyo continuo para asegurar que se cumplan todas las fechas de la corte.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Servimos todos los condados de California y hacemos el proceso lo menos estresante posible.' }]
        }
      ]
    }
  },
  {
    order: 4,
    category: 'general',
    question: {
      en: 'What is the difference between bail amount and premium?',
      es: '¿Cuál es la diferencia entre el monto de la fianza y la prima?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'The bail amount is the total sum set by the court that must be posted for release. The premium is the fee you pay to the bail bond company.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Example:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Bail Amount (set by court): $50,000' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Premium (paid to Imperium): $5,000 (10%)' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'In California, bail bond companies are regulated by the California Department of Insurance to charge exactly 10% as the premium. This 10% is your cost for our service and is non-refundable - similar to an insurance premium. We assume the financial risk of the full $50,000 bail amount.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'The advantage? Instead of needing $50,000 upfront, you only need $5,000, and we offer payment plans to make it even more manageable. Call us 24/7 at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'El monto de la fianza es la suma total establecida por la corte que debe ser depositada para la liberación. La prima es la tarifa que usted paga a la compañía de fianzas.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Ejemplo:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Monto de la Fianza (establecido por la corte): $50,000' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Prima (pagada a Imperium): $5,000 (10%)' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'En California, las compañías de fianzas están reguladas por el Departamento de Seguros de California para cobrar exactamente el 10% como prima. Este 10% es su costo por nuestro servicio y no es reembolsable - similar a una prima de seguro. Asumimos el riesgo financiero del monto total de $50,000.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¿La ventaja? En lugar de necesitar $50,000 por adelantado, solo necesita $5,000, y ofrecemos planes de pago para hacerlo aún más manejable. Llámenos 24/7 al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 5,
    category: 'process',
    question: {
      en: 'What is the jail booking process?',
      es: '¿Cuál es el proceso de reserva en la cárcel?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'After an arrest in California, the defendant goes through a booking process before bail can be posted:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '1. Personal Information Recording: Name, date of birth, physical description, and photograph are documented.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '2. Criminal Background Check: The jail checks for outstanding warrants and prior criminal history.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '3. Health Screening: Basic medical questions and sometimes a health examination.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '4. Personal Property: Belongings are inventoried and stored.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '5. Fingerprinting and DNA: Biometric data is collected.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '6. Bail Setting: The judge reviews the charges and sets bail based on California bail schedules.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'This process can take anywhere from 2-8 hours depending on how busy the facility is. Once booking is complete and bail is set, we can immediately post the bail bond. Available 24/7 at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Después de un arresto en California, el acusado pasa por un proceso de reserva antes de que se pueda depositar la fianza:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '1. Registro de Información Personal: Se documenta nombre, fecha de nacimiento, descripción física y fotografía.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '2. Verificación de Antecedentes Criminales: La cárcel verifica órdenes de arresto pendientes e historial criminal previo.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '3. Evaluación de Salud: Preguntas médicas básicas y a veces un examen de salud.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '4. Propiedad Personal: Las pertenencias se inventarían y almacenan.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '5. Huellas Dactilares y ADN: Se recopilan datos biométricos.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '6. Establecimiento de Fianza: El juez revisa los cargos y establece la fianza basándose en las tablas de fianzas de California.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Este proceso puede tomar de 2-8 horas dependiendo de qué tan ocupada esté la instalación. Una vez que se complete la reserva y se establezca la fianza, podemos depositar inmediatamente la fianza de garantía. Disponible 24/7 al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 6,
    category: 'process',
    question: {
      en: 'Can you bail someone out of jail on a weekend?',
      es: '¿Puede sacar a alguien de la cárcel en un fin de semana?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Absolutely! Imperium Bail Bonds operates 24 hours a day, 7 days a week, including weekends, holidays, and overnight hours. Arrests don\'t follow a business schedule, and neither do we.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'While court proceedings may be delayed until the next business day, we can post bail at any time once it\'s been set. Many California jails process releases around the clock.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'We understand that when someone you love is arrested, every minute matters. That\'s why we\'re always available - day or night, weekend or weekday. Call us now at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¡Absolutamente! Imperium Bail Bonds opera 24 horas al día, 7 días a la semana, incluyendo fines de semana, días festivos y horas nocturnas. Los arrestos no siguen un horario comercial, y nosotros tampoco.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Aunque los procedimientos judiciales pueden retrasarse hasta el siguiente día hábil, podemos depositar la fianza en cualquier momento una vez que se haya establecido. Muchas cárceles de California procesan liberaciones las 24 horas.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Entendemos que cuando alguien que ama es arrestado, cada minuto cuenta. Por eso siempre estamos disponibles - día o noche, fin de semana o día de semana. Llámenos ahora al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 7,
    category: 'process',
    question: {
      en: 'Can you bail yourself out of jail?',
      es: '¿Puede sacarse usted mismo de la cárcel?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Yes, you can bail yourself out of jail in California, but it\'s often challenging for practical reasons.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'If paying full bail directly to the court: You would need the entire bail amount in cash or cashier\'s check, which could be tens of thousands of dollars. This money is tied up until the case concludes.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'If using a bail bond company: You\'ll need someone on the outside to contact us and arrange payment, since you won\'t have access to phones, computers, or your belongings while in custody.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Practical solution: Most people have a family member, friend, or attorney contact Imperium Bail Bonds on their behalf. We can often complete the paperwork over the phone and have you released within hours. Call us 24/7 at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Sí, puede sacarse usted mismo de la cárcel en California, pero a menudo es desafiante por razones prácticas.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Si paga la fianza completa directamente a la corte: Necesitaría el monto total de la fianza en efectivo o cheque de caja, que podría ser decenas de miles de dólares. Este dinero queda retenido hasta que concluya el caso.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Si usa una compañía de fianzas: Necesitará que alguien fuera se ponga en contacto con nosotros y arregle el pago, ya que no tendrá acceso a teléfonos, computadoras o sus pertenencias mientras esté bajo custodia.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Solución práctica: La mayoría de las personas tienen un familiar, amigo o abogado que contacta a Imperium Bail Bonds en su nombre. A menudo podemos completar el papeleo por teléfono y tenerlo liberado en cuestión de horas. Llámenos 24/7 al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 8,
    category: 'process',
    question: {
      en: 'How quickly can someone be released after posting bail?',
      es: '¿Qué tan rápido puede ser liberada alguien después de depositar la fianza?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Release time varies by facility and how busy they are, but here\'s what to expect in California:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Smaller County Jails: 30 minutes to 2 hours' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Larger Metropolitan Jails: 2 to 6 hours' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Weekend/Holiday Periods: Potentially longer due to reduced staff' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Factors that affect release time: How crowded the facility is, time of day (late night may be slower), whether booking is complete, and any holds or additional warrants.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Once Imperium Bail Bonds posts your bail, the jail begins processing the release. We process bail bonds immediately and stay in contact with you throughout the process. Call us 24/7 at (951) 848-7858 - we work fast to bring your loved one home.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'El tiempo de liberación varía según la instalación y qué tan ocupados estén, pero esto es lo que puede esperar en California:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Cárceles de condados más pequeños: 30 minutos a 2 horas' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Cárceles metropolitanas más grandes: 2 a 6 horas' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Períodos de fin de semana/festivos: Potencialmente más largo debido a personal reducido' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Factores que afectan el tiempo de liberación: Qué tan llena está la instalación, hora del día (tarde en la noche puede ser más lento), si la reserva está completa, y cualquier retención u órdenes de arresto adicionales.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Una vez que Imperium Bail Bonds deposita su fianza, la cárcel comienza a procesar la liberación. Procesamos fianzas de garantía inmediatamente y nos mantenemos en contacto con usted durante todo el proceso. Llámenos 24/7 al (951) 848-7858 - trabajamos rápido para traer a su ser querido a casa.' }]
        }
      ]
    }
  },
  {
    order: 9,
    category: 'process',
    question: {
      en: 'What do I need to bail someone out of jail?',
      es: '¿Qué necesito para sacar a alguien de la cárcel?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'To bail someone out of jail with Imperium Bail Bonds, you\'ll need:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Basic Information: Defendant\'s full name, date of birth, jail location, and booking number (if available - we can help you find this).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'For the Co-Signer: Valid government-issued ID, proof of California residency, employment information or proof of income, and Social Security Number.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Financial: Down payment for the 10% premium (we offer payment plans). Collateral may be required for larger bail amounts.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Good news: Much of this can be handled over the phone or online. We make the process as simple as possible. Call us 24/7 at (951) 848-7858 to get started.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Para sacar a alguien de la cárcel con Imperium Bail Bonds, necesitará:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Información Básica: Nombre completo del acusado, fecha de nacimiento, ubicación de la cárcel, y número de reserva (si está disponible - podemos ayudarlo a encontrarlo).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Para el Co-firmante: Identificación válida emitida por el gobierno, prueba de residencia en California, información de empleo o prueba de ingresos, y Número de Seguro Social.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Financiero: Pago inicial para la prima del 10% (ofrecemos planes de pago). Se puede requerir garantía colateral para montos de fianza más grandes.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Buenas noticias: Gran parte de esto se puede manejar por teléfono o en línea. Hacemos el proceso lo más simple posible. Llámenos 24/7 al (951) 848-7858 para comenzar.' }]
        }
      ]
    }
  },
  {
    order: 10,
    category: 'payment',
    question: {
      en: 'How much does a bail bond cost in California?',
      es: '¿Cuánto cuesta una fianza de garantía en California?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'In California, bail bond costs are regulated by the California Department of Insurance. The standard premium is 10% of the total bail amount set by the court.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Examples:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Bail: $10,000 → Premium: $1,000' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Bail: $25,000 → Premium: $2,500' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Bail: $50,000 → Premium: $5,000' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'This 10% premium is non-refundable - it\'s our fee for posting the full bail amount and assuming the financial risk. Imperium Bail Bonds offers flexible payment plans, discounts for union members, military personnel, and those with private attorneys, and no hidden fees. Call us 24/7 at (951) 848-7858 for a free consultation.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'En California, los costos de las fianzas de garantía están regulados por el Departamento de Seguros de California. La prima estándar es 10% del monto total de la fianza establecido por la corte.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Ejemplos:' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Fianza: $10,000 → Prima: $1,000' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Fianza: $25,000 → Prima: $2,500' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '- Fianza: $50,000 → Prima: $5,000' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Esta prima del 10% no es reembolsable - es nuestra tarifa por depositar el monto total de la fianza y asumir el riesgo financiero. Imperium Bail Bonds ofrece planes de pago flexibles, descuentos para miembros de sindicatos, personal militar y aquellos con abogados privados, y sin tarifas ocultas. Llámenos 24/7 al (951) 848-7858 para una consulta gratuita.' }]
        }
      ]
    }
  },
  {
    order: 11,
    category: 'payment',
    question: {
      en: 'Is the bail bond premium refundable?',
      es: '¿Es reembolsable la prima de la fianza de garantía?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'No, the bail bond premium is non-refundable in California. The 10% premium you pay to Imperium Bail Bonds is our fee for providing a financial service - similar to paying an insurance premium.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'When you pay us $1,000 for a $10,000 bail bond, we\'re immediately posting the full $10,000 with the court and assuming all the financial risk. The court holds the full bail throughout the case and returns it to us - not to you - when the defendant appears at all court dates.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'The benefit to you: Instead of tying up $10,000 of your own money for months or years, you only pay $1,000 and can keep your savings accessible. Questions? Call us 24/7 at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'No, la prima de la fianza de garantía no es reembolsable en California. La prima del 10% que paga a Imperium Bail Bonds es nuestra tarifa por proporcionar un servicio financiero - similar a pagar una prima de seguro.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Cuando nos paga $1,000 por una fianza de garantía de $10,000, estamos depositando inmediatamente los $10,000 completos con la corte y asumiendo todo el riesgo financiero. La corte retiene la fianza completa durante todo el caso y nos la devuelve a nosotros - no a usted - cuando el acusado comparece en todas las fechas de la corte.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'El beneficio para usted: En lugar de inmovilizar $10,000 de su propio dinero durante meses o años, solo paga $1,000 y puede mantener sus ahorros accesibles. ¿Preguntas? Llámenos 24/7 al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 12,
    category: 'payment',
    question: {
      en: 'Do you offer payment plans?',
      es: '¿Ofrecen planes de pago?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Yes! Imperium Bail Bonds offers flexible, customized payment plans to qualified applicants. We understand that coming up with the full bail bond premium immediately can be difficult.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'How our payment plans work: Low down payment options, flexible monthly installments, no interest charges, and quick approval process.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Payment plan requirements: Stable employment or income source, California residency, valid identification, and responsible co-signer.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Every family\'s situation is unique, so we work with you to create a payment plan that fits your budget. Call us 24/7 at (951) 848-7858 to discuss payment options.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¡Sí! Imperium Bail Bonds ofrece planes de pago flexibles y personalizados para solicitantes calificados. Entendemos que reunir la prima completa de la fianza de garantía inmediatamente puede ser difícil.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Cómo funcionan nuestros planes de pago: Opciones de pago inicial bajo, cuotas mensuales flexibles, sin cargos por intereses, y proceso de aprobación rápido.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Requisitos del plan de pago: Empleo estable o fuente de ingresos, residencia en California, identificación válida, y co-firmante responsable.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'La situación de cada familia es única, por lo que trabajamos con usted para crear un plan de pago que se ajuste a su presupuesto. Llámenos 24/7 al (951) 848-7858 para discutir opciones de pago.' }]
        }
      ]
    }
  },
  {
    order: 13,
    category: 'payment',
    question: {
      en: 'What forms of payment do you accept?',
      es: '¿Qué formas de pago aceptan?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Imperium Bail Bonds accepts multiple payment methods for your convenience: Cash, Credit Cards (Visa, MasterCard, American Express, Discover), Debit Cards, Money Orders, Cashier\'s Checks, Bank Transfers/Wire Transfers, Online Payment, and Payment Plans with approved credit.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Payment Options: Pay in person at our office, pay over the phone, pay online through our secure portal, or set up automatic monthly payments for payment plans.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'We make it easy to pay however works best for you. Call us 24/7 at (951) 848-7858 to arrange payment.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Imperium Bail Bonds acepta múltiples métodos de pago para su conveniencia: Efectivo, Tarjetas de Crédito (Visa, MasterCard, American Express, Discover), Tarjetas de Débito, Giros Postales, Cheques de Caja, Transferencias Bancarias/Transferencias Electrónicas, Pago en Línea, y Planes de Pago con crédito aprobado.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Opciones de Pago: Pagar en persona en nuestra oficina, pagar por teléfono, pagar en línea a través de nuestro portal seguro, o configurar pagos mensuales automáticos para planes de pago.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Facilitamos el pago de la manera que funcione mejor para usted. Llámenos 24/7 al (951) 848-7858 para organizar el pago.' }]
        }
      ]
    }
  },
  {
    order: 14,
    category: 'payment',
    question: {
      en: 'What discounts are available on bail bonds?',
      es: '¿Qué descuentos están disponibles en fianzas de garantía?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Imperium Bail Bonds offers several discount programs: Military Personnel (active duty and veterans), Union Members, Private Attorney representation, Homeowners, and AARP Members. We also offer referral discounts, payment plan options, and no hidden fees.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Discount eligibility varies based on California regulations and individual circumstances. When you call, let us know about any potential qualifications. Call us 24/7 at (951) 848-7858 to learn about current discount programs.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Imperium Bail Bonds ofrece varios programas de descuento: Personal Militar (en servicio activo y veteranos), Miembros de Sindicatos, representación de Abogado Privado, Propietarios de Vivienda, y Miembros de AARP. También ofrecemos descuentos por referencia, opciones de planes de pago, y sin tarifas ocultas.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'La elegibilidad para descuentos varía según las regulaciones de California y circunstancias individuales. Cuando llame, háganos saber sobre cualquier calificación potencial. Llámenos 24/7 al (951) 848-7858 para conocer los programas de descuento actuales.' }]
        }
      ]
    }
  },
  {
    order: 15,
    category: 'payment',
    question: {
      en: 'What is collateral and when is it required?',
      es: '¿Qué es la garantía colateral y cuándo se requiere?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Collateral is property or assets used to secure a bail bond. It\'s required for high bail amounts (typically over $50,000), defendants considered higher flight risk, co-signers with limited credit history, or out-of-state defendants.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'What can be used as collateral: Real estate, vehicles, jewelry, stocks and bonds, bank accounts, and other valuable assets.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Important: Collateral is only at risk if the defendant fails to appear in court. If all court appearances are met, your collateral is returned in full. Many bail bonds don\'t require collateral - it depends on your situation. Call us 24/7 at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'La garantía colateral es propiedad o activos utilizados para asegurar una fianza de garantía. Se requiere para montos de fianza altos (típicamente sobre $50,000), acusados considerados mayor riesgo de fuga, co-firmantes con historial de crédito limitado, o acusados fuera del estado.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¿Qué se puede usar como garantía colateral: Bienes raíces, vehículos, joyas, acciones y bonos, cuentas bancarias, y otros activos valiosos.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Importante: La garantía colateral solo está en riesgo si el acusado no comparece en la corte. Si se cumplen todas las comparecencias, su garantía colateral se devuelve en su totalidad. Muchas fianzas no requieren garantía colateral - depende de su situación. Llámenos 24/7 al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 16,
    category: 'legal',
    question: {
      en: 'Who is a co-signer (indemnitor) and what are their responsibilities?',
      es: '¿Quién es un co-firmante (indemnizador) y cuáles son sus responsabilidades?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'A co-signer (also called indemnitor or guarantor) is the person who signs the bail bond agreement and agrees to be financially responsible for ensuring the defendant appears in court.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Co-Signer Responsibilities: Financial guarantee for the full bail amount if defendant fails to appear, ensure defendant attends ALL court dates, keep in contact with defendant and bail bond company, inform us of any address or phone changes, and ensure defendant follows all court-ordered conditions.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Who can be a co-signer: Must be 18+ years old, California resident preferred, verifiable employment or income, and valid government-issued ID.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'We support co-signers throughout the process with court date reminders and check-ins. Call us 24/7 at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Un co-firmante (también llamado indemnizador o garante) es la persona que firma el acuerdo de fianza de garantía y acepta ser financieramente responsable de asegurar que el acusado comparezca en la corte.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Responsabilidades del Co-firmante: Garantía financiera por el monto total de la fianza si el acusado no comparece, asegurar que el acusado asista a TODAS las fechas de la corte, mantener contacto con el acusado y la compañía de fianzas, informarnos de cualquier cambio de dirección o teléfono, y asegurar que el acusado siga todas las condiciones ordenadas por la corte.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¿Quién puede ser co-firmante: Debe tener 18+ años de edad, residente de California preferido, empleo o ingresos verificables, e identificación válida emitida por el gobierno.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Apoyamos a los co-firmantes durante todo el proceso con recordatorios de fechas de la corte. Llámenos 24/7 al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 17,
    category: 'legal',
    question: {
      en: 'What does it mean when a bail bond is exonerated?',
      es: '¿Qué significa cuando una fianza de garantía es exonerada?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'A bail bond is "exonerated" when the court releases the bail bond company from financial responsibility. This happens when the case is resolved - whether dismissed, defendant found not guilty, defendant sentenced, or defendant completes all court requirements.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'What happens after exoneration: Imperium Bail Bonds is released from our obligation to the court. However, the premium you paid (typically 10%) is non-refundable. If you posted collateral, it will be returned once exoneration is complete.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Important: Exoneration doesn\'t mean the case was won or lost - it simply means the bail bond contract is complete. Questions? Call us 24/7 at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Una fianza de garantía es "exonerada" cuando la corte libera a la compañía de fianzas de la responsabilidad financiera. Esto sucede cuando el caso se resuelve - ya sea desestimado, acusado declarado no culpable, acusado sentenciado, o acusado completa todos los requisitos de la corte.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¿Qué sucede después de la exoneración: Imperium Bail Bonds es liberado de nuestra obligación con la corte. Sin embargo, la prima que pagó (típicamente 10%) no es reembolsable. Si depositó garantía colateral, se le devolverá una vez que se complete la exoneración.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Importante: La exoneración no significa que el caso se ganó o perdió - simplemente significa que el contrato de fianza de garantía está completo. ¿Preguntas? Llámenos 24/7 al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 18,
    category: 'legal',
    question: {
      en: 'What happens if the defendant misses a court date?',
      es: '¿Qué sucede si el acusado falta a una fecha de la corte?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Missing a court date triggers serious consequences: The judge issues a bench warrant for arrest, the court demands payment of the full bail amount, and failure to appear becomes a separate criminal charge in California.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'What Imperium Bail Bonds Does: We immediately begin locating the defendant. California law gives us a grace period to return the defendant to court before full forfeiture occurs.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Your Options: Contact us immediately - the faster we act, the better. We may be able to get the court date rescheduled. The defendant must turn themselves in or be located. Additional fees may apply for recovery costs.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Missed a court date? Call us immediately at (951) 848-7858 - we\'re available 24/7.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Faltar a una fecha de la corte desencadena consecuencias serias: El juez emite una orden de arresto, la corte exige el pago del monto total de la fianza, y no comparecer se convierte en un cargo criminal separado en California.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Qué Hace Imperium Bail Bonds: Comenzamos inmediatamente a localizar al acusado. La ley de California nos da un período de gracia para devolver al acusado a la corte antes de que ocurra la confiscación completa.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Sus Opciones: Contáctenos inmediatamente - cuanto más rápido actuemos, mejor. Podemos intentar reprogramar la fecha de la corte. El acusado debe entregarse o ser localizado. Pueden aplicar tarifas adicionales por costos de recuperación.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¿Faltó a una fecha de la corte? Llámenos inmediatamente al (951) 848-7858 - estamos disponibles 24/7.' }]
        }
      ]
    }
  },
  {
    order: 19,
    category: 'legal',
    question: {
      en: 'What is considered by the court when setting bail amounts in California?',
      es: '¿Qué considera la corte al establecer los montos de fianza en California?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'California judges consider multiple factors when setting bail, as outlined in California Penal Code Section 1275: Severity of charges, criminal history, flight risk, public safety, and court appearance history.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Additional Considerations: Employment status and community ties, family connections in California, mental health or substance abuse issues, financial resources, and immigration status.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'California Bail Schedules: Each county has a bail schedule that sets standard amounts for different charges. Judges can adjust these amounts up or down based on individual circumstances.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Can bail be reduced? Yes, your attorney can request a bail reduction hearing. Imperium Bail Bonds works with all bail amounts. Call us 24/7 at (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Los jueces de California consideran múltiples factores al establecer la fianza, según el Código Penal de California Sección 1275: Gravedad de los cargos, historial criminal, riesgo de fuga, seguridad pública, e historial de comparecencia en la corte.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Consideraciones Adicionales: Estado de empleo y lazos comunitarios, conexiones familiares en California, problemas de salud mental o abuso de sustancias, recursos financieros, y estado migratorio.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Tablas de Fianzas de California: Cada condado tiene una tabla de fianzas que establece montos estándar para diferentes cargos. Los jueces pueden ajustar estos montos según circunstancias individuales.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¿Se puede reducir la fianza? Sí, su abogado puede solicitar una audiencia de reducción de fianza. Imperium Bail Bonds trabaja con todos los montos de fianza. Llámenos 24/7 al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 20,
    category: 'legal',
    question: {
      en: 'How long is a bail bond good for?',
      es: '¿Por cuánto tiempo es válida una fianza de garantía?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'A bail bond remains in effect for the entire duration of the criminal case - from initial court appearance through final resolution. Typical timeframes: Misdemeanors (3 months to 1 year), Felonies (1 to 3+ years), Complex Cases (several years).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'The bail bond stays active through arraignment, preliminary hearings, pre-trial motions, trial, sentencing, and any appeals.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'What this means: Once you pay the premium (typically 10%), you don\'t pay again even if the case takes years. The single premium covers the entire case duration.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Throughout this time, Imperium Bail Bonds provides court date reminders and support. Call us 24/7 at (951) 848-7858 with questions.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Una fianza de garantía permanece en efecto durante toda la duración del caso criminal - desde la comparecencia inicial hasta la resolución final. Plazos típicos: Delitos Menores (3 meses a 1 año), Delitos Graves (1 a 3+ años), Casos Complejos (varios años).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'La fianza de garantía permanece activa durante lectura de cargos, audiencias preliminares, mociones previas al juicio, juicio, sentencia, y cualquier apelación.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Lo que esto significa: Una vez que pague la prima (típicamente 10%), no paga nuevamente incluso si el caso tarda años. La prima única cubre toda la duración del caso.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Durante todo este tiempo, Imperium Bail Bonds proporciona recordatorios de fechas de la corte y apoyo. Llámenos 24/7 al (951) 848-7858 con preguntas.' }]
        }
      ]
    }
  },
  {
    order: 21,
    category: 'general',
    question: {
      en: 'How much is bail for a DUI in California?',
      es: '¿Cuánto es la fianza para un DUI en California?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'DUI bail amounts in California vary by county and circumstances. Standard DUI (First Offense): $5,000 to $15,000. DUI with aggravating factors: High BAC ($10,000-$25,000), DUI with injury ($50,000-$100,000+), DUI with child in vehicle ($25,000-$50,000), Second or third DUI ($10,000-$50,000).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Factors that increase DUI bail: Prior DUI convictions, accident or property damage, bodily injury, extreme BAC levels, reckless driving, and refusing chemical tests.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Remember, you don\'t pay the full bail amount - with Imperium Bail Bonds, you pay only 10%. For a $10,000 DUI bail, you\'d pay $1,000, and we offer payment plans. Available 24/7 for DUI bail - Call (951) 848-7858 immediately.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Los montos de fianza para DUI en California varían por condado y circunstancias. DUI Estándar (Primera Ofensa): $5,000 a $15,000. DUI con factores agravantes: BAC alto ($10,000-$25,000), DUI con lesión ($50,000-$100,000+), DUI con niño en vehículo ($25,000-$50,000), Segundo o tercer DUI ($10,000-$50,000).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Factores que aumentan la fianza de DUI: Condenas previas de DUI, accidente o daño a la propiedad, lesión corporal, niveles extremos de BAC, conducción imprudente, y negarse a pruebas químicas.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Recuerde, no paga el monto total de la fianza - con Imperium Bail Bonds, solo paga el 10%. Para una fianza de DUI de $10,000, pagaría $1,000, y ofrecemos planes de pago. Disponible 24/7 para fianza de DUI - Llame al (951) 848-7858 inmediatamente.' }]
        }
      ]
    }
  },
  {
    order: 22,
    category: 'general',
    question: {
      en: 'How much is bail for domestic violence in California?',
      es: '¿Cuánto es la fianza para violencia doméstica en California?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Domestic violence bail depends on severity and circumstances. Misdemeanor Domestic Battery (PC 243(e)(1)): $20,000 to $50,000. Felony Domestic Violence with Injury (PC 273.5): $50,000 to $100,000. Aggravated Domestic Violence: $100,000 to $250,000+.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Factors affecting bail: Severity of injuries, use of weapons, prior domestic violence history, protective order violations, threats made, and children present during incident.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Important: Protective orders are often issued, and defendants may have contact restrictions. With Imperium Bail Bonds, you pay only 10% of the bail amount. We work discreetly and professionally. Available 24/7 - Call (951) 848-7858.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'La fianza de violencia doméstica depende de la gravedad y circunstancias. Agresión Doméstica Menor (PC 243(e)(1)): $20,000 a $50,000. Violencia Doméstica Grave con Lesión (PC 273.5): $50,000 a $100,000. Violencia Doméstica Agravada: $100,000 a $250,000+.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Factores que afectan la fianza: Gravedad de las lesiones, uso de armas, historial previo de violencia doméstica, violaciones de órdenes de protección, amenazas hechas, y niños presentes durante el incidente.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Importante: A menudo se emiten órdenes de protección, y los acusados pueden tener restricciones de contacto. Con Imperium Bail Bonds, solo paga el 10% del monto de la fianza. Trabajamos de manera discreta y profesional. Disponible 24/7 - Llame al (951) 848-7858.' }]
        }
      ]
    }
  },
  {
    order: 23,
    category: 'general',
    question: {
      en: 'Do you serve all counties in California?',
      es: '¿Prestan servicio en todos los condados de California?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Yes! Imperium Bail Bonds proudly serves all 58 counties in California, including Los Angeles, San Diego, Orange, Riverside, San Bernardino, Sacramento, Alameda, Santa Clara, Contra Costa, Fresno, and 48 more counties throughout California!' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'No matter where your loved one is detained, we can help. Our experienced agents know each county\'s bail procedures.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'How we serve you: Immediate phone consultation, local knowledge of each county\'s procedures, fast processing at any California jail, and 24/7 availability statewide. We can handle everything remotely - you don\'t need to travel. Call us 24/7 at (951) 848-7858 - serving all of California.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¡Sí! Imperium Bail Bonds orgullosamente presta servicio en los 58 condados de California, incluyendo Los Angeles, San Diego, Orange, Riverside, San Bernardino, Sacramento, Alameda, Santa Clara, Contra Costa, Fresno, ¡y 48 condados más en toda California!' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'No importa dónde esté detenido su ser querido, podemos ayudar. Nuestros agentes experimentados conocen los procedimientos de fianza de cada condado.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Cómo le servimos: Consulta telefónica inmediata, conocimiento local de los procedimientos de cada condado, procesamiento rápido en cualquier cárcel de California, y disponibilidad 24/7 en todo el estado. Podemos manejar todo remotamente - no necesita viajar. Llámenos 24/7 al (951) 848-7858 - sirviendo a toda California.' }]
        }
      ]
    }
  },
  {
    order: 24,
    category: 'general',
    question: {
      en: 'Can you help if I\'m calling from out of state?',
      es: '¿Pueden ayudar si estoy llamando desde fuera del estado?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Absolutely! Many of our clients call from out of state when a loved one is arrested in California while traveling or visiting.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'How We Help Out-of-State Families: Remote processing (complete all paperwork by phone, email, or online), no travel required, local expertise at the California jail, multiple payment options, and constant communication updates.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'What We Need: Defendant\'s information, your contact information, payment method, and valid identification (can be scanned and emailed).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Distance is no barrier - we make it easy. Call us 24/7 at (951) 848-7858 from anywhere in the United States.' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: '¡Absolutamente! Muchos de nuestros clientes llaman desde fuera del estado cuando un ser querido es arrestado en California mientras viaja o visita.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Cómo Ayudamos a Familias Fuera del Estado: Procesamiento remoto (complete todo el papeleo por teléfono, correo electrónico o en línea), no se requiere viajar, experiencia local en la cárcel de California, múltiples opciones de pago, y actualizaciones de comunicación constantes.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Lo Que Necesitamos: Información del acusado, su información de contacto, método de pago, e identificación válida (se puede escanear y enviar por correo electrónico).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'La distancia no es una barrera - lo hacemos fácil. Llámenos 24/7 al (951) 848-7858 desde cualquier lugar de los Estados Unidos.' }]
        }
      ]
    }
  },
  {
    order: 25,
    category: 'general',
    question: {
      en: 'What hours do you operate?',
      es: '¿En qué horario operan?'
    },
    answer: {
      en: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Imperium Bail Bonds is open 24 hours a day, 7 days a week, 365 days a year - including nights and early mornings, weekends, and holidays (Christmas, New Year\'s, Thanksgiving, etc.).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Why 24/7 matters: Arrests happen at all hours. When your loved one is arrested, you need help immediately, not during "business hours."' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'What you get with 24/7 service: Immediate phone consultation, instant bail bond processing, fast jail release, real agents answering phones (not voicemail), and the same professional service day or night.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'We never close. The moment you need us, we\'re here. Call anytime: (951) 848-7858' }]
        }
      ],
      es: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Imperium Bail Bonds está abierto 24 horas al día, 7 días a la semana, 365 días al año - incluyendo noches y madrugadas, fines de semana, y días festivos (Navidad, Año Nuevo, Acción de Gracias, etc.).' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Por qué 24/7 importa: Los arrestos ocurren a todas horas. Cuando su ser querido es arrestado, necesita ayuda inmediatamente, no durante "horario comercial."' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Lo que obtiene con servicio 24/7: Consulta telefónica inmediata, procesamiento instantáneo de fianza de garantía, liberación rápida de la cárcel, agentes reales respondiendo teléfonos (no correo de voz), y el mismo servicio profesional de día o de noche.' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Nunca cerramos. En el momento en que nos necesite, estamos aquí. Llame en cualquier momento: (951) 848-7858' }]
        }
      ]
    }
  }
]

async function importFAQs() {
  console.log('🚀 Starting FAQ import...')
  console.log(`📝 Importing ${faqs.length} FAQs to Sanity...`)

  let successCount = 0
  let errorCount = 0

  for (const faq of faqs) {
    try {
      const doc = {
        _type: 'faq',
        question: faq.question,
        answer: faq.answer,
        category: faq.category,
        order: faq.order,
      }

      await client.create(doc)
      console.log(`✅ Imported FAQ #${faq.order}: ${faq.question.en}`)
      successCount++
    } catch (error) {
      console.error(`❌ Error importing FAQ #${faq.order}:`, error.message)
      errorCount++
    }
  }

  console.log('\n' + '='.repeat(60))
  console.log(`✨ Import complete!`)
  console.log(`✅ Successfully imported: ${successCount} FAQs`)
  if (errorCount > 0) {
    console.log(`❌ Failed to import: ${errorCount} FAQs`)
  }
  console.log('='.repeat(60))
}

// Run the import
importFAQs()
  .then(() => {
    console.log('\n✨ All done! Check your Sanity Studio to see the imported FAQs.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Import failed:', error)
    process.exit(1)
  })
