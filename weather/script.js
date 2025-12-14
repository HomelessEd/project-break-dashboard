// My apiKey endPoint https://api.weatherapi.com/v1/current.json?key=74bbfbdfdd09409495c224850251012&q=SY37TG&aqi=no 

fetch("https://api.weatherapi.com/v1/current.json?key=74bbfbdfdd09409495c224850251012&q=SY37TG&aqi=no")
.then(response => response.json())
.then(data => console.log(data))

const card = document.querySelector(".card");
const apiKey = "74bbfbdfdd09409495c224850251012";
const city = "SY37TG"


const getWeather = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=74bbfbdfdd09409495c224850251012&q=SY37TG&aqi=no`;
    
    // Pull data and then put it in Json format we can use
    try {
        const response = await fetch(url);
        const data = await response.json(); 
     // Now we want to extract data that we found in the consolelog before   
     const cityName = data.location.name;
     const tempCelcius= data.current.temp_c;
     const wind = data.current.wind_kph;
     const humid = data.current.humidity;
     const weathDis = data.current.condition.text;
     const icon = data.current.condition.icon;
    
     
        
     // Now put that data on my index.html
     document.querySelector(".cityDisplay").textContent = cityName;
     document.querySelector(".tempDisplay").textContent = `${tempCelcius}°C`;
     document.querySelector(".windSpeed").textContent = `Wind Speed: ${wind} kph`;
     document.querySelector(".humidityDisplay").textContent = `Humidity ${humid} %`;
     document.querySelector(".weatherDescription").textContent = weathDis

      document.querySelector(".weatherIcon").innerHTML = `<img src="${icon}" alt="Weather icon">`;
   }
    // If it fs up
    catch (error) {
    console.error("Something buggered up", error);
 }
};
 //Run
getWeather();

   