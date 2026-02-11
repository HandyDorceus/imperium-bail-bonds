interface LogoProps {
  variant?: 'header' | 'footer'
}

export default function Logo({ variant = 'header' }: LogoProps) {
  const isFooter = variant === 'footer'
  const lineColor = isFooter ? 'bg-accent-500/40' : 'bg-trust-cream/30'
  const textColor = isFooter ? 'text-accent-500' : 'text-trust-cream'

  return (
    <div className="flex flex-col items-center">
      <div className={`w-full h-px ${lineColor}`} />
      <span
        className={`font-logo font-bold uppercase text-center leading-none py-1 ${textColor} ${
          isFooter ? 'text-xl tracking-[0.15em]' : 'text-lg sm:text-xl tracking-[0.15em]'
        }`}
      >
        Imperium
      </span>
      <div className={`w-full h-px ${lineColor}`} />
      <span
        className={`font-logo font-normal uppercase text-center leading-none py-1 ${textColor} ${
          isFooter ? 'text-sm tracking-[0.2em]' : 'text-xs sm:text-sm tracking-[0.2em]'
        }`}
      >
        Bail Bonds
      </span>
      <div className={`w-full h-px ${lineColor}`} />
    </div>
  )
}
