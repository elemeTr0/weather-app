
const data = "";
async function getWeather(city: string)
{
    const API_KEY = '2ad9a034422cd9c0b2561e7b7c0eda2c';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data);

    const celsius = data.main.temp - 273.15

    document.getElementById("tempT")!.innerHTML = `${celsius.toPrecision(2)}`;
}

const locresponse = await fetch("https://ipapi.co/json/");
const location = await locresponse.json();
const city = location.city

console.log(location.city);
console.log(location.country);

getWeather(city);