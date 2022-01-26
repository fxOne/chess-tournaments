/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  localePath: path.resolve('./locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
