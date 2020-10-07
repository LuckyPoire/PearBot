
const fetch = require('node-fetch');

// Renvoie un article aléatoire de wikipedia avec son url
async function getArticle() {
    const response = await fetch('https://fr.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&origin=%2A&prop=info&inprop=url&format=json');
    const json = await response.json();
    article = Object.values(json.query.pages)[0]
    return article
}

exports.gocheOuDroate = async (message, args) => {
    if(args.length == 0){
        let json = await getArticle();//Récupére l'article aléatoire de wikipedia
        let titre = json.title //Le titre de l'article
        let lien = json.fullurl //Le lien de l'article
        let mess = "**" +titre+ "**, c'est de gauche ou de droite? \n\n" + lien

        message.channel.send(mess).then(sentMess => { //Pour ajouter les réaction G et D au message du bot
            sentMess.react('🇬')
            sentMess.react('🇩')
        })
    }else{
        message.reply(`la syntaxe n'est pas bonne ! \n !god`);
    }
    
    
}
