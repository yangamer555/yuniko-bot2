const Discord = require('discord.js');
const settings = require('../settings.json');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  //let logchannel = message.guild.channels.find('name', 'logs');
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry_sign: **Error:** Вы не имеете **Ban Members** разрешения!");
  if (message.mentions.users.size < 1) return message.channel.send('Пинганите того кого вы хотите забанить.').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.channel.send('Хм.. Забанить себя? Гениальна идея! Но не сегодня :facepalm:');
  if (user.id === client.user.id) return message.channel.send("Вы плеблорд, как вы можете использовать меня, чтобы забанить меня?:joy:");
  if (message.mentions.users.first().id === "42787688438433792") return message.channel.send("Вы не можете забанить моего создателя:wink:");
  if (reason.length < 1) reason = 'Вы забыли указать причину.';
  //let botRolePosition = message.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    let userRolePossition = message.member.highestRole.position;
    if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Я немогу забанить этого пользователя, потому что у него роль больше чем ваша.")
  //if (botRolePosition <= rolePosition) return message.channel.send("❌**Error:** Failed to add the role to the user because my highest role is lower than the specified role.");
  if (!message.guild.member(user).bannable) {
    message.channel.send(`:redTick: Я немогу его забанить, потому что его роль выше чем моя!.`);
    return
  }else{
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Действие:', 'Ban')
    .addField('Пользователь:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Модератор:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Причина', reason)
    .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
    let logchannel = message.guild.channels.find('name', 'logs');
  if  (!logchannel){
    message.channel.send({embed})
    message.channel.send(`:hammer: Готово. Вам больше не нужно беспокоиться об этой дерьмовой голове, я его забанил!`)
  }else{
    message.channel.send(`:hammer:  Готово. Вам больше не нужно беспокоиться об этой дерьмовой голове, я его забанил! Также я записал лог в <#${logchannel.id}>.`)
    client.channels.get(logchannel.id).send({embed});
  }
  if(user.bot) return;
  return message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return
  });
}
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bigyeet"],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Банит.',
  usage: 'ban [mention] [reason]'
};
