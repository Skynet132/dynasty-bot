
const discord = require('discord.js');

exports.help = {
        name: "snipe",
        aliases: [],
        description: "snipes a deleted message!"
    }
    exports.requirements = {
        clientPerms: [],
        userPerms: [],
        ownerOnly: false
    }
    exports.run = (client, message, args) => {
     const msg = client.snipes.get(message.channel.id)
        if(!msg)return message.channel.send("There are no deleted messages")
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author)
        .setDescription(msg.content)
        if(msg.image)embed.setImage(msg.image)
        message.channel.send(embed)
    }
