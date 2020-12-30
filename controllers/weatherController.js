const axios = require('axios');
const service = require('../services/weatherService')
const colors = require('../common/colors')

const weatherController = {
    getWeather (req, res) {
        const data = service.getWeather().then( (result) => {
          const forecast_data = result.data.properties.periods;
          const forecasts = forecast_data.map(function (forecast, index, array) {
            let tColor = 'hsla(265, 89%, 21%, 0.7)'
            return ({ ...forecast, tempColor:tColor }); 
          });
          //console.log(forecasts);
          res.render('weather', { title: 'Weather data', forecasts: forecasts});
        });
    }
}

module.exports = weatherController;