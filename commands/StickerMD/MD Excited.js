module.exports = {
    name: "mdexcited",
    aliases: ["mdemocion"],
    description:"Sticker Menhera Perrita Emocionada",
    async execute (client, message, args, discord){
        try {
            message.delete().catch(error =>
                message.reply(({embed: {
                    color: 15158332,
                    description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
                }})
                )
            );
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+ message.author.username +" 𝐄𝐬𝐭𝐚 𝐄𝐦𝐨𝐜𝐢𝐨𝐧𝐚𝐝@")
            embed.setImage('https://cdn.discordapp.com/emojis/631035724808060929.png')
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};