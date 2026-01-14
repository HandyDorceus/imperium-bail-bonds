'use client'

import { useState, useEffect } from 'react'

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    // Get current locale from cookie
    const savedLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1]
    if (savedLocale) {
      setLocale(savedLocale)
    }
  }, [])

  const switchLocale = (newLocale: string) => {
    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    setLocale(newLocale)
    // Reload page to apply new locale
    window.location.reload()
  }

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-white text-primary-700'
            : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('es')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          locale === 'es'
            ? 'bg-white text-primary-700'
            : 'text-white hover:bg-white/20'
        }`}
      >
        ES
      </button>
    </div>
  )
}
