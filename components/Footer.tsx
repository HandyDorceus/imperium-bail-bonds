import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('navigation')

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center font-bold text-2xl">
                I
              </div>
              <span className="font-heading font-bold text-xl">
                Imperium Bail Bonds
              </span>
            </div>
            <p className="text-gray-300 mb-4">{t('tagline')}</p>
            <div className="bg-accent-600 text-white px-4 py-2 rounded-lg inline-block font-semibold text-sm">
              {t('emergency')}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent-300 transition-colors">
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-accent-300 transition-colors">
                  {nav('services')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent-300 transition-colors">
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-accent-300 transition-colors">
                  {nav('faq')}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-accent-300 transition-colors">
                  {nav('reviews')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent-300 transition-colors">
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-accent-300">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@imperiumbailbonds.com" className="hover:text-accent-300">
                  info@imperiumbailbonds.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>{t('copyright').replace('2025', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  )
}
