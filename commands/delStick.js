const Sticker = require('../bot/sticker')
module.exports = {
	name: 'delstick',
	description: 'supprime le sticker',
	execute(message, args) {
        Sticker.deleteSticker(message,args);
	},
};