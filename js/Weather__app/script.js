const output = document.querySelector(".output");

const API_KEY = "d11b4f1b80bbc7d411d03d0ea0784e82";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${API_KEY}`);

  data = await response.json();
  console.log(data);
  const name = data.name;
  const temp = Math.round(data.main.temp) + "°C";
  const humidity = data.main.humidity + " %";
  const windSpeed = data.wind.speed + " km/h";
  console.log(name);
  console.log(temp);
  console.log(humidity);
  console.log(windSpeed);


  document.querySelector(".weather__temp").textContent = temp;
  document.querySelector(".weather__name").textContent = name;
  document.querySelector(".details__left-text--percentage").textContent = humidity;
  document.querySelector(".details__right-text--speed").textContent = windSpeed;

  document.querySelector('.weather').style.display = 'block';
}

const buttonEl = document.querySelector(".card__form-button");
buttonEl.addEventListener("click", (e) => {
  e.preventDefault();

  const city = document.querySelector(".card__form-input").value;
  getWeather(city);
});
