const Discord = require('discord.js')
const fs = require("fs");
const customisation = require('../customisation.json');

exports.run = (client, message) => {
  let info = JSON.parse(fs.readFileSync("./halloffame.json", "utf8"));
  const embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .setTitle("Yuniko авторы:", '!⎝⎝✧Milenkoya✧⎠⎠⎝⎝✧FBI✧⎠⎠#6613')
  .addField('Owner', customisation.ownername)
  .setFooter(`© Yuniko Bot от ${customisation.ownername}`);

  message.channel.send({embed});
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hof'],
  permLevel: 0
};

exports.help = {
  name: 'credits',
  description: 'Bot contributors!',
  usage: 'credits'
};
