'use client'

interface CallButtonProps {
  phoneNumber?: string
  children: React.ReactNode
  className?: string
}

export default function CallButton({
  phoneNumber = '+1234567890',
  children,
  className = '',
}: CallButtonProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      {children}
    </a>
  )
}
