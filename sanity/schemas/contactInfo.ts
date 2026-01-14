import { defineType } from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'address',
      title: 'Physical Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street Address',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
        },
        {
          name: 'zipCode',
          title: 'ZIP Code',
          type: 'string',
        },
      ],
    },
    {
      name: 'hours',
      title: 'Business Hours',
      type: 'localizedText',
      description: 'Business hours information',
    },
    {
      name: 'emergencyMessage',
      title: 'Emergency/24-7 Message',
      type: 'localizedString',
      description: 'Message about 24/7 availability',
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'phone',
      subtitle: 'email',
    },
  },
})
