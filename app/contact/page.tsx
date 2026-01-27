'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { client } from '@/sanity/lib/client'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  inmateLookup: z.boolean().optional(),
  howCanWeHelp: z.string().min(10, 'Please tell us how we can help (at least 10 characters)'),
  additionalInfo: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const t = useTranslations('contact')
  const business = useTranslations('businessInfo')
  const [contactInfo, setContactInfo] = useState<any>(null)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  useEffect(() => {
    async function getContactInfo() {
      const query = `*[_type == "contactInfo"][0] {
        phone,
        email,
        address,
        hours,
        emergencyMessage
      }`

      try {
        const data = await client.fetch(query)
        setContactInfo(data)
      } catch (error) {
        console.error('Error fetching contact info:', error)
      }
    }

    getContactInfo()
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
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

        {/* Emergency Message */}
        {contactInfo?.emergencyMessage && (
          <div className="max-w-4xl mx-auto mb-8 bg-accent-50 border-l-4 border-accent-500 p-4 rounded shadow-elegant">
            <p className="font-semibold text-primary-900">
              {contactInfo.emergencyMessage.en || contactInfo.emergencyMessage}
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-accent-500/20 shadow-elegant">
            <h2 className="font-heading font-bold text-2xl mb-6 text-primary-900 border-b border-accent-500/30 pb-3">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                  {t('form.name')}
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-accent-500/30 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                  {t('form.email')}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-accent-500/30 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary-900 mb-2">
                  {t('form.phone')}
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-accent-500/30 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  {...register('inmateLookup')}
                  type="checkbox"
                  id="inmateLookup"
                  className="mt-1 h-5 w-5 text-accent-500 border-accent-500/30 rounded focus:ring-2 focus:ring-accent-500"
                />
                <div className="ml-3">
                  <label htmlFor="inmateLookup" className="block text-sm font-medium text-primary-900 cursor-pointer">
                    {t('form.inmateLookup')}
                  </label>
                  <p className="text-xs text-trust-charcoal mt-1">{t('form.inmateLookupHelper')}</p>
                </div>
              </div>

              <div>
                <label htmlFor="howCanWeHelp" className="block text-sm font-medium text-primary-900 mb-2">
                  {t('form.howCanWeHelp')} *
                </label>
                <textarea
                  {...register('howCanWeHelp')}
                  id="howCanWeHelp"
                  rows={4}
                  className="w-full px-4 py-2 border border-accent-500/30 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                ></textarea>
                {errors.howCanWeHelp && (
                  <p className="mt-1 text-sm text-red-600">{errors.howCanWeHelp.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-primary-900 mb-2">
                  {t('form.additionalInfo')}
                </label>
                <textarea
                  {...register('additionalInfo')}
                  id="additionalInfo"
                  rows={5}
                  placeholder={t('form.additionalInfoPlaceholder')}
                  className="w-full px-4 py-2 border border-accent-500/30 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                ></textarea>
                {errors.additionalInfo && (
                  <p className="mt-1 text-sm text-red-600">{errors.additionalInfo.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-gray-400 text-primary-900 font-bold py-3 px-6 rounded-lg shadow-gold hover:shadow-xl transition-all"
              >
                {submitStatus === 'loading' ? t('form.sending') : t('form.submit')}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {t('form.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {t('form.error')}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-primary-900 text-trust-cream p-8 rounded-lg shadow-elegant border border-accent-500/30 mb-6">
              <h2 className="font-heading font-bold text-2xl mb-6 text-accent-500 border-b border-accent-500/30 pb-3">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">{t('info.phone')}</p>
                    <a href={contactInfo?.phone ? `tel:${contactInfo.phone}` : business('phoneLink')} className="text-accent-500 hover:text-accent-400 transition-colors">
                      {contactInfo?.phone || business('phoneFormatted')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">{t('info.email')}</p>
                    <a href={`mailto:${contactInfo?.email || business('email')}`} className="text-accent-500 hover:text-accent-400 transition-colors">
                      {contactInfo?.email || business('email')}
                    </a>
                  </div>
                </div>

                {contactInfo?.address && (
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">{t('info.address')}</p>
                      <p className="text-trust-lightGray">
                        {contactInfo.address.street}<br />
                        {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}
                      </p>
                    </div>
                  </div>
                )}

                {contactInfo?.hours && (
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold mb-1">{t('info.hours')}</p>
                      <p className="text-trust-lightGray whitespace-pre-line">
                        {contactInfo.hours.en || contactInfo.hours}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Call Button */}
            <a
              href={contactInfo?.phone ? `tel:${contactInfo.phone}` : business('phoneLink')}
              className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-primary-900 font-bold py-4 px-6 rounded-lg shadow-gold hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now - 24/7 Available
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
