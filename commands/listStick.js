const Sticker = require('../bot/sticker')
module.exports = {
	name: 'liststick',
	description: 'liste les stickers',
	execute(message, args) {
        Sticker.listSticker(message,args);
	},
};