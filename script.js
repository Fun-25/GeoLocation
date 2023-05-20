var x = document.getElementById("demo");
 let lat,lon;

 document.addEventListener("DOMContentLoaded",function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    lat = parseInt(position.coords.latitude);
    lon = parseInt(position.coords.longitude);

  fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=d66b5b9d10fa428bb46869554db52f05`)
    .then(resp => resp.json())
    .then((result) => {
      if (result.length) {
        console.log(result);
      }  
       
      else console.log("No location found");
    })
     
}

 
