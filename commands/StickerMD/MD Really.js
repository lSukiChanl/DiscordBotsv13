module.exports = {
    name: "mdreally",
    aliases: ["mdrealmente"],
    description:"Sticker Menhera Perrita ¿Lo Dices en Serio?",
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
            embed.setDescription(" "+ message.author.username +" 𝐏𝐫𝐞𝐠𝐮𝐧𝐭𝐚 𝐬𝐢 𝐥𝐨 𝐝𝐢𝐜𝐞𝐬 𝐞𝐧 𝐒𝐞𝐫𝐢𝐨")
            embed.setImage('https://cdn.discordapp.com/emojis/631035898380812298.png')
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};