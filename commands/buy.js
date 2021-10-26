const Discord = require('discord.js')

exports.help = {
    name: "buy",
    aliases: [],
    description: "Gives the link of the shoppy"
}

exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: false
}
exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setColor(`PURPLE`)
      .setDescription("This command sends you basic information on how you buy Dynasty!\n")
      .addField("**How To Buy:**", "[Click Me!](https://shoppy.gg/product/ZLqRk7H)")
      .setFooter("Requested by: " + message.author.username, message.author.displayAvatarURL())
      .setThumbnail("https://cdn.discordapp.com/icons/759049762686107649/dea6bb925dea17598affc68f44fedc1b.webp?size=1024")
    message.channel.send(embed)
}



