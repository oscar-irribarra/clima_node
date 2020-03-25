const axios = require('axios').default;
const apiKey = '7a3296de6a535a2c20cd3dd5e8d80ddf';

let getClima = async coord => {
  const { lat, lon } = coord;
  const resp = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        lat: lat,
        lon: lon,
        lang: 'es',
        units: 'metric',
        appid: apiKey
      }
    }
  );

  const clima = resp.data.weather[0].description;

  const temp = resp.data.main;

  return {
    clima,
    temperatura: temp.temp,
    sensacion_termica: temp.feels_like,
    humedad: `${temp.humidity}%`
  };
};

module.exports = {
  getClima
};
