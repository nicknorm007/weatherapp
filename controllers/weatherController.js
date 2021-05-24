const axios = require('axios');
const weatherService = require('../services/weatherService')
const geoService = require('../services/geoService')
const colors = require('../common/colors')
const retry = require('../common/retry')

const weatherController = {
    getWeather (req, res) {
      let city = req.query.city;
      let forecastUrl = req.query.forecastUrl;
      let formattedCity = city.replace(/\s+/g,"_")
      retry.retry( () => weatherService.getWeather(formattedCity, forecastUrl) )
        .then( (result) => {
          const forecast_data = result.data.properties.periods;
          const forecasts = forecast_data.map((forecast, index, array) => {
            let tColor = colors.determineTemperatureColor(forecast.temperature);
            let nColor = colors.getHSLAFromString(forecast.name);
            let iconKeyword = colors.determineForecastIcon(forecast.detailedForecast)
            return ({ ...forecast, tempColor: tColor, nameColor: nColor, icon: iconKeyword });
          });
        res.render('weather', { title: 'Weather data', forecasts: forecasts, city: city,
          colormap: colors.tempcolor_hsla_map});
      });
    },
    getCustom (req, res) {
      let envurl = process.env.ENV_URL || "weather.nicksoddsandends.com"
      res.render('custom', { title: 'Custom', wenv: envurl});
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
    getAlerts (req, res) {

      let state=req.query.state, abbrev=req.query.abbrev;
      const alertsFeatures=[];
      retry.retry( () => weatherService.getWeatherAlerts(abbrev) )
        .then( (result) => {      
          if( typeof(result.data.features[0]) !== "undefined" ){
            result.data.features.forEach(alert => 
              alertsFeatures.push(alert.properties))
          }
          else{
            alertsFeatures.push({areaDesc:"", 
              headline:"No alerts at this time!", description:"", instruction:""})
          }
          res.render('alerts', { title: 'Alerts', alerts:alertsFeatures, state:state } );
        });
    }
}

module.exports = weatherController;