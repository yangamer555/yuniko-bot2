const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => { 

    let messagefetch = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
    let levelfetch = db.fetch(`level_${message.guild.id}_${message.author.id}`)

    if(messagefetch == null) messagefetch = '0';
    if(levelfetch == null) levelfetch = '0';

    const embed = new Discord.RichEmbed()
    .setDescription(`${message.author}, Твой лвл: \`${levelfetch}\`,Ты отправил: \`${messagefetch}\` сообщений на этом сервере`)

    message.channel.send(embed)

}



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["level"],
    permLevel: 0
  };
  
exports.help = {
  name: 'rank',
  description: 'заставить бота выйти с сервера( Только для владельца).',
  usage: 'rank'
};
  