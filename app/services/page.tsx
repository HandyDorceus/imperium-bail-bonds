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
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary-900">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="font-heading font-bold text-3xl mb-4 text-primary-800">
                      {service.title?.en || 'Service'}
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {service.description?.en || ''}
                    </p>
                    {service.content?.en && (
                      <div className="prose max-w-none">
                        <PortableText value={service.content.en} />
                      </div>
                    )}
                    {service.features && service.features.length > 0 && (
                      <div className="mt-6">
                        <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature: any, idx: number) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
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
                              <span>{feature.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-400 rounded-lg flex items-center justify-center">
                    <div className="text-primary-800 text-6xl font-bold">
                      {service.title?.en?.charAt(0) || 'S'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              No services available yet. Please add services in the CMS.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
