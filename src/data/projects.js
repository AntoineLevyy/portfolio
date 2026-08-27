/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} number
 * @property {string} title
 * @property {string} role
 * @property {string} category
 * @property {string} description
 * @property {string} achievement
 * @property {string} learning
 * @property {string} href
 * @property {string} [theme]
 * @property {string[]} [placeholderFields]
 */

/** @type {Project[]} */
export const currentProjects = [
  {
    id: 'alma',
    number: '01',
    title: 'Alma',
    role: 'Solofounder',
    category: 'Consumer AI',
    description: 'The ultimate AI assistant for busy moms',
    achievement: '1000+ users',
    learning:
      'I am starting to believe bootstrap solo-founding is the ideal start for an AI application startup.',
    href: 'https://almahelps.com/',
    theme: 'alma',
  },
  {
    id: 'neon-blue',
    number: '02',
    title: 'Neon Blue',
    role: 'Founding GTM',
    category: 'AI Agents',
    description: 'Go-to-market for an AI agents company.',
    achievement: 'Replace with achievement',
    learning: 'Replace with learning',
    href: 'https://www.neonblue.ai/',
    theme: 'neon',
    placeholderFields: ['achievement', 'learning'],
  },
  {
    id: 'chronically-online',
    number: '03',
    title: 'The Chronically Online Experience',
    role: 'Creator',
    category: 'Consumer Products',
    description:
      'A consumer AI venture studio shipping AI-native apps for everyday life.',
    achievement: 'Replace with achievement',
    learning: 'Replace with learning',
    href: 'https://chronically-online.vercel.app/',
    theme: 'chrono',
    placeholderFields: ['achievement', 'learning'],
  },
];

/** @type {Project[]} */
export const archiveProjects = [
  {
    id: 'adsperform',
    number: '01',
    title: 'Adsperform',
    role: 'Founder',
    category: 'Performance marketing',
    description:
      'AI creative strategy and video generation platform for social media ads.',
    achievement: 'Used by 200+ SMBs',
    learning: 'Replace with learning',
    href: 'https://www.adsperform.com/',
    placeholderFields: ['learning'],
  },
  {
    id: 'solight',
    number: '02',
    title: 'Solight',
    role: 'Co-founder and CEO',
    category: 'Replace with category',
    description: 'Agentic QA solution.',
    achievement: 'Incredible design partners. $250K raised with Entrepreneurs First',
    learning: 'Replace with learning',
    href: 'https://www.youtube.com/watch?v=J-cL8V05wlE',
    placeholderFields: ['category', 'learning'],
  },
  {
    id: 'others',
    number: '03',
    title: 'Others',
    role: 'Creator',
    category: 'Experiments',
    description:
      'Side experiments across relationships, habits, growth, and discovery.',
    achievement: 'Replace with achievement',
    learning: 'Replace with learning',
    href: 'https://factory-command-center-v4.vercel.app/',
    placeholderFields: ['achievement', 'learning'],
  },
];
