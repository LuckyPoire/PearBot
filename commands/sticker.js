const Sticker = require('../bot/sticker')
module.exports = {
	name: 'sticker',
	description: 'Ajoute un sticker',
	execute(message, args) {
        Sticker.addSticker(message,args);
	},
};