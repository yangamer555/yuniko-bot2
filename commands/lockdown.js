exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** У вас недостаточно прав!");

  message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`Черт, **${message.author.username}** просто заблокировал канал. Не волнуйтесь, администраторы скоро снова откроют чат, так что наберитесь терпения.      `);
  };
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 0
};

exports.help = {
  name: 'lockdown',
  description: 'Это заблокирует канал',
  usage: 'lockdown'
};
