const Discord = require('discord.js')
const info = require('../data/infoMsgs.json');
const customisation = require('../customisation.json');

const fs = require('fs');
const os = require('os');
//const si = require('systeminformation');
const osutils = require('os-utils');

exports.run = (client, message) => {
  
  var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
        days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);

        days = (days < 10) ? "0" + days : days;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        fs.readdir('./commands/', (err, files) => {
          if (err) console.error(err);
          totcmds = files.length;
        
  osutils.cpuUsage(function(v) {
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setThumbnail(`https://cdn.discordapp.com/avatars/482128001828651008/2189c071f81b58045729a60ecb81ad00.png?size=2048`)
    .setURL(`https://cdn.discordapp.com/avatars/482128001828651008/2189c071f81b58045729a60ecb81ad00.png?size=2048`)
    .setTimestamp()
    .addField("VPS статистика:", "Показывает статистику VPS, на котором работает бот.")
    .addField("--------------------------------------------------------------------------------","------------------------------------------------------------------------------")
    .addField("Платформа", osutils.platform(),true)
    .addField("VPS CPU ядра", osutils.cpuCount() + " Cores",true)
    .addField("CPU использовано", `${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%`,true)
    .addField("Всего памяти", osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
    .addField("RAM использовано", `${(osutils.totalmem() - osutils.freemem()).toString().split(".")[0] + "." + ( osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split('')[0] + (osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split('')[1]}/${osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1]}MB`,true)
    .addField("RAM использовано %", `${(100 - osutils.freememPercentage() * 100).toString().split(".")[0] + "." + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split('')[0] + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split('')[1]}%`,true)
    //.addField("Server Uptime", osutils.sysUptime() +"ms",true)
    .addField("Пинг", Math.round(client.ping) + "ms", true)
    .addField("Аптайм", days + "d " + hours + "h " + minutes + "m " + seconds + "." + milliseconds + "s", true)
    .addField("Создатель", `${customisation.ownername}`, true)
    .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
        message.channel.send({embed});
  })
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vpsstats',
  description: 'Показывает VPS статистику.',
  usage: 'vpsstats'
};