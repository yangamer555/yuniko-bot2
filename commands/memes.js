const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
        .setImage(url)
        .setColor('#ff9900')
        .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
     return message.channel.send({ embed });
})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['memes', 'mem', 'memes'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'memes',
    description: 'Отправляет рандомным мем про аниме',
    usage: 'memes'
  };