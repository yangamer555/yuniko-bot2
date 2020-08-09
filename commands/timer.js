const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Пожалуйста введите нормальное значение: \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Пожалуйста, введите период времени: \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Таймер запущен продолжитеностью: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` Таймер подошел к концу! Прошло времени: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'timer',
    description: 'Создайте таймер.',
    usage: 'timer'
  };