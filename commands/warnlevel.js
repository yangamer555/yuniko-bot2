const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply('Пинганите юзера чтобы увидеть его кол-во варнов.').catch(console.error);
    if(!user) return message.reply("Я не нашла такого юзера ...");
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };

    const embed = new Discord.RichEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Варны:', warns[`${user.id}, ${message.guild.id}`].warns)
    .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
    message.channel.send({embed});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["warns"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'warnlevel',
    description: 'Показывает сколько варнов у вас или другого юзера',
    usage: 'warnlevel [mention]'
  };
  //message.guild.member() || message.guild.members.get(args[0])