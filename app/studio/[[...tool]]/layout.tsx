export const metadata = {
  title: 'Imperium Bail Bonds - Studio',
  description: 'Content management for Imperium Bail Bonds',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div style={{ margin: 0 }}>{children}</div>
}
