exports.run = (client, msg) => {
    msg.channel.send(`:game_die: **${msg.author.username}**, Вы закрутили барабан, и вам попалось: **${Math.floor(Math.random() * 6) + 1}**!`);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Крутите барабан!.',
  usage: 'roll'
};
