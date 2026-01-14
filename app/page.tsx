import { useTranslations } from 'next-intl'
import Image from 'next/image'
import CTAButton from '@/components/CTAButton'
import CallButton from '@/components/CallButton'
import { client } from '@/sanity/lib/client'

async function getServices() {
  const query = `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
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

export default async function Home() {
  const services = await getServices()

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Indicators */}
      <TrustSection />

      {/* Services Overview */}
      <ServicesSection services={services} />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact" variant="accent" size="lg">
              {t('cta')}
            </CTAButton>
            <CallButton phoneNumber="+1234567890">
              {t('call')}
            </CallButton>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

function TrustSection() {
  const t = useTranslations('home.trust')

  const trustItems = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('experience'),
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('available'),
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: t('confidential'),
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('professional'),
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-primary-900">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-trust transition-shadow"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection({ services }: { services: any[] }) {
  const t = useTranslations('home.services')
  const common = useTranslations('common')

  return (
    <section className="py-16 bg-trust-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-primary-900">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service: any) => (
              <div
                key={service._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="font-heading font-bold text-xl mb-3 text-primary-800">
                  {service.title?.en || 'Service'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description?.en || 'Service description'}
                </p>
                <CTAButton href={`/services#${service.slug?.current}`} variant="secondary" size="sm">
                  {common('learnMore')}
                </CTAButton>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              Services content coming soon. Please add services in the CMS.
            </p>
            <CTAButton href="/studio" variant="primary">
              Go to CMS
            </CTAButton>
          </div>
        )}

        {services.length > 0 && (
          <div className="text-center mt-12">
            <CTAButton href="/services" variant="primary" size="lg">
              View All Services
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  )
}

function CTASection() {
  const t = useTranslations('home.hero')

  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          Need Help Right Now?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Our team is available 24/7 to help you navigate the bail bond process and get your loved ones home quickly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CallButton phoneNumber="+1234567890">
            {t('call')}
          </CallButton>
          <CTAButton href="/contact" variant="secondary" size="lg">
            Send a Message
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
