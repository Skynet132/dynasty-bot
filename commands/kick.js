const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
exports.help = {
    name: "kick",
    aliases: ["boot", "k"],
    description: "kicks a member from the guild"
}

exports.requirements = {
    clientPerms: ["KICK_MEMBERS"],
    userPerms: ["KICK_MEMBERS"],
    ownerOnly: false
}
exports.run = async (client, message, args) => {

        const kickUser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ")

        if (message.mentions.users.size < 1) return message.reply("You didn't provide a user to kick!");

        if(reason === "") {reason = "N/A";}

        const b = new MessageEmbed()
            .setAuthor(`${kickUser.user.tag}`)
            .addFields({
                name: `Kicked member`,
                value: `${kickUser.user.tag}`,
                inline: true
            }, {
                name: "Kicked by:",
                value: `${message.author.tag}`,
                inline: true
            }, {
                name: "Reason",
                value: `${reason}`,
                inline: true
            }, {
                name: "Date of punishment",
                value: message.createdAt.toLocaleString()
            }, )
            .setThumbnail(kickUser.user.displayAvatarURL())
            .setColor("#008b8b");

        message.channel.send(b);

        await kickUser.send({
            embed: {
                title: `Dear ${kickUser.user.tag}`,
                description: `You have been kicked from ${message.guild.name}\n \nKicked by: \n \n${message.author.tag} \n \nReason: ${reason}\n \nDate of ban: ${message.createdAt.toLocaleString()}`,
                color: `#008b8b`
            }
        }).then(async () => {
            kickUser.kick(kickUser.id).catch(err => {
                console.log(err);
            });
        });
    }
