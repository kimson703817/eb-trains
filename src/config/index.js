const keys = require('./keys');

module.exports = {
  WMATA: {
    api: 'https://api.wmata.com'
  },
  homeURL:
    process.env.NODE_ENV === 'production'
      ? process.env.HOMEURL
      : 'http://127.0.0.1:3000'
};
