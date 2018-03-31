const Discord = require("discord.js");
const kiri = new Discord.Client();

kiri.login("Bot token here")

//Remember to replace any guild and channel IDs with your own

kiri.on("ready", () => {
    console.log("I'm ready to go!")
        kiri.user.setActivity(`over ${kiri.guilds.get("411751251953451010").members.size} users. | @Kiri help`, {
            type: "WATCHING"
        });
})

kiri.on("guildMemberAdd", () => {
    kiri.user.setActivity(`over ${kiri.guilds.get("411751251953451010").members.size} users. | @Kiri help`, {
        type: "WATCHING"
    });
})

kiri.on("guildMemberRemove", () => {
    kiri.user.setActivity(`over ${kiri.guilds.get("411751251953451010").members.size} users. | @Kiri help`, {
        type: "WATCHING"
    });
})

const prefix = `<@${kiri.user.id}>`

kiri.on("message", message => {

    var msg = message.content.split(" ").join("")

    if(msg.toLowerCase().startsWith(prefix + "help")) {
        message.channel.send("Hello! I'm Kiri, the co-owner of Konohanatei!", {embed:
            {color: 0xf6fc58,
                title: "Kiri - Co-Owner Of Konohanatei",
                description: "`help`\nShows this message.\n`close/open`\nLock/Unlock the server."
        }})
    }

    if(msg.toLowerCase().startsWith(prefix + "close")) {
        if(message.member.hasPermission("MANAGE_CHANNELS", yes, no, no) == false) return;
        message.guild.channels.forEach(channel => {
            if(channel.parent == null) return;
            if(channel.parent.name == "Important" || channel.parent.name == "Outdoors") return;
            channel.overwritePermissions("411751251953451010", {
                READ_MESSAGES: false
            })
            channel.overwritePermissions("411751896240357377", {
                READ_MESSAGES: true
            })
        })
        message.channel.send("Successfully locked down the server.")
    }

    if(msg.toLowerCase().startsWith(prefix + "open")) {
        if(message.member.hasPermission("MANAGE_CHANNELS", yes, no, no) == false) return;
        message.guild.channels.forEach(channel => {
            if(channel.parent == null) return;
            if(channel.parent.name == "Important" || channel.parent.name == "Outdoors") return;
            if(channel.name == "staff-room") return;
            channel.overwritePermissions("411751251953451010", {
                READ_MESSAGES: true
            })
        })
        message.channel.send("Successfully opened the server back up.")
    }

    if(msge.toLowerCase().startsWith(prefix + "party")) {
        if(message.member.hasPermission("MANAGE_SERVER", yes, no, no) == false) return;
        message.guild.channels.get("411753873687183360").send("@here A party event is starting! :tada:\nSpam to your heart's content. Just remember to keep NSFW in the NSFW channel!")
    }

    if(msge.toLowerCase().startsWith(prefix + "endevent")) {
        if(message.member.hasPermission("MANAGE_SERVER", yes, no, no) == false) return;
        message.guild.channels.get("411753873687183360").send("@here Alright, calm down! The party's over, back to whatever you were doing before.")
    }
})