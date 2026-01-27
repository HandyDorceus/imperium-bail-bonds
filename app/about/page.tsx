import { getTranslations } from 'next-intl/server'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'About Us - Imperium Bail Bonds',
  description: 'Our mission is family reunification through professional bail bond services',
}

export default async function AboutPage() {
  const t = await getTranslations('about')
  const business = await getTranslations('businessInfo')
  const mission = await getTranslations('home.mission')

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

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-accent-500/20 shadow-elegant p-8 md:p-12 mb-12">
            <h2 className="font-heading font-bold text-3xl mb-6 text-primary-900 border-b border-accent-500/30 pb-3">
              Our Mission
            </h2>
            <p className="text-xl text-primary-900 font-medium italic mb-8 text-center bg-trust-offWhite p-6 rounded-lg border-l-4 border-accent-500">
              "{mission('statement')}"
            </p>
            <p className="text-lg text-trust-charcoal mb-6 leading-relaxed">
              At Imperium Bail Bonds, our mission is simple yet profound: reuniting families.
              We understand that when a loved one is incarcerated, time is of the essence.
              Every moment apart can feel like an eternity, and we're here to help bring your
              family back together as quickly as possible.
            </p>
            <p className="text-lg text-trust-charcoal mb-6 leading-relaxed">
              With over <strong className="text-accent-500">{business('experience')} years of experience</strong> in
              the bail bond industry, our team has helped countless families throughout <strong className="text-accent-500">{business('serviceArea')}</strong> navigate
              the complex legal system with compassion, professionalism, and discretion. We treat every client
              with the respect and dignity they deserve, understanding that difficult circumstances can happen to anyone.
            </p>
            <div className="bg-accent-50 p-6 rounded-lg border border-accent-500/20 mt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-500 mb-2">{business('experience')}</div>
                  <div className="text-sm text-trust-charcoal">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-500 mb-2">{business('availability')}</div>
                  <div className="text-sm text-trust-charcoal">Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-500 mb-2">58</div>
                  <div className="text-sm text-trust-charcoal">California Counties Served</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-trust-offWhite rounded-lg border border-accent-500/20 p-8 md:p-12 mb-12">
            <h2 className="font-heading font-bold text-3xl mb-6 text-primary-900 border-b border-accent-500/30 pb-3">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-accent-500">Integrity</h3>
                <p className="text-trust-charcoal">
                  We operate with complete transparency and honesty, ensuring you understand
                  every step of the bail bond process.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-accent-500">Compassion</h3>
                <p className="text-trust-charcoal">
                  We understand the emotional stress of having a loved one incarcerated and
                  provide support with empathy and care.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-accent-500">Professionalism</h3>
                <p className="text-trust-charcoal">
                  Our licensed bail bondsmen bring years of expertise to ensure efficient
                  and reliable service every time.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-accent-500">Availability</h3>
                <p className="text-trust-charcoal">
                  We're available 24/7 because we know that emergencies don't wait for
                  business hours.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-accent-500/20 shadow-elegant p-8 md:p-12">
            <h2 className="font-heading font-bold text-3xl mb-6 text-primary-900 border-b border-accent-500/30 pb-3">
              Why Choose Imperium Bail Bonds?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-trust-charcoal">
                  <strong className="text-primary-900">Fast Processing:</strong> We work quickly to secure release, often within hours
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-trust-charcoal">
                  <strong className="text-primary-900">Flexible Payment Plans:</strong> We offer payment options that work with your budget
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-trust-charcoal">
                  <strong className="text-primary-900">Complete Confidentiality:</strong> Your privacy is our priority
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-trust-charcoal">
                  <strong className="text-primary-900">Expert Guidance:</strong> We guide you through the entire legal process
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/contact" variant="primary" size="lg">
              Contact Us Today
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
