import { defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'localizedBlockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Process', value: 'process' },
          { title: 'Payment', value: 'payment' },
          { title: 'Legal', value: 'legal' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which FAQ appears (lower numbers first)',
    },
  ],
  preview: {
    select: {
      title: 'question.en',
      subtitle: 'category',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
