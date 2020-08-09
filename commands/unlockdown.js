exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌**Error:** У вас недостаточно прав!");

    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Блокировка снята WEEEEEEEEEEEEEEEEEEEEEE, наслаждайтесь разговором, пока вы еще можете :wink:');
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    })
  };
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uld'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'unlockdown',
    description: 'Разблокируйте канал.',
    usage: 'unlockdown'
  };