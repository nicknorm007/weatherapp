const axios = require('axios');
const { resolve } = require('path');
const Constants = require('../Constants')

const weatherService = {

  getWeather(city, forecastUrl) {
    
    try {
      return ( forecastUrl !== "none") ? 
        axios.get( forecastUrl ) : axios.get( Constants[city] );
    } catch (error) {
        console.error(error)
      }
  }
}

module.exports = weatherService;