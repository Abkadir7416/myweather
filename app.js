const apiKey = `db0fcbfa80a4d0f19f3a12b45b767c13
`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
// const api = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// const imgURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather =  async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url)
    const data = await response.json();
    return showWeather(data);
}

const showWeather = async (data) => {
    if(data.cod == "404") {
        weather.innerHTML = `<h2> City not found <h2>`;
        return;
    }
    weather.innerHTML = 
    `
    <div class="row" id="weather">
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} °C</h2>
                <h4> ${data.weather[0].main} </h4>
            </div>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);

        event.preventDefault();
    }
)