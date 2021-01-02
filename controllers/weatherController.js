const axios = require('axios');
const service = require('../services/weatherService')
const colors = require('../common/colors')

const weatherController = {
    async getWeather (req, res) {
      let city = req.query.city
      let formattedCity = city.replace(/\s+/g,"_")
      const data = await service.getWeather(formattedCity).then( (result) => {
        const forecast_data = result.data.properties.periods;
        const forecasts = forecast_data.map((forecast, index, array) => {
            let tColor = colors.determineTemperatureColor(forecast.temperature);
            let nColor = colors.getHSLAFromString(forecast.name);
            return ({ ...forecast, tempColor: tColor, nameColor: nColor });
          });
          //console.log(forecasts);
        res.render('weather', { title: 'Weather data', forecasts: forecasts, city: city});
      });
    },
    getCustom (req, res) {
      res.render('custom', { title: 'Custom'});
    },
    getAlerts (req, res) {
      res.render('alerts', { title: 'Alerts'});
    }
}

module.exports = weatherController;