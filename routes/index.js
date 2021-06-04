const express = require('express');
const path = require('path');
const auth = require('http-auth');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const weatherController = require('../controllers/weatherController');
const colors = require('../common/colors')

const basic = auth.basic({
  file: path.join(__dirname, '../users.htpasswd'),
});

router.get('/weather', weatherController.getWeather);
router.get('/custom', weatherController.getCustom);
router.get('/custom/lookup', weatherController.getCustomLookup);
router.get('/alerts', weatherController.getAlerts);

router.get('/', (req, res) => {
  const citymap = colors.transformCityColorMap(colors.city_color_map)
  let envurl = process.env.ENV_URL || "weather.nicksoddsandends.com"
  res.render('form', { title: 'Weather home', citymap: citymap, wenvw: envurl });
  });

module.exports = router