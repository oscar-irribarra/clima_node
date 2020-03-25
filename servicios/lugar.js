const axios = require('axios').default;

const getCoordenadas = async lugar => {
  lugar = filtrarLugares(lugar);

  const resp = await axios.get(
    'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    {
      headers: {
        'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
        'x-rapidapi-key': '2efa8fd853msh4273c5d8a8e74a6p12c764jsn482312d09692'
      },
      params: {
        location: lugar
      }
    }
  );

  const data = resp.data.Results;

  if (data.length == 0) throw Error(`el lugar ${lugar} no existe`);

  return {
    lugar: data[0].name,
    lat: data[0].lat,
    lon: data[0].lon
  };
};

const arr = ['isla de pascua', 'rapa nui'];

const filtrarLugares = lugar => {
  return arr.includes(lugar.toLowerCase()) ? 'Easter Island' : lugar;
};

module.exports = {
  getCoordenadas
};
