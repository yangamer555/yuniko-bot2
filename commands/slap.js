const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Выберите свою жервту :)Т");
    if(message.mentions.users.first().id === "691911205891080243") return message.reply('Зачем слапать меня?.:facepalm:');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} слапнул ${message.mentions.users.first().username}`)
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
    name: 'slap',
    description: 'Слапните кого-то OwO',
    usage: 'slap'
  };