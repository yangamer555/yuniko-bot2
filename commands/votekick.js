const Discord  = require('discord.js');
const customisation = require('../customisation.json');

const agree    = "✅";
const disagree = "❎";

exports.run = async (bot, message, args) => {

  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Пинганите пользователя!");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply(":x: " + "| Этот пользователь не кажется действительным!");
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.reply(":x: " + "| Мне нужно право: \"KICK_MEMBERS\"").catch(console.error);
  }

  let msg = await message.channel.send(`Голосует за кик ${message.mentions.users.first().username}${message.mentions.users.first().discriminator}(50 Секунд)`);
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Голосование завершено:", "----------------------------------------\n" +
                                          "Кол-во голосов (Yes): " + `${YES_Count-1}\n` +
                                          "Кол-во голосов (NO): " + `${NO_Count-1}\n` +
                                          "----------------------------------------\n" +
                                          "NOTE: Голосов нужно чтобы кикнуть (3+)\n" +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")
            .setFooter(`© Yuniko Bot от ${customisation.ownername}`);
  await message.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      message.reply(`${member.user.username} успешно кикнут!`)
    })
  }else{

    message.channel.send("\n" + "БЕЗОПАСНОСТЬ..... СЕЙЧАС");
  }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'votekick',
    description: 'Голосуйте чтобы кого-то кикнуть.',
    usage: 'votekick'
  };
  