exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('Вы не можете лизнуть воздух.');
  if(message.mentions.users.first().id === "691911205891080243") return message.reply('Зачем лизать меня?.:facepalm:');
  message.channel.send(`${message.author.username} лизнул(а) ${message.mentions.users.first().username}.`)
  }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'smack',
  description: 'Smacks a user.',
  usage: 'Лизните кого-то <user>'
};
