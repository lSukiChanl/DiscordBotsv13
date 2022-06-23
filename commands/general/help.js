module.exports = {
    name: "help",
    aliases: ["ayuda"],
    description:"Comando Principal Help/Ayuda",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;

            if (message.channel.nsfw === true) {
                message.delete().catch(error =>
                    message.reply(({embed: {
                        color: 15158332,
                        description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
                    }})
                    )
                );    
                let embed = new discord.MessageEmbed()
                    embed.setColor('#D57DC1')
                    embed.setAuthor("✨ ¿𝐍𝐞𝐜𝐞𝐬𝐢𝐭𝐚𝐬 𝐀𝐲𝐮𝐝𝐚? "+message.author.username+" ✨" + 
                        "\n 𝐕𝐢𝐬𝐢𝐭𝐚 𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 : https://discord.gg/BRq5QGw", message.author.avatarURL)
                    embed.setDescription(' 🖤 💜 ❤ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐁𝐨𝐭 ❤ 💜 🖤 ')
                    embed.setTitle("🎀 🎀 🎀 🎀 𝐏𝐚𝐠𝐢𝐧𝐚 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 🎀 🎀 🎀 🎀")
                    embed.setThumbnail("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/MenheraAngel001.png")
                    embed.addField(" 💖 𝐌𝐚𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💖 ", " " +
                        "\n 𝐇𝐞𝐥𝐩 = 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐌𝐢𝐬 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 " +
                        "\n 𝐒𝐚𝐲 = 𝐄𝐬𝐜𝐫𝐢𝐛𝐢𝐫é 𝐞𝐧 𝐭𝐮 𝐋𝐮𝐠𝐚𝐫 " +
                        "\n 𝐈𝐧𝐟𝐨 = 𝐌𝐨𝐬𝐭𝐫𝐚𝐫𝐞 𝐥𝐚 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧 𝐝𝐞 𝐮𝐧 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 " +
                        "\n 𝐀𝐯𝐚𝐭𝐚𝐫 = 𝐌𝐨𝐬𝐭𝐫𝐚𝐫𝐞 𝐞𝐥 𝐀𝐯𝐚𝐭𝐚𝐫 𝐝𝐞 𝐮𝐧 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 " +
                        "\n 𝐑𝐚𝐝𝐢𝐨𝐀𝐧𝐢𝐦𝐞 = 𝐏𝐮𝐞𝐝𝐞𝐬 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐢𝐫 𝐮𝐧𝐚 𝐑𝐚𝐝𝐢𝐨 𝐀𝐧𝐢𝐦𝐞 𝟕/𝟐𝟒 " +
                        "\n 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 = 𝐒𝐨𝐫𝐩𝐫𝐞𝐬𝐚 𝐎𝐰𝐎 " +
                        "\n 𝐌𝐞𝐧𝐡𝐞𝐫𝐚 = 𝐈𝐦𝐚𝐠𝐞𝐧 𝐑𝐚𝐧𝐝𝐨𝐦 𝐝𝐞 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐂𝐡𝐚𝐧 " +
                        "\n 𝐌𝐞𝐦𝐞 = 𝐏𝐨𝐧𝐝𝐫𝐞 𝐮𝐧 𝐌𝐞𝐦𝐞 𝐀𝐥𝐞𝐚𝐭𝐨𝐫𝐢𝐨 " +
                        "\n 𝐔𝐑𝐋 = 𝐄𝐧𝐯𝐢𝐚𝐫𝐞 𝐮𝐧𝐚 𝐈𝐦𝐚𝐠𝐞𝐧 𝐏𝐨𝐫 𝐓𝐢 " +
                        "\n 𝐒𝐞𝐫𝐯𝐞𝐫 = 𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐝𝐞 𝐌𝐞𝐧𝐡𝐞𝐫𝐚 " +
                        "\n 𝐃𝐨𝐧𝐚𝐭𝐞 = 𝐏𝐮𝐞𝐝𝐞𝐬 𝐃𝐨𝐧𝐚𝐫𝐦𝐞 𝐏𝐚𝐫𝐚 𝐒𝐞𝐠𝐮𝐢𝐫 𝐀𝐩𝐨𝐲𝐚𝐧𝐝𝐨𝐦𝐞 " +
                        "\n 𝐕𝐨𝐭𝐞 = 𝐕𝐨𝐭𝐚 𝐏𝐨𝐫 𝐦𝐢 𝐏𝐨𝐫 𝐅𝐚𝐯𝐨𝐫 " );
                    embed.addField(" 💚 𝐈𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐨𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💚 ", " " +
                        "\n 𝐁𝐚𝐤𝐚, 𝐁𝐢𝐫𝐭𝐡𝐃𝐚𝐲, 𝐁𝐢𝐭𝐞, 𝐂𝐡𝐞𝐞𝐤𝐬, 𝐂𝐥𝐚𝐩, 𝐂𝐮𝐝𝐝𝐥𝐞, 𝐅𝐞𝐞𝐝  " +
                        "\n 𝐇𝐚𝐡𝐚, 𝐇𝐚𝐧𝐝𝐇𝐨𝐥𝐝𝐢𝐧𝐠, 𝐇𝐢, 𝐇𝐢𝐠𝐡𝐅𝐢𝐯𝐞, 𝐇𝐮𝐠, 𝐊𝐢𝐜𝐤, 𝐊𝐢𝐥𝐥 " +
                        "\n 𝐊𝐢𝐬𝐬, 𝐋𝐚𝐮𝐠𝐡, 𝐋𝐢𝐜𝐤, 𝐋𝐨𝐯𝐞, 𝐏𝐚𝐭, 𝐏𝐨𝐤𝐞, 𝐏𝐮𝐧𝐜𝐡, 𝐑𝐞𝐯𝐢𝐯𝐞 " +
                        "\n 𝐒𝐜𝐚𝐫𝐞𝐝, 𝐒𝐥𝐚𝐩, 𝐒𝐩𝐢𝐭, 𝐒𝐩𝐥𝐚𝐬𝐡, 𝐒𝐩𝐫𝐚𝐲, 𝐒𝐩𝐲, 𝐓𝐡𝐚𝐧𝐤𝐬   " +
                        "\n 𝐓𝐢𝐜𝐤𝐥𝐞, 𝐖𝐚𝐬𝐭𝐞𝐝 " );
                    embed.addField(" 💚 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💚 ", " " +
                        "\n 𝐀𝐧𝐠𝐫𝐲, 𝐁𝐚𝐧𝐠𝐇𝐞𝐚𝐝, 𝐁𝐥𝐮𝐬𝐡, 𝐁𝐨𝐨𝐦, 𝐁𝐨𝐫𝐞𝐝, 𝐂𝐨𝐧𝐟𝐮𝐬𝐞𝐝  " +
                        "\n 𝐂𝐨𝐨𝐤, 𝐂𝐫𝐲, 𝐃𝐚𝐛, 𝐃𝐚𝐧𝐜𝐞, 𝐃𝐢𝐬𝐠𝐮𝐬𝐭, 𝐅𝐚𝐜𝐞𝐩𝐚𝐥𝐦, 𝐅𝐚𝐢𝐥 " +
                        "\n 𝐅𝐁𝐈, 𝐆𝐚𝐦𝐞, 𝐆𝐨𝐦𝐞𝐧𝐞, 𝐇𝐚𝐩𝐩𝐲, 𝐋𝐄𝐖𝐃, 𝐋𝐢𝐤𝐞, 𝐍𝐞𝐫𝐯𝐨𝐮𝐬 " +
                        "\n 𝐍𝐨𝐩𝐞, 𝐏𝐨𝐮𝐭, 𝐏𝐫𝐚𝐲, 𝐑𝐞𝐥𝐚𝐱, 𝐑𝐮𝐧, 𝐒𝐚𝐝, 𝐒𝐡𝐫𝐮𝐠, 𝐒𝐢𝐜𝐤  " +
                        "\n 𝐒𝐢𝐧𝐠, 𝐒𝐢𝐩, 𝐒𝐥𝐞𝐞𝐩, 𝐒𝐦𝐢𝐥𝐞, 𝐒𝐦𝐮𝐠, 𝐒𝐮𝐢𝐜𝐢𝐝𝐞, 𝐓𝐞𝐞𝐡𝐞𝐞 " +
                        "\n 𝐓𝐡𝐢𝐧𝐤, 𝐓𝐢𝐫𝐞𝐝, 𝐕𝐨𝐦𝐢𝐭, 𝐖𝐨𝐖, 𝐖𝐓𝐅 " );
                    embed.addField(" 💚 𝐌𝐢𝐬𝐜𝐞𝐥𝐥𝐚𝐧𝐞𝐮𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💚 " , "" +
                        " \n 𝐃𝐚𝐧𝐝𝐞𝐫𝐞, 𝐃𝐞𝐫𝐞, 𝐉𝐏𝐨𝐬𝐞, 𝐊𝐮𝐮𝐝𝐞𝐫𝐞, 𝐋𝐨𝐥𝐢, 𝐍𝐞𝐤𝐨𝐆𝐢𝐫𝐥  " +
                        " \n 𝐒𝐞𝐜𝐫𝐞𝐭, 𝐒𝐡𝐨𝐭𝐚, 𝐓𝐫𝐚𝐩, 𝐓𝐬𝐮𝐧𝐝𝐞𝐫𝐞, 𝐘𝐚𝐧𝐝𝐞𝐫𝐞, 𝐘𝐚𝐨𝐢 " + 
                        " \n 𝐘𝐮𝐫𝐢. " );
                    embed.addField(" 💜 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐑𝐚𝐧𝐝𝐨𝐦 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 +𝐒𝐑 ] 💜 " , "" +
                        " \n 𝐂𝐫𝐢𝐬𝐢𝐬, 𝐍𝐨, 𝐒𝐞𝐞𝐧, 𝐓𝐡𝐢𝐧𝐤, 𝐘𝐞𝐬 " );
                    embed.addField(" 💜 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐃𝐨𝐠 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 +𝐌𝐃 ] 💜 " , "" +
                        " \n 𝐀𝐧𝐠𝐫𝐲, 𝐁𝐥𝐮𝐬𝐡, 𝐁𝐨𝐰, 𝐁𝐲𝐞, 𝐂𝐡𝐞𝐬𝐬𝐞, 𝐂𝐫𝐲, 𝐃𝐞𝐩𝐫𝐞𝐬𝐬, 𝐃𝐢𝐞,  " +
                        " \n 𝐄𝐱𝐜𝐢𝐭𝐞𝐝, 𝐅𝐮𝐫𝐢𝐨𝐮𝐬, 𝐆𝐥𝐚𝐝, 𝐆𝐫𝐢𝐦, 𝐇𝐚𝐡𝐚, 𝐇𝐚𝐩𝐩𝐲, 𝐇𝐞𝐞, 𝐇𝐢, " + 
                        " \n 𝐉𝐨𝐣𝐨, 𝐊𝐢𝐬𝐬, 𝐋𝐢𝐤𝐞, 𝐋𝐨𝐯𝐞, 𝐌𝐦𝐦, 𝐍𝐞𝐫𝐯𝐨𝐮𝐬, 𝐎𝐌𝐆, 𝐏𝐞𝐚𝐜𝐞, " +
                        " \n 𝐑𝐞𝐚𝐥𝐥𝐲, 𝐒𝐚𝐝, 𝐒𝐡𝐚𝐦𝐞, 𝐒𝐥𝐞𝐞𝐩, 𝐒𝐦𝐢𝐥𝐞, 𝐒𝐨𝐫𝐫𝐲, 𝐒𝐩𝐲, 𝐘𝐨𝐮. " )
                    embed.addField(" 💙 𝐌𝐮𝐬𝐢𝐜 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💙 " , ""+
                        " \n 𝐑𝐚𝐝𝐢𝐨𝐀𝐧𝐢𝐦𝐞 = 𝐏𝐮𝐞𝐝𝐞𝐬 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐢𝐫 𝐮𝐧𝐚 𝐑𝐚𝐝𝐢𝐨 𝐀𝐧𝐢𝐦𝐞 𝟕/𝟐𝟒 " +
                        " \n 𝐏𝐥𝐚𝐲 = 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐞 𝐮𝐧𝐚 𝐂𝐚𝐧𝐜𝐢ó𝐧 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 " + 
                        " \n 𝐒𝐤𝐢𝐩 = 𝐒𝐚𝐥𝐭𝐚𝐫 𝐝𝐞 𝐂𝐚𝐧𝐜𝐢𝐨𝐧 " +
                        " \n 𝐐𝐮𝐞𝐮𝐞 = 𝐌𝐮𝐞𝐬𝐭𝐫𝐚 𝐥𝐚 𝐂𝐨𝐥𝐚 𝐝𝐞 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐜𝐢𝐨𝐧 " +
                        " \n 𝐒𝐭𝐨𝐩 = 𝐃𝐞𝐭𝐢𝐞𝐧𝐞 𝐥𝐚 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐜𝐢ó𝐧 𝐝𝐞𝐥 𝐁𝐨𝐭 " + 
                        " \n 𝐕𝐨𝐥𝐮𝐦𝐞 = 𝐂𝐚𝐦𝐛𝐢𝐚 𝐞𝐥 𝐕𝐨𝐥𝐮𝐦𝐞𝐧 𝐝𝐞𝐥 𝐁𝐨𝐭 𝐄𝐧𝐭𝐫𝐞 [𝟎-𝟐] " +
                        " \n 𝐑𝐞𝐬𝐞𝐭 = 𝐄𝐧 𝐂𝐚𝐬𝐨 𝐝𝐞 𝐐𝐮𝐞 𝐧𝐨 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞 𝐂𝐨𝐫𝐫𝐞𝐜𝐭𝐚𝐦𝐞𝐧𝐭𝐞 " );
                    embed.addField(" 🔞 𝐍𝐒𝐅𝐖 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 🔞 " , ""+
                        " \n 𝐀𝐫𝐦𝐩𝐢𝐭, 𝐁𝐨𝐨𝐛𝐣𝐨𝐛, 𝐂𝐮𝐦, 𝐅𝐨𝐨𝐭  " +
                        " \n 𝐅𝐮𝐜𝐤, 𝐅𝐮𝐭𝐚𝐧𝐚𝐫𝐢, 𝐇𝐚𝐧𝐝𝐉𝐨𝐛, 𝐇𝐞𝐧𝐭𝐚𝐢 " +
                        " \n 𝐋𝐨𝐥𝐢𝟏𝟖, 𝐌𝐚𝐬𝐭𝐮𝐫𝐛𝐚𝐭𝐞, 𝐒𝐡𝐨𝐭𝐚𝟏𝟖, 𝐒𝐨𝐜𝐤𝐬 " +
                        " \n 𝐒𝐮𝐜𝐤, 𝐓𝐡𝐢𝐠𝐡𝐬, 𝐓𝐫𝐚𝐩𝟏𝟖, 𝐘𝐚𝐨𝐢𝟏𝟖, 𝐘𝐮𝐫𝐢𝟏𝟖 ");
                    embed.addField(" 🖤 𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 🖤 " , ""+
                        " \n 𝐂𝐥𝐞𝐚𝐫 = 𝐁𝐨𝐫𝐫𝐚 𝐮𝐧𝐚 𝐂𝐢𝐞𝐫𝐭𝐚 𝐂𝐚𝐧𝐭𝐢𝐝𝐚𝐝 𝐝𝐞 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 " +
                        " \n 𝐒𝐞𝐭𝐏𝐫𝐞𝐟𝐢𝐱 = 𝐂𝐚𝐦𝐛𝐢𝐚𝐫 𝐞𝐥 𝐩𝐫𝐞𝐟𝐢𝐣𝐨 𝐝𝐞𝐧𝐭𝐫𝐨 𝐝𝐞𝐥 𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫 ");
                    embed.setURL("https://www.ichimonogatari.com");
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/Help.gif");
                    embed.setFooter(" 𝗖𝗿𝗲𝗱𝗶𝘁𝗼𝘀 : "+ Creditos +"  "+ Version +" ");
                    embed.setTimestamp()
                message.reply(" 𝐓𝐞 𝐄𝐧𝐯𝐢𝐞 𝐮𝐧 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 𝐚𝐥 𝐏𝐫𝐢𝐯𝐚𝐝 :heartpulse: ");
                return message.channel.send( {embeds: [embed] });
                }else{
                message.delete().catch(error =>
                    message.reply(({embed: {
                        color: 15158332,
                        description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
                    }})
                    )
                );
                let embed = new discord.MessageEmbed()
                    embed.setColor('#D57DC1')
                    embed.setAuthor("✨ ¿𝐍𝐞𝐜𝐞𝐬𝐢𝐭𝐚𝐬 𝐀𝐲𝐮𝐝𝐚? "+message.author.username+" ✨" + 
                        "\n 𝐕𝐢𝐬𝐢𝐭𝐚 𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 : https://discord.gg/BRq5QGw", message.author.avatarURL)
                    embed.setDescription(' 🖤 💜 ❤ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐁𝐨𝐭 ❤ 💜 🖤 ')
                    embed.setTitle("🎀 🎀 🎀 🎀 𝐏𝐚𝐠𝐢𝐧𝐚 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 🎀 🎀 🎀 🎀")
                    embed.setThumbnail("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/MenheraAngel001.png")
                    embed.addField(" 💖 𝐌𝐚𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💖 ", " " +
                        "\n 𝐇𝐞𝐥𝐩 = 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐌𝐢𝐬 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 " +
                        "\n 𝐒𝐚𝐲 = 𝐄𝐬𝐜𝐫𝐢𝐛𝐢𝐫é 𝐞𝐧 𝐭𝐮 𝐋𝐮𝐠𝐚𝐫 " +
                        "\n 𝐈𝐧𝐟𝐨 = 𝐌𝐨𝐬𝐭𝐫𝐚𝐫𝐞 𝐥𝐚 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧 𝐝𝐞 𝐮𝐧 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 " +
                        "\n 𝐀𝐯𝐚𝐭𝐚𝐫 = 𝐌𝐨𝐬𝐭𝐫𝐚𝐫𝐞 𝐞𝐥 𝐀𝐯𝐚𝐭𝐚𝐫 𝐝𝐞 𝐮𝐧 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 " +
                        "\n 𝐑𝐚𝐝𝐢𝐨𝐀𝐧𝐢𝐦𝐞 = 𝐏𝐮𝐞𝐝𝐞𝐬 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐢𝐫 𝐮𝐧𝐚 𝐑𝐚𝐝𝐢𝐨 𝐀𝐧𝐢𝐦𝐞 𝟕/𝟐𝟒 " +
                        "\n 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 = 𝐒𝐨𝐫𝐩𝐫𝐞𝐬𝐚 𝐎𝐰𝐎 " +
                        "\n 𝐌𝐞𝐧𝐡𝐞𝐫𝐚 = 𝐈𝐦𝐚𝐠𝐞𝐧 𝐑𝐚𝐧𝐝𝐨𝐦 𝐝𝐞 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐂𝐡𝐚𝐧 " +
                        "\n 𝐌𝐞𝐦𝐞 = 𝐏𝐨𝐧𝐝𝐫𝐞 𝐮𝐧 𝐌𝐞𝐦𝐞 𝐀𝐥𝐞𝐚𝐭𝐨𝐫𝐢𝐨 " +
                        "\n 𝐔𝐑𝐋 = 𝐄𝐧𝐯𝐢𝐚𝐫𝐞 𝐮𝐧𝐚 𝐈𝐦𝐚𝐠𝐞𝐧 𝐏𝐨𝐫 𝐓𝐢 " +
                        "\n 𝐒𝐞𝐫𝐯𝐞𝐫 = 𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐝𝐞 𝐌𝐞𝐧𝐡𝐞𝐫𝐚 " +
                        "\n 𝐃𝐨𝐧𝐚𝐭𝐞 = 𝐏𝐮𝐞𝐝𝐞𝐬 𝐃𝐨𝐧𝐚𝐫𝐦𝐞 𝐏𝐚𝐫𝐚 𝐒𝐞𝐠𝐮𝐢𝐫 𝐀𝐩𝐨𝐲𝐚𝐧𝐝𝐨𝐦𝐞 " +
                        "\n 𝐕𝐨𝐭𝐞 = 𝐕𝐨𝐭𝐚 𝐏𝐨𝐫 𝐦𝐢 𝐏𝐨𝐫 𝐅𝐚𝐯𝐨𝐫 " );
                    embed.addField(" 💚 𝐈𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐨𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💚 ", " " +
                        "\n 𝐁𝐚𝐤𝐚, 𝐁𝐢𝐫𝐭𝐡𝐃𝐚𝐲, 𝐁𝐢𝐭𝐞, 𝐂𝐡𝐞𝐞𝐤𝐬, 𝐂𝐥𝐚𝐩, 𝐂𝐮𝐝𝐝𝐥𝐞, 𝐅𝐞𝐞𝐝  " +
                        "\n 𝐇𝐚𝐡𝐚, 𝐇𝐚𝐧𝐝𝐇𝐨𝐥𝐝𝐢𝐧𝐠, 𝐇𝐢, 𝐇𝐢𝐠𝐡𝐅𝐢𝐯𝐞, 𝐇𝐮𝐠, 𝐊𝐢𝐜𝐤, 𝐊𝐢𝐥𝐥 " +
                        "\n 𝐊𝐢𝐬𝐬, 𝐋𝐚𝐮𝐠𝐡, 𝐋𝐢𝐜𝐤, 𝐋𝐨𝐯𝐞, 𝐏𝐚𝐭, 𝐏𝐨𝐤𝐞, 𝐏𝐮𝐧𝐜𝐡, 𝐑𝐞𝐯𝐢𝐯𝐞 " +
                        "\n 𝐒𝐜𝐚𝐫𝐞𝐝, 𝐒𝐥𝐚𝐩, 𝐒𝐩𝐢𝐭, 𝐒𝐩𝐥𝐚𝐬𝐡, 𝐒𝐩𝐫𝐚𝐲, 𝐒𝐩𝐲, 𝐓𝐡𝐚𝐧𝐤𝐬   " +
                        "\n 𝐓𝐢𝐜𝐤𝐥𝐞, 𝐖𝐚𝐬𝐭𝐞𝐝 " );
                    embed.addField(" 💚 𝐑𝐞𝐚𝐜𝐭𝐢𝐨𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💚 ", " " +
                        "\n 𝐀𝐧𝐠𝐫𝐲, 𝐁𝐚𝐧𝐠𝐇𝐞𝐚𝐝, 𝐁𝐥𝐮𝐬𝐡, 𝐁𝐨𝐨𝐦, 𝐁𝐨𝐫𝐞𝐝, 𝐂𝐨𝐧𝐟𝐮𝐬𝐞𝐝  " +
                        "\n 𝐂𝐨𝐨𝐤, 𝐂𝐫𝐲, 𝐃𝐚𝐛, 𝐃𝐚𝐧𝐜𝐞, 𝐃𝐢𝐬𝐠𝐮𝐬𝐭, 𝐅𝐚𝐜𝐞𝐩𝐚𝐥𝐦, 𝐅𝐚𝐢𝐥 " +
                        "\n 𝐅𝐁𝐈, 𝐆𝐚𝐦𝐞, 𝐆𝐨𝐦𝐞𝐧𝐞, 𝐇𝐚𝐩𝐩𝐲, 𝐋𝐄𝐖𝐃, 𝐋𝐢𝐤𝐞, 𝐍𝐞𝐫𝐯𝐨𝐮𝐬 " +
                        "\n 𝐍𝐨𝐩𝐞, 𝐏𝐨𝐮𝐭, 𝐏𝐫𝐚𝐲, 𝐑𝐞𝐥𝐚𝐱, 𝐑𝐮𝐧, 𝐒𝐚𝐝, 𝐒𝐡𝐫𝐮𝐠, 𝐒𝐢𝐜𝐤  " +
                        "\n 𝐒𝐢𝐧𝐠, 𝐒𝐢𝐩, 𝐒𝐥𝐞𝐞𝐩, 𝐒𝐦𝐢𝐥𝐞, 𝐒𝐦𝐮𝐠, 𝐒𝐮𝐢𝐜𝐢𝐝𝐞, 𝐓𝐞𝐞𝐡𝐞𝐞 " +
                        "\n 𝐓𝐡𝐢𝐧𝐤, 𝐓𝐢𝐫𝐞𝐝, 𝐕𝐨𝐦𝐢𝐭, 𝐖𝐨𝐖, 𝐖𝐓𝐅 " );
                    embed.addField(" 💚 𝐌𝐢𝐬𝐜𝐞𝐥𝐥𝐚𝐧𝐞𝐮𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💚 " , "" +
                        " \n 𝐃𝐚𝐧𝐝𝐞𝐫𝐞, 𝐃𝐞𝐫𝐞, 𝐉𝐏𝐨𝐬𝐞, 𝐊𝐮𝐮𝐝𝐞𝐫𝐞, 𝐋𝐨𝐥𝐢, 𝐍𝐞𝐤𝐨𝐆𝐢𝐫𝐥  " +
                        " \n 𝐒𝐞𝐜𝐫𝐞𝐭, 𝐒𝐡𝐨𝐭𝐚, 𝐓𝐫𝐚𝐩, 𝐓𝐬𝐮𝐧𝐝𝐞𝐫𝐞, 𝐘𝐚𝐧𝐝𝐞𝐫𝐞, 𝐘𝐚𝐨𝐢 " + 
                        " \n 𝐘𝐮𝐫𝐢. " );
                    embed.addField(" 💜 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐑𝐚𝐧𝐝𝐨𝐦 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 +𝐒𝐑 ] 💜 " , "" +
                        " \n 𝐂𝐫𝐢𝐬𝐢𝐬, 𝐍𝐨, 𝐒𝐞𝐞𝐧, 𝐓𝐡𝐢𝐧𝐤, 𝐘𝐞𝐬 " );
                    embed.addField(" 💜 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐃𝐨𝐠 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 +𝐌𝐃 ] 💜 " , "" +
                        " \n 𝐀𝐧𝐠𝐫𝐲, 𝐁𝐥𝐮𝐬𝐡, 𝐁𝐨𝐰, 𝐁𝐲𝐞, 𝐂𝐡𝐞𝐬𝐬𝐞, 𝐂𝐫𝐲, 𝐃𝐞𝐩𝐫𝐞𝐬𝐬, 𝐃𝐢𝐞,  " +
                        " \n 𝐄𝐱𝐜𝐢𝐭𝐞𝐝, 𝐅𝐮𝐫𝐢𝐨𝐮𝐬, 𝐆𝐥𝐚𝐝, 𝐆𝐫𝐢𝐦, 𝐇𝐚𝐡𝐚, 𝐇𝐚𝐩𝐩𝐲, 𝐇𝐞𝐞, 𝐇𝐢, " + 
                        " \n 𝐉𝐨𝐣𝐨, 𝐊𝐢𝐬𝐬, 𝐋𝐢𝐤𝐞, 𝐋𝐨𝐯𝐞, 𝐌𝐦𝐦, 𝐍𝐞𝐫𝐯𝐨𝐮𝐬, 𝐎𝐌𝐆, 𝐏𝐞𝐚𝐜𝐞, " +
                        " \n 𝐑𝐞𝐚𝐥𝐥𝐲, 𝐒𝐚𝐝, 𝐒𝐡𝐚𝐦𝐞, 𝐒𝐥𝐞𝐞𝐩, 𝐒𝐦𝐢𝐥𝐞, 𝐒𝐨𝐫𝐫𝐲, 𝐒𝐩𝐲, 𝐘𝐨𝐮. " )
                    embed.addField(" 💙 𝐌𝐮𝐬𝐢𝐜 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 + ] 💙 " , ""+
                        " \n 𝐑𝐚𝐝𝐢𝐨𝐀𝐧𝐢𝐦𝐞 = 𝐏𝐮𝐞𝐝𝐞𝐬 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐢𝐫 𝐮𝐧𝐚 𝐑𝐚𝐝𝐢𝐨 𝐀𝐧𝐢𝐦𝐞 𝟕/𝟐𝟒 " +
                        " \n 𝐏𝐥𝐚𝐲 = 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐞 𝐮𝐧𝐚 𝐂𝐚𝐧𝐜𝐢ó𝐧 𝐝𝐞 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 " + 
                        " \n 𝐒𝐤𝐢𝐩 = 𝐒𝐚𝐥𝐭𝐚𝐫 𝐝𝐞 𝐂𝐚𝐧𝐜𝐢𝐨𝐧 " +
                        " \n 𝐐𝐮𝐞𝐮𝐞 = 𝐌𝐮𝐞𝐬𝐭𝐫𝐚 𝐥𝐚 𝐂𝐨𝐥𝐚 𝐝𝐞 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐜𝐢𝐨𝐧 " +
                        " \n 𝐒𝐭𝐨𝐩 = 𝐃𝐞𝐭𝐢𝐞𝐧𝐞 𝐥𝐚 𝐑𝐞𝐩𝐫𝐨𝐝𝐮𝐜𝐜𝐢ó𝐧 𝐝𝐞𝐥 𝐁𝐨𝐭 " + 
                        " \n 𝐕𝐨𝐥𝐮𝐦𝐞 = 𝐂𝐚𝐦𝐛𝐢𝐚 𝐞𝐥 𝐕𝐨𝐥𝐮𝐦𝐞𝐧 𝐝𝐞𝐥 𝐁𝐨𝐭 𝐄𝐧𝐭𝐫𝐞 [𝟎-𝟐] " +
                        " \n 𝐑𝐞𝐬𝐞𝐭 = 𝐄𝐧 𝐂𝐚𝐬𝐨 𝐝𝐞 𝐐𝐮𝐞 𝐧𝐨 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞 𝐂𝐨𝐫𝐫𝐞𝐜𝐭𝐚𝐦𝐞𝐧𝐭𝐞 " );
                    embed.addField(" 🔞   𝐍𝐒𝐅𝐖 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬   🔞 ", ""+
                        "\n 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐞𝐬𝐭𝐨𝐬 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐔𝐭𝐢𝐥𝐢𝐳𝐚𝐫 𝐞𝐥 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐇𝐞𝐥𝐩 \n𝐃𝐞𝐧𝐭𝐫𝐨 𝐝𝐞 𝐮𝐧 𝐂𝐚𝐧𝐚𝐥 𝐍𝐒𝐅𝐖")
                    embed.addField(" 🖤 𝐀𝐝𝐦𝐢𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 [𝐒𝐭𝐚𝐫𝐭 𝐖𝐢𝐭𝐡 +ADM] 🖤 " , ""+
                        " \n 𝐂𝐥𝐞𝐚𝐫 = 𝐁𝐨𝐫𝐫𝐚 𝐮𝐧𝐚 𝐂𝐢𝐞𝐫𝐭𝐚 𝐂𝐚𝐧𝐭𝐢𝐝𝐚𝐝 𝐝𝐞 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 " +
                        " \n 𝐒𝐞𝐭𝐏𝐫𝐞𝐟𝐢𝐱 = 𝐂𝐚𝐦𝐛𝐢𝐚𝐫 𝐞𝐥 𝐩𝐫𝐞𝐟𝐢𝐣𝐨 𝐝𝐞𝐧𝐭𝐫𝐨 𝐝𝐞𝐥 𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫 ");
                    embed.setURL("https://www.ichimonogatari.com")
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/Help.gif")
                    embed.setFooter(" 𝗖𝗿𝗲𝗱𝗶𝘁𝗼𝘀 : "+ Creditos +"  "+ Version +" ");
                    embed.setTimestamp()
                message.reply(" 𝐓𝐞 𝐄𝐧𝐯𝐢𝐞 𝐮𝐧 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 𝐚𝐥 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 :heartpulse: ");
                return message.channel.send( {embeds: [embed] });
                }
            
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};