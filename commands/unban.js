exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  
  let modlog = client.channels.find('name', 'logs');
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry_sign: **Error:** Вы не имеете права: **Ban Members**!");
  if (!modlog) return message.channel.send('Я не нашла log канал');
  if (reason.length < 1) reason = 'Нету причины.';
  if (!user) return message.channel.send('Напишите пожалуйста айди пользователя.').catch(console.error);
  message.guild.unban(user, {reason: reason.length < 1 ? 'Не указанна причина.': reason}).catch(e =>{
    if(e){
      return message.channel.send(`${client.users.get(`${args[0]}`).username} Он не забанен, YET :wink:`);
    }
    message.channel.send(`${client.users.get(`${args[0]}`).username}#${client.users.get(`${args[0]}`).discriminator} был разбанен`);
  });;

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Разбаньте своего друга) Или обычного юзера.',
  usage: 'unban [mention] [reason]'
};
