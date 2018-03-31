const discord = require("discord.js");
const wb = new discord.Client();
const webHook = new discord.WebhookClient("webhook id", "webhook token");
wb.login("bot token");
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

wb.on("ready", () => {
console.log("Ready!");
wb.user.setStatus("invisible");
});

let prefix = "wb!";

wb.on("message", (message) => {
    if(message.author.id !== "your ID") return;
    let args = message.content.split(" ").slice(1).join(" ");
        if(message.content.toLowerCase().startsWith(prefix + "bigping")) {
            webHook.send("@everyone " + args);
            console.log("sent!")
        }
        else if (message.content.toLowerCase().startsWith(prefix + "here")) {
            webHook.send("@here " + args)
            console.log("sent!");
        }
        else if (message.content.toLowerCase().startsWith(prefix + "memping")) {
            webHook.send("<@ROLEID> " + args)
            console.log("sent!")
        }
   else if (message.content.toLowerCase().startsWith(prefix + "pong")) {
            webHook.send("ping")
    
        }
});

console.log("working")