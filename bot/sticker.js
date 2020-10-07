const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

const Stickers = sequelize.define('stickers', {
	nom: {
		type: Sequelize.STRING,
		unique: true,
	},
	lien: Sequelize.TEXT,
});

exports.initDB = () => {
    Stickers.sync();
};

exports.addSticker = async (msg, args) => {
    const reg=/^http:\/\/|^https:\/\//;
    if(reg.test(args[1]) && args.length == 2){
		try {
			const sticker = await Stickers.create({
				nom: args[0],
				lien: args[1],
			});
			return msg.reply(`Sticker ${sticker.nom} ajouté.`);
		}
		catch (e) {
			if (e.name === 'SequelizeUniqueConstraintError') {
				return msg.reply('ce nom est déja utilisé.');
			}
			console.log(e)
			return msg.reply(`quelque'chose ne vas pas avec ce nom.`);
		}
	}else{
		return msg.reply(`la syntaxe n'est pas bonne ! \n !sticker **nomDuStickers** **lienDuSticker**`);
	}
}

exports.showSticker = async (msg, args) =>{

	if(args.length == 1){
		const sticker = await Stickers.findOne({ where: { nom: args[0] } });
		if (sticker) {
			return msg.channel.send(sticker.get('lien'));
		}
		return msg.reply(`je ne trouve pas le sticker: ${args[0]}`);
	}else{
		return msg.reply(`la syntaxe n'est pas bonne ! \n !s **nomDuSticker**`)
	}
}

exports.listSticker = async (msg, args) => {
	if(args.length == 0){
		const stickList = await Stickers.findAll({ attributes: ['nom'] });
		const stickString = stickList.map(s => s.nom).join(', ') || 'No tags set.';
		return msg.channel.send(`List of tags: ${stickString}`);
	}else{
		return msg.reply(`la syntaxe n'est pas bonne ! \n !listStick`)
	}
	
}

exports.deleteSticker = async (msg, args) => {
	if(args.length == 1){
		const sticker = await Stickers.destroy({ where: { nom: args[0] } });
		if (!sticker) return msg.reply('ce sticker n\'existe pas.');
		return msg.reply('sticker supprimé.');
	}else{
		return msg.reply(`la syntaxe n'est pas bonne ! \n !delStick **nomDuStickers**`)
	}
}