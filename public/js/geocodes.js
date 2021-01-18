document.addEventListener("DOMContentLoaded", function(event) {
    
  const collapse = document.getElementsByClassName("collapsible");
  if(typeof(collapse) != 'undefined' && collapse != null){
    initPanels();
  }
  const btnlookup = document.getElementById("btnLookup");
  if(typeof(btnlookup) != 'undefined' && btnlookup != null){
    btnlookup.addEventListener("click", handleLookup);
  }

  const btnGetCustomFcast = document.getElementById("btnGetCustomForecast");
  if(typeof(btnGetCustomFcast) != 'undefined' && btnGetCustomFcast != null){
    btnGetCustomFcast.addEventListener("click", handleGetForecast);
  }

  const btnFindFcast = document.getElementById("btnFindForecastUrl");
  if(typeof(btnFindFcast) != 'undefined' && btnFindFcast != null){
    btnFindFcast.addEventListener("click", handleFindForecast);
  }

  const customFcastUrl = document.getElementById("customForecastUrl");
  if(typeof(customFcastUrl) != 'undefined' && customFcastUrl != null){
    customFcastUrl.style.visibility = "hidden";
  }

  document.querySelectorAll('.btnWeather').forEach(item => {
    item.addEventListener('mouseover', event => {
      event.target.classList.remove("raised");
    });
  });

  const alertBtn = document.getElementById('btnGetAlerts');
  if(typeof(alertBtn) != 'undefined' && alertBtn != null){
    alertBtn.addEventListener("click", handleGetSelectedState);
  }

  document.querySelectorAll('.btnWeather').forEach(item => {
    item.addEventListener('mouseout', event => {
      event.target.classList.add("raised");
    });
  });
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

const handleGetSelectedState = () => {

  let stateSelect = document.getElementById("stateSelect");
  let abbrev = stateSelect.options[stateSelect.selectedIndex].value;
  let state = stateSelect.options[stateSelect.selectedIndex].text;

  if(state !== "Select State"){
    window.location.href = "http://localhost:3000/alerts?state="+state+"&abbrev="+abbrev
  }
  
}

const handleFindForecast = () => {

  let customUrl = "https://api.weather.gov/points/"
  let lat = document.getElementById("latitude").value
  let lng = document.getElementById("longitude").value

  fetch(`${customUrl}${lat},${lng}`)
    .then(errorHandler)
    .then(response => response.json())
    .then( (data) => {
      document.getElementById("customForecastUrl").style.visibility = "visible";
      document.getElementById("btnGetCustomForecast").classList.remove("disabled");
      document.getElementById("customUrlForecast").value = data.properties.forecast;
    })
    .catch(error => alert("No forecast URL for that location! Make sure you are entering a U.S. location.") );
}

const errorHandler = (response) => {

  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;

}

const initPanels = () => {

  let coll = document.getElementsByClassName("collapsible");
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
  