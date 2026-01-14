'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

export default function FAQPage() {
  const t = useTranslations('faq')
  const [faqs, setFaqs] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    async function getFAQs() {
      const query = `*[_type == "faq"] | order(order asc) {
        _id,
        question,
        answer,
        category
      }`

      try {
        const data = await client.fetch(query)
        setFaqs(data)
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      }
    }

    getFAQs()
  }, [])

  const categories = ['all', 'general', 'process', 'payment', 'legal']
  const filteredFAQs = selectedCategory === 'all'
    ? faqs
    : faqs.filter((faq: any) => faq.category === selectedCategory)

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq: any, index: number) => (
                <div
                  key={faq._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-primary-800 pr-4">
                      {faq.question?.en || 'Question'}
                    </span>
                    <svg
                      className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                        expandedIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedIndex === index && (
                    <div className="px-6 pb-6 text-gray-700">
                      {faq.answer?.en ? (
                        <div className="prose max-w-none">
                          <PortableText value={faq.answer.en} />
                        </div>
                      ) : (
                        <p>Answer not available</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-600 mb-4">
                No FAQs available yet. Please add FAQs in the CMS.
              </p>
            </div>
          )}
        </div>

        {/* Still Have Questions */}
        <div className="max-w-4xl mx-auto mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="font-heading font-bold text-2xl mb-4 text-primary-900">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 mb-6">
            We're here to help 24/7. Contact us directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
