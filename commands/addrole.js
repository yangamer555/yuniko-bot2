const settings = require('../settings.json');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("❌**Error:** Я не имею **Manage Roles** право!");
    if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("❌**Error:** Вы не имеете **Manage Roles** право!");
    if (message.mentions.users.size === 0) return message.reply("❌Пожалуйста пинганите участника которому хотите выдать роль.\nПример: `addrole @пользовать Members`");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply("❌**Error:** Такого пользователя нет.");
    let name = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.find('name', name);
    if (!role) return message.reply(`❌**Error:** Роли с названием ${name} не существует!`);
    let botRolePosition = message.guild.member(client.user).highestRole.position;
    let rolePosition = role.position;
    let userRolePossition = message.member.highestRole.position;
    if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Невозможно выдать роль пользователю, потому что ваша роль ниже той которую вы хотите выдать.")
    if (botRolePosition <= rolePosition) return message.channel.send("❌**Error:** Не удалось добавить роль пользователю, поскольку моя самая высокая роль ниже указанной роли.");
    member.addRole(role).catch(e => {
        return message.channel.send(`❌**Error:**\n${e}`);
    });
    message.channel.send(`**${message.author.username}**, Я добавила **${name}** роль **${message.mentions.users.first().username}**.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["buff"],
  permLevel: 0
};

exports.help = {
  name: 'addrole',
  description: 'Добавляет роль.',
  usage: 'addrole [mention] [название роли, не пинг]'
};
