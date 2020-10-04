const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const GoD = require('./droateGoche')
const JDR = require('./jdr');

// Connection du bot

const bot = new Discord.Client();
bot.once('ready', () => {

});
bot.login(token);

//*****************************************//
//**************Constante*****************//
//*****************************************//
const diceRegExp = /^[1-9][0-9]*d[1-9][0-9]*$/
const reducer = (accumulator, currentValue) => accumulator + currentValue;


//*****************************************//
//*************Gestion message*************//
//****************************************//
bot.on('message', function(message){
    if(message.content === `${prefix}ping`) {
        message.reply('pong');
    }
    if(diceRegExp.test(message.content)){
        let param = message.content.split('d');
        let res = JDR.dice(param[0],param[1]);
        let mess = "Lancer : " + res + "\n Résultat : " + res.reduce(reducer);
        message.reply(mess)
    }
    if(message.content === `${prefix}GoD`){
        GoD.gocheOuDroate(message);
    }
});
