const axios = require('axios');
const weatherService = require('../services/weatherService')
const geoService = require('../services/geoService')
const colors = require('../common/colors')

const weatherController = {
    async getWeather (req, res) {
      let city = req.query.city
      let lat = req.query.lat
      let lng = req.query.lng
      let formattedCity = city.replace(/\s+/g,"_")
      const data = await weatherService.getWeather(formattedCity,lat,lng)
        .then( (result) => {
          const forecast_data = result.data.properties.periods;
          const forecasts = forecast_data.map((forecast, index, array) => {
            let tColor = colors.determineTemperatureColor(forecast.temperature);
            let nColor = colors.getHSLAFromString(forecast.name);
            return ({ ...forecast, tempColor: tColor, nameColor: nColor });
          });
        res.render('weather', { title: 'Weather data', forecasts: forecasts, city: city});
      });
    },
    getCustom (req, res) {
      res.render('custom', { title: 'Custom'});
    },
    getCustomLookup (req, res) {

      let place = req.query.place
      let places = ''
      const geoData = geoService.getGeoCodeData(place).then( (data) => {

        if (data.status.code === 200) {
          if (data.results.length > 0) {
            places = data.results[0];
            res.json(places)
          }
        } else if (data.status.code === 402) {
          console.log('hit rate daily limit');
        } else {
          console.log('error', data.status.message);
        }
      }).catch(error => {
        console.log('error', error.message);
      });
            
    },
    getCustomForecastUrl (req, res) {

      let lat = req.query.lat;
      let lng = req.query.lng;

      const forecast = weatherService.getForecastUrl(lat,lng).then( (result) => { 
        res.json(result.data.properties);
      });

    },
    getAlerts (req, res) {
      res.render('alerts', { title: 'Alerts'});
    }
}

module.exports = weatherController;