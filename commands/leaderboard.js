const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setDescription(`Топ по уровню: \`$leaderboard levels\` || Топ по сообщениям: \`$leaderboard messages\``)
    .setColor(Math.floor(Math.random()*16777215))


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'levels') {
    let level = db.startsWith(`level_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < level.length; i++) {
        let user = bot.users.get(level[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${level[i].data}\n`
    
      }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Level Leaderboard**\n\n${content}`)
    .setColor(Math.floor(Math.random()*16777215))

    message.channel.send(embed)
  } else if(args[0] == 'messages') {
    let messages = db.startsWith(`messages_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < messages.length; i++) {
        let user = bot.users.get(messages[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${messages[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s топ по сообщениям**\n\n${content}`)
    .setColor(Math.floor(Math.random()*16777215))

    message.channel.send(embed)

  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["lb"],
    permLevel: 0
  };
  
exports.help = {
  name: 'leaderboard',
  description: 'заставить бота выйти с сервера( Только для владельца).',
  usage: 'leaderboard'
};
  