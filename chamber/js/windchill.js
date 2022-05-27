const temperature = document.getElementById('temp').innerHTML;
const windspeed = document.getElementById('speed').innerHTML;


let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temperature * Math.pow(windspeed, .16));
if (temperature <= 50 && windspeed > 3) {
   windchill = Math.round(windchill);
} else {
   windchill = "n/a";
}
document.getElementById('chill').innerHTML = windchill + " °F";

