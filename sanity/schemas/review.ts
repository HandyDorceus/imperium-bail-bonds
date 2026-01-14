import { defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Customer Review',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating out of 5',
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      name: 'review',
      title: 'Review Text',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Review Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured Review',
      type: 'boolean',
      description: 'Display this review prominently',
      initialValue: false,
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Approve this review for display',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'review.en',
      rating: 'rating',
    },
    prepare({ title, subtitle, rating }) {
      return {
        title: `${title} - ${rating}/5 stars`,
        subtitle: subtitle,
      }
    },
  },
})
