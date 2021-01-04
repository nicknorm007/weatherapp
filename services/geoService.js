const opencage = require('opencage-api-client');

const geoService = {

    getGeoCodeData(place) {
        return opencage.geocode({q:place})
    }

}
module.exports = geoService;