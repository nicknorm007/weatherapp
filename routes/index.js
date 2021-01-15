const express = require('express');
const mongoose = require('mongoose');
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
router.get('/custom/forecast', weatherController.getCustomForecastUrl);
router.get('/custom/lookup', weatherController.getCustomLookup);
router.get('/alerts', weatherController.getAlerts);

router.get('/', (req, res) => {
  const citymap = colors.transformCityColorMap(colors.city_color_map)
  res.render('form', { title: 'Weather home', citymap: citymap });
  });

module.exports = router