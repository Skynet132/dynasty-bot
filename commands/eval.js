const { owners } = require('../config.json')
const { inspect } = require("util");

exports.help = {
    name: "eval",
    description: "Evaluates js code",
    aliases: ["e"],
}
exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: true
}

exports.run = async (client, message, args) => {
    try {
        let toEval = args.join(" ")
        let evaluated = inspect(eval(toEval, { depth: 0 }));
        
        if (!toEval) {
            return message.channel.send(`Error while evaluating: \`air\``);
        } else {
            let hrStart = process.hrtime()
            let hrDiff; 
            hrDiff = process.hrtime(hrStart);
            return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
        }
        
    } catch (e) {
        return message.channel.send(`Error while evaluating: \`${e.message}\``);
    }
}