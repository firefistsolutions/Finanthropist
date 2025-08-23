import type { CollectionConfig } from 'payload'

export const TwitterReviews: CollectionConfig = {
  slug: 'twitter-reviews',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'username', 'content', 'likes', 'updatedAt'],
    description: 'Manage Twitter testimonials and reviews for the homepage',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name of the reviewer (e.g., "Rajesh Kumar")',
      },
    },
    {
      name: 'username',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (val && !val.startsWith('@')) {
          return 'Username must start with @'
        }
        return true
      },
      admin: {
        description: 'Twitter username starting with @ (e.g., "@rajesh_trader")',
      },
    },
    {
      name: 'avatar',
      type: 'text',
      required: true,
      admin: {
        description: 'URL to profile image',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      maxLength: 280,
      admin: {
        description: 'Tweet content (max 280 characters, can include @Finanthropist mentions)',
      },
    },
    {
      name: 'timestamp',
      type: 'text',
      required: true,
      defaultValue: '2h',
      admin: {
        description: 'Time ago format (e.g., "2h", "1d", "3h")',
      },
    },
    {
      name: 'engagement',
      type: 'group',
      fields: [
        {
          name: 'likes',
          type: 'number',
          required: true,
          defaultValue: 0,
          min: 0,
          admin: {
            description: 'Number of likes on the tweet',
          },
        },
        {
          name: 'replies',
          type: 'number',
          required: true,
          defaultValue: 0,
          min: 0,
          admin: {
            description: 'Number of replies to the tweet',
          },
        },
        {
          name: 'retweets',
          type: 'number',
          required: true,
          defaultValue: 0,
          min: 0,
          admin: {
            description: 'Number of retweets',
          },
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show this review in the homepage carousel',
      },
    },
    {
      name: 'displayOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order in carousel (lower numbers appear first)',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Ensure username starts with @
        if (data.username && !data.username.startsWith('@')) {
          data.username = `@${data.username}`
        }
        return data
      },
    ],
  },
}