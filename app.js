const argv = require('./config/yargs').argv;
const lugarServices = require('./servicios/lugar');

lugarServices
  .getCoordenadas(argv.lugar)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
