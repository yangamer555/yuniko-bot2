
const moment = require('moment');
const Discord = require('discord.js');
const customisation = require('../customisation.json');
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " Дней" : " Дней") + " прошло";
};
exports.run = async (client, msg, args) => {
  let user = msg.mentions.users.first();
  let muser = msg.guild.member(msg.mentions.users.first());
    if (!muser) muser = msg.member;
    if(!user) user = msg.author;
  const embed = new Discord.RichEmbed();
  embed.addField("Ник", `${user.username}#${user.discriminator}`, true)
          .addField("Айди", `${user.id}`, true)
          .setColor(3447003)
          .setThumbnail(`${user.avatarURL}`)
          .setTimestamp()
          .setURL(`${user.avatarURL}`)
          .addField('Currently', `${muser.presence.status.toUpperCase()}`, true)
          .addField('Игра', `${muser.presence.game === null ? "Не указана" : muser.presence.game.name}`, true)
          .addField('Зарегистрировался в дискорде', `${moment(user.createdAt).toString().substr(0, 15)}\n(${moment(user.createdAt).fromNow()})`, true)
          .addField('Зашел на сервер', `${moment(muser.joinedAt).toString().substr(0, 15)}\n(${moment(muser.joinedAt).fromNow()})`, true)
          .addField('Роли', `${muser.roles.array()}`, true)
          .addField('Бот или нет', `${user.bot.toString().toUpperCase()}`, true)
          .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
      msg.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["userstats"],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Показывает инфу о игроке.',
  usage: 'userinfo <@user>'
};
