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
      } finally {}

  },
  getForecastUrl(lat,lng) {

    let url = Constants.points_data_url + `${lat},${lng}`

    try {
      return axios.get( url )
    } catch (error) {
        console.error(error)
      } finally {}
  }
}

module.exports = weatherService;