const Discord = require('discord.js')
exports.help = {
    name: "vote",
    aliases: ["poll"],
    description: "Make's a vote/poll"
}

exports.requirements = {
    clientPerms: [],
    userPerms: ["ADMINISTRATOR"],
    ownerOnly: false
}
exports.run = async (client, message, args) => {
        try {
            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args.slice(0).join(" "))
            if (!channel) {
                return message.reply(`Mention or give the channel ID of where you want the vote to take place.`)
            }
            let question = args.slice(1).join(" ")
            if (!question) return message.channel.send(`You did not specify your question!`)
            const Embed = new Discord.MessageEmbed()
                .setTitle(`Vote`)
                .setDescription(`${question}`)
                .setTimestamp()
                .setFooter(`${message.author.username} created this poll.`)
                .setColor(0xE67E22)
            let msg = await client.channels.cache.get(channel.id).send(Embed)
            await msg.react("👍")
            await msg.react("👎")
        }
        catch (err) {
            console.log(err);

            message.channel.send(`Uh o looks like there is a error. The error is \`${err}\``)
        }
    }