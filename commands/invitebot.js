const Discord = require('discord.js')
const info = require('../data/infoMsgs.json');
const customisation = require('../customisation.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .setTitle("Yuniko Bot Info:", '')
  .addField('Информация о боте',info.infoMsg1)
  .addField('Приглашение бота',info.infoMsg2)
  .setFooter(`© Yuniko Bot от ${customisation.ownername}`);

  message.author.send({embed}).catch(e =>{
    if (e) {
    message.channel.send(`Ошибка. Вы, кажется, блокируете свои DM(лс), поэтому я отправлю это сюда.    `);
    message.channel.send({embed});
    }
  });
  message.reply("Посмотрите в свой лс!");  
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info'],
  permLevel: 0
};

exports.help = {
  name: 'invitebot',
  description: 'Дает ссылку на приглашение бота!.',
  usage: 'invitebot'
};
