$(function(){

  $("#btnLookup").on("click", function(){
    let place = $("#myplace").val()
    $.get( "http://localhost:3000/custom/lookup?place="+place, function( data ) {
        $("#latitude").val(JSON.stringify(data.geometry.lat));
        $("#longitude").val(JSON.stringify(data.geometry.lng));
        $("#timezone").val(JSON.stringify(data.annotations.timezone.name));
        $("#formattedPlace").val(JSON.stringify(data.formatted));
        $( "#btnGetCustomForecast" ).removeClass( "disabled" )
    });

  });


});