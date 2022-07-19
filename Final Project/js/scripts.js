/*   place date on top right corner of the page */
const datefield = document.querySelector("aside");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;
let templeData = {}

/*  humburger menu  */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


/* load the options for the destination select */
let destiantionSelect = document.querySelector('#destiantion');
const requestFile = 'data/data.json';
fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    templeData = jsonObject;
    templeData.forEach(addTemple)
  });

function addTemple(temple){
    const html = `<option value="${temple.name}">${temple.name}</option>\n`;
    destiantionSelect.innerHTML += html;
}

destiantionSelect.addEventListener("change",destiantionSelect_onChange);


function destiantionSelect_onChange (){
  if (destiantionSelect.value != ""){
    let name = document.querySelector("#temple-name");
    let address = document.querySelector("#temple-address");
    let phone = document.querySelector("#temple-phone");
    let image = document.querySelector("#temple-img");
    let templeInfo = document.querySelector(".temple-info");
    let t = templeData.forEach(temple => {
      if (temple.name == destiantionSelect.value){
        name.textContent = temple.name;
        address.textContent = temple.address;
        phone.textContent = temple.phone;
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', `Image of ${temple.name}`);
        templeInfo.style.visibility = "visible"
        updateWeather(temple.location)
      }
        })

  }else{     
    let templeInfo = document.querySelector(".temple-info"); 
    templeInfo.style.visibility = 'hidden';
  }
} 




async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
function updateWeather(templeLocation){
   url = `https://api.openweathermap.org/data/2.5/forecast?q=${templeLocation.replace(" ","%20")},US&appid=a1cdf4d637caf46a9288686067728afa&units=imperial`
   const cityWeather = document.querySelector("#city-weather")
   cityWeather.innerHTML = templeLocation + '<br>Weather'
   apiFetch();
 }

 function displayResults(weatherData){
  //86400
  //currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  console.log(weatherData.list)
  let dataWeather = weatherData.list
  let startHour = 0;

  // this will return 5 days of weather information.
  const fiveDaysWeatherInfo = dataWeather.filter(forHourTimeFrame => {
    if (startHour + 86400 == forHourTimeFrame.dt || startHour == 0){
      startHour = forHourTimeFrame.dt
      console.log(forHourTimeFrame);
      //create the holder of all weathers per day
      const father = document.querySelector("#five-days-weather");
      //holder for temp of a day
      const div = document.createElement("div");
      //get the day name
      const header5  = document.createElement("h5");
      let theDay = new Date(forHourTimeFrame.dt);
      header5.textContent = theDay.toLocaleDateString("en-EN", { weekday: 'long' });
      
      //get temp
      const header4  = document.createElement("h4");
      header4.textContent = forHourTimeFrame.main.temp
      const image  = document.createElement("img");
      const para  = document.createElement("p");
      
      
      
      
      
      return forHourTimeFrame
    };
  });
  



  const iconsrc = `https://openweathermap.org/img/w/${fiveDaysWeatherInfo[0].weather[0].icon}.png`;
  const desc = fiveDaysWeatherInfo[0].weather[0].description;

  
  
  
  
  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');



 }


 const getHourFromDate = timestamp => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  return date.getHours()
}








