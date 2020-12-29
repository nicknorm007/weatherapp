 const ColorHash = require('color-hash');
 
 const getHSLAFromString = (str) => {
   let colorHash = new ColorHash({saturation: 1, lightness: 0.5});
   let hsl = colorHash.hsl(str);
   return 'hsla(' + hsl[0] + ', 80%, 50%, 0.1)';
};

const tempcolor_hsla_map = {

    very_hot:'hsla(0, 100%, 50%, 1)',
    hot:'hsla(9, 100%, 64%, 1)',
    very_warm:'',
    warm:'',
    cool:'',
    very_cool:'',
    cold:'',
    very_cold:''

};
exports.getHSLAFromString = getHSLAFromString;
exports.tempcolor_hsla_map = tempcolor_hsla_map;