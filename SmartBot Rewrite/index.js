//Everything SmartBot needs
const Discord = require("discord.js");
new (require('discord.js')).Client({disableEveryone: true});
  var eightball = require("eightball");
  var predict = require('eightball');
var Raven = require('raven'); 
Raven.config('me too thanks').install();
  const client = new Discord.Client();
const cheerio = require('cheerio'),
     snekfetch = require('snekfetch'),
      querystring = require('querystring');
const config = require("./config.json");
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
  
  client.login(config.token);
  
var nextCounter = 0
  
  client.on('ready', () => {
    console.log('I am ready!');
  client.user.setPresence({ game: { name: 'sb>help | Currently in ' + client.guilds.size + ' servers!', type: 0} })
  });
  
  client.on('guildCreate', guild => {
const guildEnt = guild
  	client.user.setGame(`sb>help | Currently in ${client.guilds.size} servers!`)
client.guilds.get(config.smartg).channels.get("374386614182608907").send("I have entered **" + guildEnt.name + "**. I'm sure happy to be there!\n\n" + guildEnt.id)
  });
            
            
  client.on('guildDelete', guild => {
var guildEnt = guild
  	client.user.setGame(`sb>help | Currently in ${client.guilds.size} servers!`)
client.guilds.get(config.smartg).channels.get("374386614182608907").send("I have left " + guildEnt.name + ". I wonder why. :thinking:")
});
  
  client.on("error", (e) => console.error(e));

  client.on("message", (message) => {
    client.options.disableEveryone
    //Blocking DM commands will prove very useful, especially when it comes to moderation features.
    //Discord bots cannot do mod commands in DM, so, block em!
  if (message.channel.type == 'dm') return;
  if (message.author.bot) return;
    /*Block these people
    they're known for fucking with SmartBot
    */
    if(message.author.id == "212952781454049290") return;
    if(message.author.id == "292758278918897664") return;
    const altfix = "sb>"
    const args = message.content.split(" ").slice(1)
    const args2 = message.content.split(" ").slice(2).join(" ");

    if (message.content == (config.prefix + "ping") || message.content == (altfix + "ping")) {
      message.channel.send("Connecting to Smartie's shitty servers...").then(msg => {
      msg.edit(`Pong! \`${msg.createdTimestamp - message.createdTimestamp}\` ms`);
      })}
  
if (message.content.toLowerCase() == (config.prefix + "help") || message.content.toLowerCase() == (altfix + "help")) {
		if (message.guild.me.hasPermission("EMBED_LINKS") == false) return message.channel.send("ping = pong!\n help = what do you think\n embed = Custom embeds!\n sauce = ***L O C A T E D***\n b4nzy = bam\n info = What *is* SmartBot?\n website = A link to SmartBot's official website\n updates = What's new, ~~Scooby Doo?~~ SmartBot?\n**No prefix commands**\n ok google = ok google what is smartbot\n plumbus) = how they do it copypasta\n @SmartBot = 8ball\n **Moderation Commands**\n kick = Gift somebody a boot :>\n ban = The power of the banhammer is in your hands.\n nickname = change the bot's nickname\n purge = get those messages out of here\n**Other Commands**\n suggest = add some shit, smartie\n log = send a message to Smartie's console\n__Note__: I dont have the embed links permission. Help extensions, along with certain other commands, are broken in this case. Please contact a server admin.");
  	        message.channel.send("", {embed: {color: 3447003, title: "SmartBot Help", description: "ping = pong!\n help = what do you think\n embed = Custom embeds!\n sauce = ***L O C A T E D***\n b4nzy = bam\n info = What *is* SmartBot?\n website = A link to SmartBot's official website\n updates = What's new, ~~Scooby Doo?~~ SmartBot?\n**No prefix commands**\n ok google = ok google what is smartbot\n plumbus) = how they do it copypasta\n @SmartBot = 8ball\n **Moderation Commands**\n kick = Gift somebody a boot :>\n ban = The power of the banhammer is in your hands.\n nickname = change the bot's nickname\n purge = get those messages out of here\n**Other Commands**\n suggest = add some shit, smartie\n addel = Get the list of construction commands",
  footer: {
  icon_url: client.user.avatarURL,
  text: 'SmartBot, made by SmartiePlays#5434'}}});
  } else if (message.content.toLowerCase() == (config.prefix + "help ping") || message.content.toLowerCase() == (altfix + "help ping")) {
    message.channel.send("", {embed: {color: 0xffffff, description: "```\nping\n```\nPing SmartBot to see if it's alive, and its response time."}});
  } else if (message.content.toLowerCase() == (config.prefix + "help embed") || message.content.toLowerCase() == (altfix + "help embed")) {
    message.channel.send("", {embed: {color: 0x7fffd4, description: "```\nembed\n```\nIt's like a `say` command, but better... because it's an embed!\n`Arguments`\nsb>embed {hex color} | {content}"}});
  } else if (message.content.toLowerCase() == (config.prefix + "help info") || message.content.toLowerCase() == (altfix + "help info")) {
    message.channel.send("", {embed: {color: 0x2f4f4f, description: "```\ninfo\n```\nGet to know more about SmartBot!"}});
  } else if (message.content.toLowerCase() == (config.prefix + "help ok google") || message.content.toLowerCase() == (altfix + "help ok google")) {
    message.channel.send("", {embed: {color: 0x7fff00, description: "```\nok google\n```\nSearch the web with Google.\n`Arguments`\nok google {search term}"}});
  } else if (message.content.toLowerCase() == (config.prefix + "help 8ball") || message.content.toLowerCase() == (altfix + "help 8ball")) {
    message.channel.send("", {embed: {color: 0x3c006a, description: "```\n@SmartBot aka 8ball\n```\nGet an answer from the magical 8ball :8ball:\n`Arguments`\n@SmartBot {question (optional)}"}});
  } else if (message.content.toLowerCase() == (config.prefix + "help kick") || message.content.toLowerCase() == (altfix + "help kick")) {
    message.channel.send("", {embed: {color: 0xff0000, description: "```\nkick\n```\nKick a user.\n**Requirements**\nKICK_MEMBERS permission is required.\nSmartBot must have the KICK_MEMBERS permission.\n`Arguments`\nsb>kick @mention {reason}"}});
  } else if (message.content.toLowerCase() == (config.prefix + "help ban") || message.content.toLowerCase() == (altfix + "help ban")) {
    message.channel.send("", {embed: {color: 0xff0000, description: "```\nban\n```\nBan a user.\n**Requirements**\nBAN_MEMBERS permission is required.\nSmartBot must have the BAN_MEMBERS permission.\n`Arguments`\nsb>ban @mention {reason}"}});
  } else if (message.content.toLowerCase() == (config.prefix + "help channel") || message.content.toLowerCase() == (altfix + "help channel")) {
    message.channel.send("", {embed: {color: 0xff8b00, description: "```\nchannel\n```\nCreate a channel\n**Requirements**\nMANAGE_CHANNELS permission is required.\nSmartBot must have the MANAGE_CHANNELS permission.\n`Arguments`\nsb>channel {type (text or voice)} {name}"}});
    } else if (message.content.toLowerCase() == (config.prefix + "help nickname") || message.content.toLowerCase() == (altfix + "help nickname")) {
    message.channel.send("", {embed: {color: 0xff8b00, description: "```\nnickname\n```\nChange the bot's nickname.\n**Requirements**\nMANAGE_NICKNAMES permission is required.\nSmartBot must have the CHANGE_NICKNAME permission.\n`Arguments`\nsb>nickname {nickname}"}});
    } else if (message.content.toLowerCase() == (config.prefix + "help emoji") || message.content.toLowerCase() == (altfix + "help emoji")) {
    message.channel.send("", {embed: {color: 0xff8b00, description: "```\nemoji```\nCreate an emoji for your guild.\n**Requirements**\nMANAGE_EMOJIS permission is required.\nSmartBot must have the MANAGE_EMOJIS permission.\n`Arguments`\nsb>emoji {emoji name} <Attachment Required>"}});
  } else if (message.content.toLowerCase() == (config.prefix + "help purge") || message.content.toLowerCase() == (altfix + "help purge")) {
    message.channel.send("", {embed: {color: 0xff0000, description: "```\npurge\n```\nDelete the last `x` messages in a channel.\n**Requirements**\nMANAGE_MESSAGES permission is required.\nSmartBot must have the MANAGE_MESSAGES permission.\n`Arguments`\nsb>purge {# of messages || @mention}"}});
}
  
  if (message.content == (config.prefix + "website") || message.content == (altfix + "website")) {
    message.channel.send("", {embed: {color: 3447003, title: "SmartBot Official Website", description: "[Click here!](https://smartsite.glitch.me/smartbot)",
  }});
  };
  
  if (message.content.toLowerCase().startsWith(config.prefix + "embed") || message.content.toLowerCase().startsWith(altfix + "embed")) {
    //To find the color of the embed you want to use, use this site: https://cog-creators.github.io/discord-embed-sandbox/
    const desc = message.content.split("| ").slice(1)
	message.channel.send("", {embed: { color: parseInt((message.content.split(" ").slice(1)).slice("|", -1)), description: desc.toString()}})
  };
  
  if (message.content.toLowerCase() == (config.prefix + "sauce") || message.content.toLowerCase() == (altfix + "sauce")) {
  message.channel.send("", {
	file: "http://i3.kym-cdn.com/entries/icons/original/000/021/937/kQOXJBTJE37zygYg2OJ9rH-fw4qfSVHIW3SyrrI_hAY.jpg"
   })};
 
  if (message.content.toLowerCase().startsWith(config.prefix + "gameset") || message.content.toLowerCase().startsWith(altfix + "gameset")) {
      if (message.author.id !== '374245143655612428') return;
	client.user.setPresence({ game: { name: (args) , type: 0} });
  };
  
  if (message.content.toLowerCase() == (config.prefix + "b4nzy") || message.content == (altfix + "b4nzy")) {
  message.channel.send("", {
  file: "https://cdn.discordapp.com/attachments/312328622293909504/312995166598332416/b4nzy.gif"
  })};
  
    if (message.content.toLowerCase().startsWith(config.prefix + "kick") || message.content.toLowerCase().startsWith(altfix + "kick")) {
      //Checks if the message author can kick people
      if(message.member.hasPermission("KICK_MEMBERS", true, true, true)) {
	const member = message.mentions.members.first();
if(!member) return message.reply("Please mention someone!");
if(!member.kickable) return message.reply("I can't kick this person!");
member.kick(args2).then(message.reply("They have been given the boot.")).catch(console.error);
      console.log('Somebody was gifted a boot :>');
  } else {
      message.reply("", {embed: { color: 15158332, title: "Kick unsuccessful.", description: "You do not have the ability to kick members in this guild."}});
  }};
  
    if (message.content.startsWith(config.prefix + "ban") || message.content.startsWith(altfix + "ban")) {
      //Checks if the message author can ban people
      if(message.member.hasPermission("BAN_MEMBERS", true, true, true)) {
	const member = message.mentions.members.first();
if(!member) return message.reply("Please mention someone!");
if(!member.bannable) return message.reply("I can't ban this person!");
member.ban(args2).then(message.reply("That user has been banned.")).catch(console.error);
      console.log('A banhammer crashed into somebody, somewhere...');
  } else {
      message.reply("", {embed: { color: 15158332, title: "Ban unsuccessful.", description: "You do not have the ability to ban members in this guild."}});
  }};
 
  if (message.content.toLowerCase().startsWith("plumbus)")) {
  message.channel.send("Everyone has a plumbus in their home.n First they take the dingle bop and they smooth it out with a bunch of schleem. The schleem is then...repurposed for later batches. They take the dingle bop and they push it through the grumbo, where the fleeb is rubbed against it.n It's important that the fleeb is rubbed, becasue the fleeb has all the fleeb juice. Then, a schlami shows up, and he rubs it...and spits on it.n They cut the fleeb. There's several hizzards in the way. The blamfs rub against the chumbles, and the...plubis, and grumbo are shaved away.n n That leaves you with...a regular old plumbus.");
  };
  
  if (message.content.toLowerCase().startsWith("<@312357249085472788>") || message.content.toLowerCase().startsWith("<@!312357249085472788>")) {
    //8ball
  message.channel.send(predict());
  };
  
  if (message.content.toLowerCase().startsWith(config.prefix + "nickname") || message.content.toLowerCase().startsWith(altfix + "nickname")) {
  if (message.author.id == '374245143655612428') {
  message.guild.members.get(client.user.id).setNickname(args.join(' '));
  } else if(message.member.hasPermission("MANAGE_NICKNAMES", true, true, true)) {
  message.guild.members.get(client.user.id).setNickname(message.content.split('').splice(11).join(''));
  } else {
      message.reply("", {embed: { color: 15158332, title: "Bot nickname change unsuccessful.", description: "You do not have the ability to change nicknames in this guild."}});
  }};
  
  if (message.content.toLowerCase() == (config.prefix + "fidget") || message.content.toLowerCase() == (altfix + "fidget")) {
  message.channel.send("<:fidget_doggo:334384959311708181>");
  };

if (message.content.toLowerCase().startsWith(config.prefix + "announce") || message.content.toLowerCase().startsWith(altfix + "announce")) {
if (message.author.id !== '374245143655612428') return;
message.guild.channels.get('380880441101647872').send(args.join(' '));
};

  if (message.content.toLowerCase().startsWith("ok google")) {
    if(message.guild.id !== "298915467551309824" && message.guild.id !== "400346481933942784") return;
let searchMessage = message.reply('Searching... Sec.');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.content.split('').splice(10).join(''))}`;
return snekfetch.get(searchUrl).then((result) => {
let $ = cheerio.load(result.text);
 let googleData = $('.r').first().find('a').first().attr('href');
      googleData = querystring.parse(googleData.replace('/url?', ''));
      message.channel.send(`Result found!\n${googleData.q}`);
 }).catch((err) => {
     message.channel.send('No results found!');
  });
}

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

if (message.content.toLowerCase().startsWith(config.prefix + "eval") || message.content.toLowerCase().startsWith(altfix + "eval")) {
if(message.author.id !== config.ownerID) return;
const args = message.content.split(" ").slice(1);
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
;

if (message.content.toLowerCase().startsWith(config.prefix + "purge") || message.content.toLowerCase().startsWith(altfix + "purge")) {
if(message.member.hasPermission("MANAGE_MESSAGES", true, true, true)) {
const user = message.mentions.users.first();
  if (message.content.split('').splice(8).join('') >= 99) {
    (message.reply("The value must be less than 99!"))
  } 
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
message.channel.fetchMessages({
 limit: amount + 1,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
} else {
return;
}};

if (message.content.toLowerCase().startsWith(config.prefix + "suggest") || message.content.toLowerCase().startsWith(altfix + "suggest")) {
client.guilds.get(config.smartg).channels.get(config.bugsend).send((message.guild.name + "\n" + message.author.username + "#" + message.author.discriminator + " suggested:\n\n" + args.join(" ")), {
                                                                  disableEveryone: true
                                                                  }).catch(error => console.log(error.stack));
message.reply("Your suggestion was successfully sent! Smartie should see it in no time!\nThank you for helping make SmartBot better :smile:");
}

if (message.content.toLowerCase().startsWith(config.prefix + "log") || message.content.toLowerCase().startsWith(altfix + "log")) {
console.log((message.guild.name + "\n" + message.author.username + "#" + message.author.discriminator + " reported:\n\n" + message.content.split('').splice(5).join('')));
}
    
if (message.content.toLowerCase() == (config.prefix + "info") || message.content.toLowerCase() == (altfix + "info")) {
    message.channel.send("", {embed: { color: 0x0600ff, title: "SmartBot - A Multipurpose Discord Bot!", description: "SmartBot is a multipurpose Discord bot built upon [discord.js](https:/\/discord.js.org/#/).\n\nSmartBot can do multiple things in your Discord guild, from custom embeds, to moderation!\n\n<:fun:366387230534664202> Have some fun with memes, an 8ball, google search, and more!\n\n<:moderate:366387276776734730> Moderate your server with kicking, banning, and purge commands!\n\n<:help:366389299874365440> Find out more about what SmartBot can do with the `sb>help` command, and stay up to date on SmartBot's newest updates by joining the [support server](https:/\/discord.gg/P5YzHBD)\nOr by watching [the GitHub repo](https:/\/github.com/SmartieYT/SmartBot).\n\n<:enjoy:366387954391711744> Now that you know what SmartBot is for, go have fun with it!"}})
  }
    
if (message.content.toLowerCase() == (config.prefix + "invite") || message.content == (altfix + "invite")) {
    message.channel.send("https://discordbots.org/bot/312357249085472788\n\nHaving trouble? Need help? Join the support server!\nhttps://discord.gg/P5YzHBD");
  }
    
if(message.content.toLowerCase() == (config.prefix + "updates") || message.content.toLowerCase() == (altfix + "updates")) {
  //grabs the latest update from the support server
  var rg = message.guild.id
  var rc = message.channel.id
  client.guilds.get('312328622293909504').channels.get('314512327611514890').fetchMessage(client.guilds.get('312328622293909504').channels.get('314512327611514890').lastMessageID)
  .then(message => client.guilds.get(rg).channels.get(rc).send(message.content))
  .catch(console.error)
}
    
    if (message.content.toLowerCase().startsWith(config.prefix + "avatarset") || message.content.toLowerCase().startsWith(altfix + "avatarset")) {
      if (message.author.id !== '374245143655612428') return;
      if(message.attachments.first() == undefined) {
        message.reply("You need to add an attachment! (Remember, URLs don't work!)")
      } else {
client.user.setAvatar(message.attachments.first().url)
  }};
    
    if (message.content.toLowerCase().startsWith(config.prefix + "statusset") || message.content.toLowerCase().startsWith(altfix + "statusset")) {
      if (message.author.id !== '374245143655612428') return;
      if (message.content.toLowerCase().split('statusset').splice(1).join('') == (" 1")) {
         client.user.setStatus("dnd")
    } else if (message.content.toLowerCase().split('statusset').splice(1).join('') == (" 2")) {
         client.user.setStatus("idle")
    } else if (message.content.toLowerCase().split('statusset').splice(1).join('') == (" 3")) {
         client.user.setStatus("online")
    } else if (message.content.toLowerCase().split('statusset').splice(1).join('') == (" 4")) {
         client.user.setStatus("invisible")
    } else {
      message.reply("Invalid status! Remember:\n\n```\n1 - Sets me as DND\n2 - Sets me as idle\n3 - Sets me as online\n4 - Sets me as invisible\n```")
    }}
    
    if (message.content.toLowerCase().startsWith(altfix + "channel")) {
    	if(message.guild.me.hasPermission("MANAGE_CHANNELS") == false) {
    	message.channel.send("", {embed: {color: 15158332, title: "Channel Creation Unsuccessful", description: "I do not have the ability to manage channels in this guild. Please contact a server admin!"}})
    	} else if(message.member.hasPermission("MANAGE_CHANNELS") == false) {
    	message.channel.send("", {embed: {color: 15158332, title: "Channel Creation Unsuccessful", description: "You do not have the ability to manage channels in this guild."}})
    	} else {
         if(args == "") return message.reply("is it supposed to be a text channel? A voice channel? I need to know!");
      if(args2 == "") return message.reply("blank channel name? Sorry, I can't do that.");
       if(args[0] !== 'text' && args[0] !== 'voice') return message.reply("what? You can't make that type of channel!")
         message.guild.createChannel(args2, args[0])
.then(channel => message.channel.send("Channel creation successful!\n<#" + channel.id + ">"))
.catch(error => message.channel.send("Yep, that's an error. Please report this to Smartie!\n```\n" + error + "\n```"))}}
         
         if(message.content.toLowerCase().startsWith(altfix + "emoji")) {
         	if(message.guild.me.hasPermission("MANAGE_EMOJIS") == false) return message.channel.send("", {embed: {color: 15158332, title: "Emoji Creation Unsuccessful", description: "I do not have the ability to manage emojis in this guild! Please contact a server admin."}});
         if(message.member.hasPermission("MANAGE_EMOJIS") == false) return message.channel.send("", {embed: {color: 15158332, title: "Emoji Creation Unsuccessful", description: "You do not have the ability to manage emojis in this guild."}});
         const img = message.attachments.first()
         if(!img) return message.reply("you need to attach an image! If you tried a URL, it won't work. Adding by URL will be added in a future update.");
         if(!args) return message.reply("come on! Everything needs a name, including emoji!");
     message.guild.createEmoji(img.url, args.join("")).then(emoji => message.channel.send("Emoji successfully created!"))
         .catch(error => message.channel.send("Yep, that's an error. Please report this to Smartie!\n```\n" + error + "\n```"))}
  
  if(message.content.toLowerCase().startsWith(config.prefix + "delch")) {
      const chid = args[0];
      const ch2 = message.mentions.channels.first();
      if(message.member.hasPermission("MANAGE_CHANNELS") == false) return message.channel.send("", {embed: {color: 15158332, title: "Channel Deletion Unsuccessful", description: "You do not have the ability to manage channels in this guild!"}});
      if(message.guild.me.hasPermission("MANAGE_CHANNELS") == false) return message.channel.send("", {embed: {color: 15158332, title: "Channel Deletion Unsuccessful", description: "I do not have the ability to manage channels in this guild! Please contact a server admin."}});
  if(!args) return message.channel.send(message.author.username + ", you want me to delete nothing?\n```\nHint: Try This!\nsb>delch {channel id}\nOR\nsb>delch #channel\n```");
  if(!ch2) {
  	message.guild.channels.get(ch2.id).delete()
  .then(message.channel.send("Successfully deleted text channel."))
  .catch(error => message.channel.send("Yep, that's an error. Please report this to Smartie!\n```" + error + "\n```"));
  if(chid == undefined) return message.reply("I need to know the id of the channel!");
  } else {
  message.guild.channels.get(chid).delete()
  .then(channel => message.channel.send(channel.name + " was successfully deleted."))
  .catch(error => message.channel.send("Yep, that's an error. Please report this to Smartie!\n```\n" + error + "\n```"))
  }}
  
  if(message.content.toLowerCase().startsWith(config.prefix + "edel")) {
  	const emojid = args[0];
  if(message.member.hasPermission("MANAGE_EMOJIS") == false) return message.channel.send("", {embed: {color: 15158332, title: "Emoji Deletion Unsuccessful", description: "You do not have the ability to manage emojis in this guild!"}});
      if(message.guild.me.hasPermission("MANAGE_EMOJIS") == false) return message.channel.send("", {embed: {color: 15158332, title: "Emoji Deletion Unsuccessful", description: "I do not have the ability to manage emojis in this guild! Please contact a server admin."}});
  if(!args) return message.reply("I need to know what to delete!")
  if(message.guild.emojis.get(emojid) == undefined) return message.reply("that is not a valid Emoji ID! You cannot use the emoji itself. You can find its ID by doing \`:emoji:\`");
  message.guild.deleteEmoji(message.guild.emojis.get(emojid))
  .then(message.channel.send("Emoji successfully deleted."))
  .catch(error => message.channel.send("Yep, that's an error. Please report this to Smartie!\n```\n" + error + "\n```"))
  }
  //sb>eval message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS")
  if(message.content.toLowerCase().startsWith(config.prefix + "webhook")) {
  if(message.channel.permissionsFor(message.member).has("MANAGE_WEBHOOKS") == false) return message.channel.send("", {embed: {color: 15158332, title: "Webhook Creation Unsuccessful", description: "You do not have the ability to manage webhooks in this channel. Maybe try another one?"}});
  if(message.channel.permissionsFor(message.guild.me).has("MANAGE_WEBHOOKS") == false) return message.channel.send("", {embed: {color: 15158332, title: "Webhook Creation Unsuccessful", description: "I do not have the ability to manage webhooks in this channel. Try a different channel, or contact a server admin."}});
  const wbnm = args.join(" ");
  if(wbnm == "") return message.reply("you have to give the webhook a name!");
  message.channel.createWebhook(wbnm, 'https://vignette.wikia.nocookie.net/uncyclopedia/images/8/89/Space.JPG/revision/latest?cb=20070627044244')
    .then(wb => message.author.send(`Here is the webhook link, dont share this with members you dont trust! https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`))
  .catch(error => message.channel.send("Yep, that's an error. Please report this to Smartie!\n```\n" + error + "\n```"));
  }
  //List of construction commands
  if(message.content.toLowerCase() == (config.prefix + "addel")) {
  	message.channel.send("", {embed: 
{color: 3447003,
title: "Construction Commands",
description: "**channel** - Create a channel\n**Required:** Both bot and user must have manage channel perms.\n```\nsb>channel {text/voice} {name}\n```\n**emoji** - add an emoji\n**Required:** Both bot and user must have manage emoji perms.\n```\nsb>emoji {name} <Attachment Required>\n```\n**delch** - Delete a channel\nSame requirements as `channel`\n```\nsb>delch {channel id} OR sb>delch #channel\n```\n**edel** - Delete an emoji\nSame requirements as `emoji`\n```\nsb>edel {emoji ID}\n```\n**webhook** - Create a webhook\n**Required:** Both bot and user must have manage webhooks perm in the channel.\n```\nsb>webhook {name} (avatar is already set)\n```"}})
}
});
