module.exports = {
    name: "srseen",
    aliases: ["sgseen"],
    description:"Sticker Me dejaron en Visto!",
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
            embed.setDescription("𝐃𝐞𝐣𝐚𝐫𝐨𝐧 𝐞𝐧 𝐕𝐢𝐬𝐭𝐨 𝐚 "+ message.author.username +" ")
            embed.setImage('https://cdn.discordapp.com/emojis/631043902987567114.png')
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};