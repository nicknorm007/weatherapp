document.addEventListener("DOMContentLoaded", function(event) {
    
    document.getElementById("btnLookup")
      .addEventListener("click", handleLookup);

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