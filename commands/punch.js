exports.run = (client, message) => {
  var owner = "427876788438433792"
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Пинганите кого-то.')
        if(user.id === owner){
          return message.reply("Зачем моего создателя бить :(.");
  }else{
          message.reply('Вы ударили <@' + user.id + '>')
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch',
  description: 'Пните, или ударьте кого-то.',
  usage: 'punch <user>'
};
