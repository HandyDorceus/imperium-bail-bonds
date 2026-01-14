import page from './page'
import service from './service'
import faq from './faq'
import review from './review'
import contactInfo from './contactInfo'
import localizedString from './objects/localizedString'
import localizedText from './objects/localizedText'
import localizedBlockContent from './objects/localizedBlockContent'
import seo from './objects/seo'

export const schemas = [
  // Document types
  page,
  service,
  faq,
  review,
  contactInfo,

  // Object types
  localizedString,
  localizedText,
  localizedBlockContent,
  seo,
]
