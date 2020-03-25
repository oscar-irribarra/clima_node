const argv = require('yargs')
                .options({
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