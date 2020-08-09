const settings = require('../settings.json');
exports.run = (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply(":no_entry_sign: **Error:** Я не имею права: **Manage Roles**");
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply(":no_entry_sign: **Error:** Вы не имеете право: **Manage Roles**");
    if (message.mentions.users.size === 0) return message.reply(":no_entry_sign: Пинганите юзера чтобы удалить у него роль");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply(":no_entry_sign: **Error:** Такого юзера нет.");
    let name = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find("name", name);
    member.removeRole(role).catch(e => {
        message.channel.send(":no_entry_sign: Была допущена ошибка! Скорее всего, роль, которую вы пытаетесь убрать, выше, чем роль, которую я имею!");
    });
    message.channel.send(`:white_check_mark: **${message.author.username}**, I've removed the **${name}** role from **${message.mentions.users.first().username}**.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nerf"],
  permLevel: 0
};

exports.help = {
  name: 'removerole',
  description: 'Удаляет роль у юзера',
  usage: 'removerole'
};
