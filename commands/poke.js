const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');


exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Выберите себе жертву!");
    if (message.mentions.users.first().id === "691911205891080243") return message.channel.send('<a:yayyy:497742636439044096>');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} тыкнул(а) ${message.mentions.users.first().username}`)
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
    name: 'poke',
    description: 'Тыкните OwO',
    usage: 'poke'
  };
