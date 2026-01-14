import { Metadata } from 'next'

interface GenerateMetadataParams {
  title: string
  description: string
  path?: string
  locale?: 'en' | 'es'
}

export function generateMetadata({
  title,
  description,
  path = '',
  locale = 'en',
}: GenerateMetadataParams): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://imperiumbailbonds.com'
  const fullUrl = `${baseUrl}${path}`

  return {
    title,
    description,
    keywords: [
      'bail bonds',
      'bail bondsman',
      'get out of jail',
      'bail services',
      'family reunification',
      '24/7 bail bonds',
      'fianzas',
      'servicios de fianzas',
    ],
    authors: [{ name: 'Imperium Bail Bonds' }],
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Imperium Bail Bonds',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}
