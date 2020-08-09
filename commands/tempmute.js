const Discord = require("discord.js");
const ms = require("ms");
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {

    let tomute = message.mentions.users.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply("Не удалось найти данные boi.");
    if(message.author.id === message.mentions.users.first()) return message.reply("Вы не можете замутить себя/свою жизнь:facepalm:");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Вы не имеете достаточно прав для этого:facepalm:");
    let muteRole = message.guild.roles.find(`name`, "Muted");
    if (!muteRole) {
        try {
            muteRole = await message.guild.createRole({
                name:"Muted",
                color: "#000000",
                permissions:[]
            });
    
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    MANAGE_MESSAGES: false,
                    READ_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply(" Вы не указали время для временного мута.");
    
    const embed = new Discord.RichEmbed()
    .setColor(0x00FFFF)
    .setTimestamp()
    .addField('Действие:', 'Temp Mute')
    .addField('Юзер:', `${tomute.username}#${tomute.discriminator} (${tomute.id})`)
    .addField('Модератор:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Время', ms(ms(mutetime)))
    .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
    message.channel.send({embed});

    message.guild.member(tomute).addRole(muteRole);

    setTimeout(function(){
        message.guild.member(tomute).removeRole(muteRole)
        message.channel.send(`<@${tomute.id}> Был замьючен`)
    }, ms(mutetime));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['softmute','tempm'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tempmute',
    description: 'Мутит на время юзера',
    usage: 'tempmute @user (time)'
  };