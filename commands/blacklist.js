const Discord = require("discord.js");
const fs = require('fs');
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
    //message.delete();
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[0];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.reply('Введите нормальный айди игрока');
    }
    if (!message.author.id === '427876788438433792') return message.reply("У вас недостаточно прав для этой команды...:facepalm:");
    //if (user = "blacklist") return message.reply('You need to imput a User ID');
    if (!user) return message.reply('пинганите юзера');
    if (args[0] === '427876788438433792') return message.reply("Вы не можете себя кинуть в чс, Разраб:joy: That would be horrible.");

    if (!blacklist[user]) {
        blacklist[user] = {
          id: user,
          state: true//,
          //name: user.username
        }
        message.reply(`<@${user}> теперь в Черном Списке!`);    
        fs.writeFile("./blacklist.json", JSON.stringify(blacklist), err => {
            if(err) throw err;
          });
        
        client.guilds.forEach((guild) => {
        if(guild.ownerID === user) {
          message.guild.leave(guild.id)
        }
    })

    return;
    }
    if (blacklist[user].state === true) {
        message.reply("Этот пользователь уже в черном списке.");
    return;
    };

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'blacklist',
    description: 'добавляет в черный список.',
    usage: 'blacklist [userid]'
  };