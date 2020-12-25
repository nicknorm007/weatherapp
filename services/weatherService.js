const axios = require('axios');
const Constants = require('../Constants')

const weatherService = {

    async getWeather () {
        const response = await axios.get(Constants.local_01876_forecast_url)
        return response
      }
}

module.exports = weatherService;