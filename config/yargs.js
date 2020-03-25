const argv = require('yargs')
                .command('mostrar', 'retorna el clima en el lugar indicado', {
                    lugar: {
                        demand: true,
                        alias: 'l',
                        description: 'Lugar a buscar'
                    }
                })
                .help()
                .argv;


module.exports = {
    argv
}