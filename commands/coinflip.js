exports.run = async (bot, message, args) => {
    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
      message.channel.send('Орел!');
    }
    else {
      message.channel.send('Решка!');
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'coinflip',
    description: 'Подкинуть монетку',
    usage: 'coinflip'
  };
  