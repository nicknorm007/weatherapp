const axios = require('axios');
const service = require('../services/weatherService')
const colors = require('../common/colors')

const weatherController = {
    getWeather (req, res) {
        const data = service.getWeather().then( (result) => {
          const forecast_data = result.data.properties.periods;
          const forecasts = forecast_data.map(function (forecast, index, array) {
            let tColor = colors.determineTemperatureColor(forecast.temperature)
            let nColor = colors.getHSLAFromString(forecast.name)
            return ({ ...forecast, tempColor:tColor, nameColor:nColor }); 
          });
          //console.log(forecasts);
          res.render('weather', { title: 'Weather data', forecasts: forecasts});
        });
    }
}

module.exports = weatherController;