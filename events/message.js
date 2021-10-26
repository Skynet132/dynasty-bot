const { owners } = require("../config");

exports.run = async (client, message) => {
    const args = message.content.split(/ +/g);
    const cmd = args.shift().slice(client.prefix.length).toLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

    if (!message.content.toLowerCase().startsWith(client.prefix) || !command || message.author.bot) return;

    if (!message.channel.permissionsFor(client.user).has("SEND_MESSAGES")) return;
    if (command.requirements.ownerOnly && !owners.includes(message.author.id)) 
        return message.reply(`you cannot run the command as you are not an owner.`);

    if (command.requirements.userPerms && !message.member.permissions.has(command.requirements.userPerms))
        return message.reply(`you are missing the permission(s): ${missingPermissions(message.member, command.requirements.userPerms)}`);

    if (command.requirements.clientPerms && !message.guild.me.permissions.has(command.requirements.clientPerms))
        return message.reply(`I am missing the permission(s): ${missingPermissions(message.guild.me, command.requirements.userPerms)}`);

    try {
        command.run(client, message, args)
    } catch(error) {    
        throw new Error(error);
    }
}

const missingPermissions = (member, permissions) => {
    const result = member.permissions.missing(permissions).map(
        str =>
            `\`${str
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/\b(\w)/g, (char) => char.toUpperCase())}\``
    );

    return result.length > 1
        ? `${result.slice(0, -1).join(", ")} and ${result.slice(-1)[0]}`
        : result[0];
}