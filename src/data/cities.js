/**
 * @typedef {Object} City
 * @property {string} id
 * @property {string} name
 * @property {string} webp
 * @property {string} jpg
 * @property {string} positionDesktop
 * @property {string} positionMobile
 * @property {string} label
 */

/** @type {City[]} */
export const cities = [
  {
    id: 'paris',
    name: 'Paris',
    webp: '/images/cities/paris.webp',
    jpg: '/images/cities/paris.jpg',
    positionDesktop: '72% 46%',
    positionMobile: '82% 42%',
    label: 'Paris at dusk, with the Eiffel Tower on the right',
  },
  {
    id: 'royal-holloway',
    name: 'Royal Holloway',
    webp: '/images/cities/royal-holloway.webp',
    jpg: '/images/cities/royal-holloway.jpg',
    positionDesktop: '64% 50%',
    positionMobile: '78% 48%',
    label: 'The Founder’s Building at Royal Holloway, University of London',
  },
  {
    id: 'london',
    name: 'London',
    webp: '/images/cities/london.webp',
    jpg: '/images/cities/london.jpg',
    positionDesktop: '70% 48%',
    positionMobile: '84% 46%',
    label: 'London at dusk, with St Paul’s Cathedral on the right',
  },
  {
    id: 'san-francisco',
    name: 'San Francisco',
    webp: '/images/cities/san-francisco.webp',
    jpg: '/images/cities/san-francisco.jpg',
    positionDesktop: '78% 38%',
    positionMobile: '88% 36%',
    label: 'San Francisco at night, with the Golden Gate Bridge on the right',
  },
];

export const CITY_DURATION_MS = 7000;
export const CITY_FADE_MS = 1200;
export const CITY_FADE_REDUCED_MS = 180;
