const axios = require('axios');
const service = require('../services/weatherService')
const colors = require('../common/colors')

const weatherController = {
    getWeather (req, res) {
        const data = service.getWeather().then( (result) => {
          const forecasts = (result.data.properties.periods)
          .map(obj=> ({ ...obj, tempColor: 'background-color:hsla(180, 50%, 50%,0.7)' }));
          const nick = colors.getHSLAFromString('nick')
          console.log(nick);
          res.render('weather', { title: 'Weather data', forecasts: forecasts});
        });
    }
}

module.exports = weatherController;