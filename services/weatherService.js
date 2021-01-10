const axios = require('axios');
const { resolve } = require('path');
const Constants = require('../Constants')

const weatherService = {

  async getWeather(city, forecastUrl) {
    
    try {
      return (typeof forecastUrl !== undefined) ? 
        await axios.get( forecastUrl ) : await axios.get( Constants[city] );
    } catch (error) {
        console.error(error)
      } finally {}

  },
  async getForecastUrl(lat,lng) {

    let url = Constants.points_data_url + `${lat},${lng}`

    try {
      return await axios.get( url )
    } catch (error) {
        console.error(error)
      } finally {}
  }
}

module.exports = weatherService;