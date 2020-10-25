const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Выберите себе жертву");
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('Но это невозможно...:facepalm:');
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} поцеловал(а) ${message.mentions.users.first().username}`)
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
    name: 'kiss',
    description: 'Поцелуйте кого-то OwO',
    usage: 'kiss'
  };

