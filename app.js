const argv = require('./config/yargs').argv;
const lugarServices = require('./servicios/lugarService');
const climaServices = require('./servicios/climaService');

const obtenerInfo = async lugar => {
    try {
        let coordenadas = await lugarServices.getCoordenadas(lugar);
        let clima = await climaServices.getClima(coordenadas);
      
        return `El clima en ${coordenadas.lugar} tiene una temperatura de ${clima.temperatura} y una humedad del ${clima.humedad}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ lugar }`;        
    }
};

obtenerInfo(argv.lugar)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
