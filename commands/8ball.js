const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("Пожалуйста скажите полный вопрос");
    let Ответ = [

		'Может быть.',
		'Конечно, нет.',
		'Я надеюсь, что это так.',
		'Не в твоих самых смелых мечтах',
		'Есть хороший шанс',
		'Вполне вероятно.',
		'Я так думаю.',
		'Надеюсь нет.',
		'Я надеюсь, что это так.',
		'Никогда!',
		'Пффф.',
		'Да, черт возьми.',
		'Аммм нет',
		'Будущее мрачное.',
		'Будущее неопределенно',
		'Я бы предпочла не говорить',
		'Какая разница?',
		'Возможно.',
		'Никогда, никогда, никогда',
		'Есть небольшой шанс.',
		'Да!',
		'Лол, нет.',
		'Существует высокая вероятность.',
		'Какая разница?',
		'Не моя забота.',
		'Попросите кого-нибудь еще.'
    ];

    let result = Math.floor((Math.random() * Ответ.length));
    let Вопрос = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setTitle("МАГИЧЕСКИЙ 8 BALL!!!")
    .setColor("#AA9900")
    .addField("Q:", Вопрос)
    .addField("A:", Ответ[result])
    .setFooter(`© Yuniko Bot от ${customisation.ownername}`);

    message.channel.send({embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: '8ball',
    description: 'Спросите что-то у Юнико(минимум 2 слова)',
    usage: '8ball (вопрос)'
  };
  