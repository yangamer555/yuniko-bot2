exports.run = (client, message, args) => {
    if(message.author.id !== "427876788438433792") return message.channel.send(`**»** ${message.author}, у вас недостаточно прав❌`);
    let id = args[0];
    if (!id) id = message.guild.id;
    return message.guild.leave(id);
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
  name: 'leave',
  description: 'заставить бота выйти с сервера( Только для владельца).',
  usage: 'leave'
};
  