exports.run = (client, message) => {
    let args = message.content.split(" ").slice(1);
    message.delete();
    message.channel.send(args.join(" "));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "say",
    description: "Заставьте бота, повторить свое сообщение.",
    usage: "say [message]"
};
