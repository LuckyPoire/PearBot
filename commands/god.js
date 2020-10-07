const GoD = require('../bot/droateGoche')
module.exports = {
	name: 'god',
	description: 'GocheDroate',
	execute(message, args) {
        GoD.gocheOuDroate(message, args);
	},
};