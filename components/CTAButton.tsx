import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}

export default function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: CTAButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center'

  const variantClasses = {
    primary: 'bg-accent-500 hover:bg-accent-600 text-primary-900 shadow-gold hover:shadow-xl',
    secondary: 'bg-transparent hover:bg-accent-500/10 text-accent-500 shadow-elegant hover:shadow-gold border-2 border-accent-500',
    accent: 'bg-primary-900 hover:bg-primary-800 text-accent-500 shadow-elegant hover:shadow-gold border border-accent-500/30',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes} type={type}>
      {children}
    </button>
  )
}
