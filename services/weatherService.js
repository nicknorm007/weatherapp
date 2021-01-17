const axios = require('axios');
const { resolve } = require('path');
const Constants = require('../Constants')

const weatherService = {

  async getWeather(city, forecastUrl) {
    const data = (forecastUrl !== "none") ? 
      await axios.get( forecastUrl ) : await axios.get( Constants[city] );
    return data;
  },
  async getWeatherAlerts(state) {
    const data = await axios.get( `${Constants.AlertUrl}?area=${state}` );
    return data;
  },

}

module.exports = weatherService;