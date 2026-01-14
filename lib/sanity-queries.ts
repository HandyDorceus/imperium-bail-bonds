// Common Sanity GROQ queries used across the application

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  content,
  features,
  slug,
  icon
}`

export const faqsQuery = `*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  category
}`

export const reviewsQuery = `*[_type == "review" && approved == true] | order(date desc) {
  _id,
  customerName,
  rating,
  review,
  date,
  featured
}`

export const contactInfoQuery = `*[_type == "contactInfo"][0] {
  phone,
  email,
  address,
  hours,
  emergencyMessage,
  socialMedia
}`

export const pageBySlugQuery = (slug: string) => `*[_type == "page" && slug.current == "${slug}"][0] {
  _id,
  title,
  subtitle,
  content,
  heroImage,
  seo
}`
