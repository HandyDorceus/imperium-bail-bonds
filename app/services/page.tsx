import { getTranslations } from 'next-intl/server'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getServices() {
  const query = `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    content,
    features,
    slug,
    icon
  }`

  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export const metadata = {
  title: 'Our Services - Imperium Bail Bonds',
  description: 'Professional bail bond services tailored to your needs',
}

export default async function ServicesPage() {
  const t = await getTranslations('services')
  const services = await getServices()

  return (
    <div className="py-16 bg-trust-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary-900">
            {t('title')}
          </h1>
          <div className="w-24 h-0.5 bg-accent-500 mx-auto mb-4"></div>
          <p className="text-xl text-trust-charcoal max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Services List */}
        {services.length > 0 ? (
          <div className="space-y-12">
            {services.map((service: any, index: number) => (
              <div
                key={service._id}
                id={service.slug?.current}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-lg border border-accent-500/20 shadow-elegant hover:shadow-gold transition-all">
                    <h2 className="font-heading font-bold text-3xl mb-4 text-primary-900 border-b border-accent-500/30 pb-3">
                      {service.title?.en || 'Service'}
                    </h2>
                    <p className="text-lg text-trust-charcoal mb-6">
                      {service.description?.en || ''}
                    </p>
                    {service.content?.en && (
                      <div className="prose max-w-none prose-headings:text-primary-900 prose-headings:font-heading prose-p:text-trust-charcoal prose-a:text-accent-500">
                        <PortableText value={service.content.en} />
                      </div>
                    )}
                    {service.features && service.features.length > 0 && (
                      <div className="mt-6 border-t border-accent-500/20 pt-6">
                        <h3 className="font-heading font-semibold text-lg mb-3 text-accent-500">Key Features:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature: any, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-trust-charcoal">{feature.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-primary-900 to-trust-charcoal rounded-lg flex items-center justify-center border-2 border-accent-500/30 shadow-gold">
                    <div className="text-accent-500 text-6xl font-heading font-bold">
                      {service.title?.en?.charAt(0) || 'S'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-trust-charcoal mb-4">
              No services available yet. Please add services in the CMS.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
