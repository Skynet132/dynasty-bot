const { token } = process.env;
const { prefix } = require("./config");
const { Client, Collection } = require("discord.js");
const client = new Client({
  disableMentions: "everyone"
});

client.prefix = prefix;
client.commands = new Collection();
client.aliases = new Collection();

client.on("ready", () => {
  client.user.setStatus('dnd');
  client.user.setActivity("with dynasty", {type:"PLAYING"});
});

require("./structures/command").run(client);
require("./structures/events").run(client);

const server = require('./server.js');
client.login(token); 
