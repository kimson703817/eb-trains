if (process.env.NODE_ENV === 'production') {
  // return production keys
  module.exports = {
    WMATA: {
      api_key: process.env.REACT_APP_WMATA_API_KEY
    }
  };
} else {
  // return dev keys
  module.exports = require('./dev');
}
