const axios = require('axios');
const Constants = require('../Constants')

const weatherService = {

  async getWeather() {

    try {
      const response = await axios.get(Constants.local_01876_forecast_url)
      return response
    } catch (error) {
      console.error(error)
      process.exit(1)
    }

  }
}

module.exports = weatherService;