exports.run = function(client, message, args) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌**Error:** Вы не владеете разрешением:**Manage Messages**.");
  if(!args[0]) return message.reply('Использование: purge all|bots|user|images <кол-во>')
  if(!args[1]) return message.channel.send("Вы не указали число");
  if(parseInt(args[1]) == NaN) return message.channel.send("Введите нормально значение");
  if(args[0] === 'all') {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({
      limit: 100
    }).then(messages => message.channel.bulkDelete(messagecount))
    .catch(e => {
      if(e) return message.channel.send("Error: ", e)
    })
  }
  else if(args[0] === 'bots') {
    message.channel.fetchMessages({
      limit: args[1]
    }).then(messages => {
      const userMessages = messages.filter(message => message.author.bot) 
      message.channel.bulkDelete(userMessages)
    }).catch(e => {
      if(e) return message.channel.send("Error: ", e)
    })
  }
  else if(args[0] === 'user') {
    message.channel.fetchMessages({
      limit: args[1]
    }).then(messages => {
      const userMessages = messages.filter(message => !message.author.bot) 
      message.channel.bulkDelete(userMessages)
    }).catch(e => {
      if(e) return message.channel.send("Error: ", e)
    })
  }
  else if(args[0] === 'image') {
    message.reply("Предстоящая особенность :wink:")
  }
  else {
    message.reply('Использование: purge all|bots|user|images <кол-во>')
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Очистит ваш канал!.',
  usage: 'purge all|bots|user|images <amount>'
};
