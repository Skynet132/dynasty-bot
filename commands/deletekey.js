const Discord = require('discord.js');
const UserUUID = uuidv4();
let fetch = require("node-fetch")
let sk = "zy758JHpWEDXtOG8nkG2T7AaVS74vz4gDMj2KI7R83zO86hjLixG5Ai41n3bKAeJ"

function q(p, cb){
    fetch(`https://nebulous-rust-measure.glitch.me/${sk}/${p}`, {method: "POST"})
		.then(x=>x.text())
		.then(cb)
}

exports.help = {
        name: "sada",
        aliases: ["r"]
    }
    exports.requirements = {
        clientPerms: [],
        userPerms: [],
        ownerOnly: false
    }
    exports.run = (client, message, args) => {

function generateRedeem(id){
  q("create_redeem?a=" + id)
}

generateRedeem(`${UserUUID}`)
    }

// wait
