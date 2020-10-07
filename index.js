const fs = require('fs')
const Discord = require('discord.js');
const { prefix, token} = require('./config.json');

const BDD = require('./baseDeDonee');

// Connection du bot
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.once('ready', () => {
    BDD.initDB();
    console.log('ready');
});
client.login(token);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//*****************************************//
//*************Gestion message*************//
//****************************************//
client.on('message', function(message){
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    console.log(args);
    const command = args.shift().toLowerCase();
    console.log(command);
 
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        message.reply('there was an error trying to execute that command!');
    }
});
