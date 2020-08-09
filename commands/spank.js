const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Выберите себе жертву :)");
    if(message.mentions.users.first().id === "427876788438433792") return message.reply('Вы не можете шлепнуть моего создателя :facepalm:');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username} шлепнул ${message.mentions.users.first().username} xDD`)
    .setImage(body.neko) 
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
    name: 'spank',
    description: 'Шлепните кого-то xD',
    usage: 'spank'
  };