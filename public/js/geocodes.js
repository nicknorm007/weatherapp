document.addEventListener("DOMContentLoaded", function(event) {
    
    document.getElementById("btnLookup")
      .addEventListener("click", handleLookup);
    
    document.getElementById("btnGetCustomForecast")
      .addEventListener("click", handleCustomForecast);
    
    document.getElementById("btnFindForecastUrl")
      .addEventListener("click", handleForecastLookup);

});

const handleLookup = () => { 

    let place = document.getElementById("myplace").value;
    fetch("http://localhost:3000/custom/lookup?place="+place)
    .then(response => response.json())
    .then( (data) => {
        document.getElementById("latitude").value = data.geometry.lat;
        document.getElementById("longitude").value = data.geometry.lng;
        document.getElementById("timezone").value = data.annotations.timezone.name;
        document.getElementById("formattedPlace").value = data.formatted;
        document.getElementById("btnGetCustomForecast").classList.remove("disabled");
    });
 }

 const handleCustomForecast = () => {

    let place = document.getElementById("formattedPlace").value;
    let determinedCity = place.split(",")[0];
    let lat = document.getElementById("latitude").value
    let lng = document.getElementById("longitude").value

    window.location.href = "http://localhost:3000/weather?city="
      +determinedCity+"&lat="+lat+"&lng="+lng;
    
 }

 const handleForecastLookup = () => {

    let lat = document.getElementById("latitude").value
    let lng = document.getElementById("longitude").value

    fetch("http://localhost:3000/custom/forecast?lat="+lat+"&lng="+lng)
      .then(response => response.json())
      .then( (data) => {
        document.getElementById("customForecastUrl").value = data.forecast;
      });

 }