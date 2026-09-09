console.log(import.meta.env.VITE_API_KEY);
async function getWeather() {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const locresponse = await fetch("https://ipapi.co/json/");
    const location = await locresponse.json();
    const city = location.city;
    const country = location.country;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    document.getElementById("location").innerHTML = `${city}, ${country}`;
    const celsius = data.main.temp - 273.15;
    document.getElementById("rn").innerHTML = `${celsius.toPrecision(2)}`;
    const feelsCel = data.main.feels_like - 273.15;
    document.getElementById("feels").innerHTML = `${feelsCel.toPrecision(2)}`;
    const weatherType = (data.weather[0].main);
    document.getElementById('image').src = `src/images/${weatherType}.png`;
}
getWeather();
export {};
