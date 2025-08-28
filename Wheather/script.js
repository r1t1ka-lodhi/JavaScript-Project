document.addEventListener('DOMContentLoaded',()=>{
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('city');
    const weatherInfo = document.getElementById('weather-info');
    const errorMessage = document.getElementById('error-message');
    const cityName = document.getElementById('city-name');
    const Temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const API_key="bd23900bf1e810d3d3fac6729234c6d0";//env variables
    searchBtn.addEventListener('click', async() => {
        const city = cityInput.value.trim();
        if(!city){
            return;
        }
        try {
            const weatherData=await getweatherData(city);
            displayWeatherData(weatherData);
            
        } catch (error) {
            showError();
        }

    });

    async function getweatherData(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
        const response = await fetch(url);
        try {
            if (!response.ok) {
                throw new Error('City found');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch weather data');
        }
    
    }

    function displayWeatherData(weatherData){
        console.log(weatherData);
        const {name, main, weather }=weatherData;
        cityName.textContent=name;
        Temperature.textContent=`Temperature: ${main.temp} °C`;
        description.textContent=`Weather: ${weather[0].description}`;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');

    }

    function showError(){
        weatherInfo.classList.add('hidden');      // hide weather info
        errorMessage.classList.remove('hidden');
        errorMessage.textContent='City not found. Please try again';
    }
})