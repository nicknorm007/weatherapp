const axios = require('axios');
const Constants = require('../Constants')

const weatherService = {

  async getWeather(city) {

    try {
      return await axios.get(Constants[city])
    } catch (error) {
      console.error(error)
    } finally {
    }

  }
}

module.exports = weatherService;