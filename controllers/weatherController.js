const axios = require('axios');
const service = require('../services/weatherService')

const weatherController = {
    getWeather (req, res) {
        const data = service.getWeather().then( (result) => {
          const forecasts = result.data.properties.periods  
          console.log(forecasts[0].shortForecast);
          res.render('weather', { title: 'Weather data' });
        });
    }
}

module.exports = weatherController;