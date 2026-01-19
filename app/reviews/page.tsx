'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'

export default function ReviewsPage() {
  const t = useTranslations('reviews')
  const [reviews, setReviews] = useState<any[]>([])

  useEffect(() => {
    async function getReviews() {
      const query = `*[_type == "review" && approved == true] | order(date desc) {
        _id,
        customerName,
        rating,
        review,
        date,
        featured
      }`

      try {
        const data = await client.fetch(query)
        setReviews(data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    getReviews()
  }, [])

  const featuredReviews = reviews.filter((r: any) => r.featured)
  const regularReviews = reviews.filter((r: any) => !r.featured)

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-accent-500' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

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

        {/* Featured Reviews */}
        {featuredReviews.length > 0 && (
          <div className="mb-16">
            <h2 className="font-heading font-bold text-2xl mb-8 text-center text-primary-900">
              Featured Reviews
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredReviews.map((review: any) => (
                <div
                  key={review._id}
                  className="bg-white p-6 rounded-lg shadow-gold border-2 border-accent-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    {renderStars(review.rating)}
                    <span className="text-sm text-trust-charcoal">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-trust-charcoal mb-4 italic">
                    "{review.review?.en || review.review}"
                  </p>
                  <p className="font-heading font-semibold text-primary-900">
                    - {review.customerName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Reviews */}
        {regularReviews.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-2xl mb-8 text-center text-primary-900">
              All Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regularReviews.map((review: any) => (
                <div
                  key={review._id}
                  className="bg-white p-6 rounded-lg border border-accent-500/20 shadow-elegant hover:shadow-gold transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    {renderStars(review.rating)}
                    <span className="text-sm text-trust-charcoal">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-trust-charcoal mb-3">
                    "{review.review?.en || review.review}"
                  </p>
                  <p className="font-heading font-semibold text-primary-900">
                    - {review.customerName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {reviews.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-accent-500/20 shadow-elegant">
            <p className="text-trust-charcoal mb-4">
              No reviews available yet. Please add reviews in the CMS.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-primary-900 to-trust-charcoal text-trust-cream rounded-lg p-8 text-center border border-accent-500/30 shadow-gold">
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-4"></div>
          <h2 className="font-heading font-bold text-2xl mb-4">
            Experience Our Service
          </h2>
          <p className="text-lg mb-6 text-trust-offWhite">
            Join hundreds of satisfied families. Contact us today for professional bail bond services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold px-8 py-3 rounded-lg shadow-gold hover:shadow-xl transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}
