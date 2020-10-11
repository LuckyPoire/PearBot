const Sticker = require('../bot/sticker')
module.exports = {
	name: 's',
	description: 'montre le sticker',
	execute(message, args) {
		Sticker.showSticker(message,args);
		message.delete()
	},
};