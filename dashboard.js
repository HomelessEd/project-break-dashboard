function updateClock() {
  const clockElem = document.getElementById("clock-preview");
  if (clockElem) { // check if element exists
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const mins = now.getMinutes().toString().padStart(2,'0');
    clockElem.textContent = `${hours}:${mins}`;
  }
}
setInterval(updateClock, 1000);




const weatherPreview = document.getElementById("weather-preview");

const getMiniWeather = async () => {
    const apiKey = "74bbfbdfdd09409495c224850251012";
    const city = "SY37TG";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const cityName = data.location.name;
        const temp = data.current.temp_c;
        const icon = data.current.condition.icon;

        weatherPreview.innerHTML = `
              <p>${cityName}</p>
             <p>${temp}°C</p>
            <img src="${icon}" alt="Weather icon" style="width:40px;height:40px;">
        `;
    } catch (error) {
        console.error(error);
    }
};

getMiniWeather();

const passwordElem = document.getElementById("password-preview");
if (passwordElem) {
  passwordElem.textContent = "Click on password link in centre to create"; // 
}


const linksElem = document.getElementById("links-preview");
if (linksElem) {
  const links = JSON.parse(localStorage.getItem("myLinks")) || [];
  linksElem.textContent = `${links.length} saved`;
}