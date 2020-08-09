const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .addField('Коротко обо мне', `Я был создан вот этим человеком: ${customisation.ownername}, сделана для любого дискорд сервера, который нуждается в модерации. Написана на discord.js.`)
  .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
  msg.channel.send({embed});
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'about',
    description: 'Коротко о боте',
    usage: 'about'
  };