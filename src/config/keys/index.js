if (process.env.NODE_ENV === 'production') {
  // return production keys
  module.exports = {
    WMATA: {
      api_key: process.env.WMATA_API_KEY
    }
  };
} else {
  // return dev keys
  console.log(process.env);
  module.exports = require('./dev');
}
