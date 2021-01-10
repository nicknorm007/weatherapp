document.addEventListener("DOMContentLoaded", function(event) {
    
    document.getElementById("btnLookup")
      .addEventListener("click", handleLookup);
    
    document.getElementById("btnGetCustomForecast")
      .addEventListener("click", handleGetForecast);
    
    document.getElementById("btnFindForecastUrl")
      .addEventListener("click", handleFindForecast);

    document.getElementById("customForecastUrl").style.visibility = "hidden";

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
    });
 }

 const handleGetForecast = () => {
    let url = document.getElementById("customUrlForecast").value
    let place = document.getElementById("formattedPlace").value
    let city = place.split(",")[0]
    window.location.href = "http://localhost:3000/weather?forecastUrl="+url+"&city="+city
 }

 const handleFindForecast = () => {

    let lat = document.getElementById("latitude").value
    let lng = document.getElementById("longitude").value

    fetch("http://localhost:3000/custom/forecast?lat="+lat+"&lng="+lng)
      .then(response => response.json())
      .then( (data) => {
        document.getElementById("customForecastUrl").style.visibility = "visible";
        document.getElementById("btnGetCustomForecast").classList.remove("disabled");
        document.getElementById("customUrlForecast").value = data.forecast;
      });

 }