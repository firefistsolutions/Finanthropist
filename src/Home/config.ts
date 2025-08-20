import type { GlobalConfig } from 'payload'
import { revalidateHome } from './hooks/revalidateHome'

export const Home: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroSection',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Professional Financial Services & Trading Excellence',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          required: true,
          defaultValue: 'Transform your financial future with expert portfolio management, advanced trading strategies, and comprehensive financial advisory services. Join 25,000+ satisfied clients who trust our proven track record.',
        },
        {
          name: 'ctaText',
          type: 'text',
          required: true,
          defaultValue: 'Start Your Financial Journey',
        },
        {
          name: 'ctaLink',
          type: 'text',
          required: true,
          defaultValue: '#contact',
        },
        {
          name: 'stats',
          type: 'array',
          minRows: 4,
          maxRows: 4,
          fields: [
            {
              name: 'value',
              type: 'number',
              required: true,
            },
            {
              name: 'suffix',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'mainStats',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'metric',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'number',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'services',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'features',
          type: 'array',
          minRows: 4,
          maxRows: 4,
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'clients',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'successStories',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'profession',
          type: 'text',
          required: true,
        },
        {
          name: 'location',
          type: 'text',
          required: true,
        },
        {
          name: 'testimonial',
          type: 'textarea',
          required: true,
        },
        {
          name: 'results',
          type: 'group',
          fields: [
            {
              name: 'portfolioGrowth',
              type: 'text',
              required: true,
            },
            {
              name: 'timePeriod',
              type: 'text',
              required: true,
            },
            {
              name: 'strategy',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'avatar',
          type: 'text',
          required: true,
        },
        {
          name: 'background',
          type: 'select',
          options: [
            { label: 'Business', value: 'business' },
            { label: 'Professional', value: 'professional' },
            { label: 'Homemaker', value: 'homemaker' },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'successStats',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'trainerProfile',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          defaultValue: 'Sameer Sarang',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Founder & Financial Services Expert',
        },
        {
          name: 'experience',
          type: 'text',
          required: true,
          defaultValue: '10+ Years Experience',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Founder of Finanthropist based in Nashik, Maharashtra. Sameer provides comprehensive financial services including portfolio management, trading advisory, investment planning, and financial education. He combines practical market expertise with personalized financial solutions for individuals and businesses.',
        },
        {
          name: 'achievements',
          type: 'array',
          minRows: 3,
          maxRows: 6,
          fields: [
            {
              name: 'achievement',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'stats',
          type: 'array',
          minRows: 3,
          maxRows: 3,
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
}