const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Выберите себе жертву");
    const { body } = await superagent
    .get("https://nekos.life/api/hug");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} обнял(а) ${message.mentions.users.first().username}`)
    .setImage(body.url);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hug',
    description: 'Обнимите кого-то OwO',
    usage: 'hug'
  };
