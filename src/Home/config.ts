import type { GlobalConfig } from 'payload'
import { revalidateHome } from './hooks/revalidateHome'

// Color options for consistent theming across the site
const colorOptions = [
  { label: 'Blue Gradient', value: 'from-blue-500 to-blue-600' },
  { label: 'Emerald Gradient', value: 'from-emerald-500 to-emerald-600' },
  { label: 'Purple Gradient', value: 'from-purple-500 to-purple-600' },
  { label: 'Amber Gradient', value: 'from-amber-500 to-amber-600' },
  { label: 'Rose Gradient', value: 'from-rose-500 to-rose-600' },
  { label: 'Red Gradient', value: 'from-red-500 to-red-600' },
  { label: 'Indigo Gradient', value: 'from-indigo-500 to-indigo-600' },
  { label: 'Teal Gradient', value: 'from-teal-500 to-teal-600' },
  { label: 'Orange Gradient', value: 'from-orange-500 to-orange-600' },
  { label: 'Cyan Gradient', value: 'from-cyan-500 to-cyan-600' },
]

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
          type: 'select',
          required: true,
          options: colorOptions,
          defaultValue: 'from-blue-500 to-blue-600',
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
          type: 'select',
          required: true,
          options: colorOptions,
          defaultValue: 'from-emerald-500 to-emerald-600',
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
    {
      name: 'tradingFeatures',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Advanced Trading Features',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          required: true,
          defaultValue: 'Professional trading tools and expert guidance to maximize your investment success',
        },
        {
          name: 'features',
          type: 'array',
          minRows: 4,
          maxRows: 6,
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
              name: 'icon',
              type: 'text',
              required: true,
            },
            {
              name: 'color',
              type: 'select',
              required: true,
              options: colorOptions,
              defaultValue: 'from-purple-500 to-purple-600',
            },
          ],
        },
      ],
    },
    {
      name: 'finalCTA',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Ready to Transform Your Financial Future?',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          required: true,
          defaultValue: 'Join thousands of successful investors who trust Sameer Sarang for comprehensive financial guidance. Start your wealth creation journey today with a personalized consultation.',
        },
        {
          name: 'primaryCTAText',
          type: 'text',
          required: true,
          defaultValue: 'Book Free Consultation',
        },
        {
          name: 'secondaryCTAText',
          type: 'text',
          required: true,
          defaultValue: 'Call +91 98765 43210',
        },
        {
          name: 'features',
          type: 'array',
          minRows: 3,
          maxRows: 3,
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
              name: 'icon',
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