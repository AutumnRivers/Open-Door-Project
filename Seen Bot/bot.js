const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login("bot token owo");

client.on('ready',  () => {
client.user.setGame("Seen | se/count")
})

client.on('guildMemberAdd', member => {
  member.guild.channels.find("name", "verify").send(`Welcome, <@${member.id}> to the official Seen Discord server. If you are looking on how to verify, check <#295201546914758656>.`)
  })

client.on("message", (message) => {
  if (message.channel.type == 'dm') return;
  if (message.author.bot) return;
  
  const prefix = "se/";
  
  if(message.content.toLowerCase() == (message.author.discriminator + " verify")) {
  	if(message.channel.id !== (message.guild.channels.find("name", "verify").id)) return;
  	if(message.member.roles.has((message.guild.roles.find("name", "Suspicious").id)) == false) return;
  message.member.removeRole((message.guild.roles.find("name", "Suspicious").id))
  message.author.send("You have been verified in the official Seen Community Discord. Please remember to regularly check on the rules, and respect the staff members.")
  }
  
  if(message.content.toLowerCase() == (prefix + "count")) {
  	message.channel.send(`${message.guild.name} has ${message.guild.members.size} members!`)
  }
  
})