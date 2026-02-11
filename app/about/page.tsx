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
              {t('mission.title')}
            </h2>
            <p className="text-xl text-primary-900 font-medium italic mb-8 text-center bg-trust-offWhite p-6 rounded-lg border-l-4 border-accent-500">
              "{mission('statement')}"
            </p>
            <p className="text-lg text-trust-charcoal mb-6 leading-relaxed">
              {t('mission.intro')}
            </p>
            <p className="text-lg text-trust-charcoal mb-6 leading-relaxed">
              {t('mission.experience', { years: business('experience'), area: business('serviceArea') })}
            </p>
            <div className="bg-accent-50 p-6 rounded-lg border border-accent-500/20 mt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-500 mb-2">{business('experience')}</div>
                  <div className="text-sm text-trust-charcoal">{t('mission.stats.yearsLabel')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-500 mb-2">{business('availability')}</div>
                  <div className="text-sm text-trust-charcoal">{t('mission.stats.availableLabel')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-500 mb-2">58</div>
                  <div className="text-sm text-trust-charcoal">{t('mission.stats.countiesLabel')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-trust-offWhite rounded-lg border border-accent-500/20 p-8 md:p-12 mb-12">
            <h2 className="font-heading font-bold text-3xl mb-6 text-primary-900 border-b border-accent-500/30 pb-3">
              {t('values.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-accent-500">{t('values.integrity.title')}</h3>
                <p className="text-trust-charcoal">
                  {t('values.integrity.description')}
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-accent-500">{t('values.compassion.title')}</h3>
                <p className="text-trust-charcoal">
                  {t('values.compassion.description')}
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-accent-500">{t('values.professionalism.title')}</h3>
                <p className="text-trust-charcoal">
                  {t('values.professionalism.description')}
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-accent-500">{t('values.availability.title')}</h3>
                <p className="text-trust-charcoal">
                  {t('values.availability.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-accent-500/20 shadow-elegant p-8 md:p-12">
            <h2 className="font-heading font-bold text-3xl mb-6 text-primary-900 border-b border-accent-500/30 pb-3">
              {t('whyChoose.title')}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-trust-charcoal">
                  <strong className="text-primary-900">{t('whyChoose.fastProcessing.label')}</strong> {t('whyChoose.fastProcessing.description')}
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-trust-charcoal">
                  <strong className="text-primary-900">{t('whyChoose.flexiblePayment.label')}</strong> {t('whyChoose.flexiblePayment.description')}
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-trust-charcoal">
                  <strong className="text-primary-900">{t('whyChoose.confidentiality.label')}</strong> {t('whyChoose.confidentiality.description')}
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-trust-charcoal">
                  <strong className="text-primary-900">{t('whyChoose.expertGuidance.label')}</strong> {t('whyChoose.expertGuidance.description')}
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/contact" variant="primary" size="lg">
              {t('cta')}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
