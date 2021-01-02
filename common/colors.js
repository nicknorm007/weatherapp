 const ColorHash = require('color-hash');

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

 const getHSLAFromString = (str) => {
   let colorHash = new ColorHash({saturation: 1, lightness: 0.5});
   let hsl = colorHash.hsl(str);
   return 'hsla(' + hsl[0] + ', 80%, 50%, 0.1)';
};

const determineTemperatureColor = (temp) => {

    if( temp > 90)
    {
        return tempcolor_hsla_map.very_hot
    }
    else if (temp > 80)
    {
        return tempcolor_hsla_map.hot
    }
    else if (temp > 70)
    {
        return tempcolor_hsla_map.very_warm
    }
    else if (temp > 60)
    {
        return tempcolor_hsla_map.warm
    }
    else if (temp > 50)
    {
        return tempcolor_hsla_map.cool
    }
    else if (temp > 40)
    {
        return tempcolor_hsla_map.very_cool
    }
    else if (temp > 32)
    {
        return tempcolor_hsla_map.cold
    }
    else
    {
        return tempcolor_hsla_map.very_cold
    }
    return ''
};

exports.getHSLAFromString = getHSLAFromString;
exports.tempcolor_hsla_map = tempcolor_hsla_map;
exports.determineTemperatureColor = determineTemperatureColor;