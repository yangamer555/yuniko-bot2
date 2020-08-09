let rps = ["**:moyai: камень**", "**:pencil: бумага**", "**:scissors: ножницы**"];
function random() { return `${rps[Math.floor(Math.random() * rps.length)]}!` }
exports.run = (client, msg, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("Пожалуйста выберите камень, ножиницы или бумагу.");
    if (choice !== "камень" && choice !== "бумага" && choice !== "ножницы") return msg.reply(`Пожалуйста выберите камень, ножницы или бумагу ${choice}:P`);
    msg.reply(random());
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rps',
  description: 'Камень, ножницы, бумага.',
  usage: 'rps'
};
