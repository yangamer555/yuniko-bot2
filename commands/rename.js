const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
  let newname = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("❌**Error:** Вы не имеет право: **Manage Nicknames**");
  if (!user) return message.reply('Вы должны пометить кого-то, чтобы я переименовала их.').catch(console.error);
  if (user.id === "427876788438433792") return message.reply("Вы не можете изменить ник моему создателю:wink:");
  if (user === message.author.id) return message.reply('Зачем изменять себе ник?:facepalm:');
  message.guild.member(user).setNickname(newname).catch(console.error);
  message.channel.send("Done.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rename',
  description: 'Измените ник юзера).',
  usage: 'rename @user newname'
};
