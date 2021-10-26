const rollDice = () => Math.floor(Math.random() * 6) + 1;
const Discord = require('discord.js');

exports.help = {
        name: "roll",
        aliases: ["r"]
    }
    exports.requirements = {
        clientPerms: [],
        userPerms: [],
        ownerOnly: false
    }
    exports.run = (client, message, args) => {
        var botrolled = Math.round(Math.random() * 6)
        var yourolled = Math.round(Math.random() * 6)
        const wonbed = new Discord.MessageEmbed()
            .setTitle('You Won!')
            .setImage(message.guild.iconURL)

            .addField("Your Number: ", `${yourolled}`)
            .addField("Bots Number: ", `${botrolled}`)
            .setColor(0x1aff00)
            .setFooter("You Won!")

        const losbed = new Discord.MessageEmbed()
            .setTitle('You Lost!')
            .setImage(message.guild.iconURL)

            .addField("Your Number: ", `${yourolled}`)
            .addField("Bots Number: ", `${botrolled}`)
            .setColor(0xff0000)
            .setFooter("You Lost!")
        if (botrolled > yourolled) {
            message.channel.send(losbed)

        }
        else if (yourolled > botrolled) {
            message.channel.send(wonbed)
        }
    }

