const Discord = require('discord.js')
exports.run = (client, message, args) => {
     
     let embed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random()*16777215))
     .setDescription(`Вы не выбрали пункт из помощи( $help <выбор>), пункты для выбора:\n\ reactions, info, fun, moderation, other`)
     
     let reactions = new Discord.RichEmbed()
     .setColor(Math.floor(Math.random()*16777215))
     .setDescription(`$cuddle - прижатся к кому-то\n\ $feed - покормить кого-то\n\ $hug - обнимите кого-то \n\ $kiss - поцелуйте кого-то \n\$pat - погладьте кого-то\n\$poke - тык в кого-то\n\$slap - ударьте кого-то\n\$smug - смущатся\n\$spank - шлепните кого-то`)
     
     let info = new Discord.RichEmbed()
     .setColor(Math.floor(Math.random()*16777215))
     .setDescription(`$about - о боте(немного)\n\$botstats - статистика о боте\n\$credits\n\$invitebot - ссылка на бота\n\$serverinfo - информация о сервере\n\$userinfo - информация о пользователе\n\$vpsstats - информация о хосте\n\$ping - пинг бота.`)
     
     let fun = new Discord.RichEmbed()
     .setColor(Math.floor(Math.random()*16777215))
     .setDescription(`$8ball - магический шар!\n\$animemes - аниме мемы(осторожно английский!)\n\$memes/meme/mem - мемы\n\$coinflip - брось монетку!\n\$roll\n\$rps - камень, ножницы, бумага( $rps <выбор>)`)
     
     let moderation = new Discord.RichEmbed()
     .setColor(Math.floor(Math.random()*16777215))
     .setDescription(`$addrole - выдать роль человеку\n\$ban - **BAN**\n\$kick - кик участника\n\$lockdown - закрыть канал\n\$mute - замьютить навсегда\n\$removerole - удалить роль у пользователя\n\$rename - изменить ник у пользователя\n\$tempmute - мьют на время\n\$unban - разбанить кого-то\n\$unlockdown - разблокировать канал\n\$warn - выдать варн`)
     
     let other = new Discord.RichEmbed()
     .setColor(Math.floor(Math.random()*16777215))
     .setDescription(`$avatar - аватар участника\n\$dog\n\$say\n\$timer\n\$vote\n\$votekick\n\$warnlevel\n\$uptime`)
     
     let level = new Discord.RichEmbed()
     .setColor(Math.floor(Math.random()*16777215))
  
    if(!args[0]) return message.reply(embed);
    else if(args[0] === "reactions") return message.reply(reactions)
    else if(args[0] === "level") return message.reply(level)
    else if(args[0] === "info") return message.reply(info)
    else if(args[0] === "fun") return message.reply(fun)
    else if(args[0] === "other") return message.reply(fun)
    else{
    message.channel.send("Введите корректное название")
    }
     
     
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
