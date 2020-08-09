const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Выберите себе жертву :)");
    if(message.mentions.users.first().id === "242263403001937920") return message.reply('Вы не можете защекотать моего владельца. Он взорвется при щекотке XD.');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} щекотит ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tickle',
    description: 'Защикотите кого-то "до смерти" до смеха OwO',
    usage: 'tickle'
  };