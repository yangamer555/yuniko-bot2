const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

//loading messages
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Command Loaded! ${props.help.name} 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

const activities_list = [
    "$help", 
    "Слежу за тобой",
    "By Milenkoya",
    "$help"
    ];
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], {
            type: "STREAMING",
            url: "https://www.twitch.tv/hiroaki_haruto"
          });
    }, 5000);
});

client.on("guildCreate", guild => {
  let channelID;
  let channels = guild.channels;
  channelLoop:
  for (let c of channels) {
      let channelType = c[1].type;
      if (channelType === "text") {
          channelID = c[0];
          break channelLoop;
      }
  }

  let channel = client.channels.get(guild.systemChannelID || channelID);
  channel.send(`Спасибо что пригласили меня!!Напишите $help для помощи по командам! СПАСИБО`);

  let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    client.guilds.forEach((guild) => {
      if (!blacklist[guild.ownerID]) return
      if(blacklist[guild.ownerID].state === true) {
        channel.send("Но, к сожалению, владелец этого сервера был в черном списке раньше, поэтому я ухожу! До свидания!")
        guild.leave(guild.id)
      }
    })
});

client.elevation = message => {
  if (message.channel.type === 'dm') return;
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 1;
  let admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 2;
  let manager_role = message.guild.roles.find('name', settings.managerrolename);
  if (manager_role && message.member.roles.has(manager_role.id)) permlvl = 3;
  let overlord_role = message.guild.roles.find('name', settings.overlordrolename)
  if (overlord_role && message.member.roles.has(overlord_role.id)) permlvl = 4;
  if (message.author.id === settings.ownerid) permlvl = 5;
  return permlvl;
};

//ping log 
//var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
//client.on('debug', e => {
//  console.log(e.replace(regToken, 'that was redacted'));
//});


client.login(settings.token);
