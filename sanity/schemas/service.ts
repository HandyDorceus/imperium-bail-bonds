import { defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'localizedText',
      description: 'Brief overview of the service',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Full Description',
      type: 'localizedBlockContent',
      description: 'Detailed information about the service',
    },
    {
      name: 'icon',
      title: 'Icon/Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'localizedString' }],
      description: 'Key features or benefits of this service',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which service appears (lower numbers first)',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'description.en',
      media: 'icon',
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
