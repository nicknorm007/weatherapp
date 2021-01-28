const ColorHash = require('color-hash');

const getHSLAFromString = (str) => {
  let colorHash = new ColorHash({saturation: 1, lightness: 0.5});
  let hsl = colorHash.hsl(str);
  return 'hsla(' + hsl[0] + ', 80%, 50%, 0.35)';
};

const tempcolor_hsla_map = {

  very_hot:'hsla(0, 100%, 50%, 1)',
  hot:'hsla(9, 100%, 64%, 1)',
  very_warm:'hsla(27, 100%, 64%, 0.92)',
  warm:'hsla(54, 100%, 64%, 0.87)',
  cool:'hsla(189, 100%, 81%, 1)',
  very_cool:'hsla(210, 100%, 54%, 1)',
  cold:'hsla(252, 100%, 42%, 0.7)',
  very_cold:'hsla(265, 89%, 21%, 0.7)'
};

const city_color_map = {

  Tewksbury:{name:'Tewksbury'},
  Boston:{name:'Boston'},
  Hyannis:{name:'Hyannis'},
  Orlando:{name:'Orlando'},
  Miami:{name:'Miami'},
  San_Francisco:{name:'San Francisco'},
  Juneau:{name:'Juneau'},
  Austin:{name:'Austin'},
  Denver:{name:'Denver'}
  
};

const transformCityColorMap = (colorMap) => {
  const color_map = {};
  for (const [key, value] of Object.entries(colorMap)) {
    color_map[key] = {...value, get color() { return getHSLAFromString(key) }};
  }
  return color_map;
};
const determineForecastIcon = (description) => {
  let desc = description.toLowerCase()
  if(desc.includes("snow")){
    return "snow"
  }
  if( ( desc.includes("rain") || desc.includes("showers") )){
    return "rain"
  }
  if(desc.includes("sunny")){
    return "sun"
  }
  if(desc.includes("cloudy")){
    return "clouds"
  }
  return ""
}
const determineTemperatureColor = (temp) => {

  if (temp > 90) {
      return tempcolor_hsla_map.very_hot
  }
  else if (temp > 80) {
      return tempcolor_hsla_map.hot
  }
  else if (temp > 70) {
      return tempcolor_hsla_map.very_warm
  }
  else if (temp > 60) {
      return tempcolor_hsla_map.warm
  }
  else if (temp > 50) {
      return tempcolor_hsla_map.cool
  }
  else if (temp > 40) {
      return tempcolor_hsla_map.very_cool
  }
  else if (temp > 32) {
      return tempcolor_hsla_map.cold
  }
  else {
      return tempcolor_hsla_map.very_cold
  }
  return ''
};

exports.getHSLAFromString = getHSLAFromString;
exports.tempcolor_hsla_map = tempcolor_hsla_map;
exports.determineTemperatureColor = determineTemperatureColor;
exports.city_color_map = city_color_map;
exports.transformCityColorMap = transformCityColorMap;
exports.determineForecastIcon = determineForecastIcon;