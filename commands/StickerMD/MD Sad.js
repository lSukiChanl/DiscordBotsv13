module.exports = {
    name: "menhera",
    aliases: ["menhera-chan","kurumi","kurumi-chan"],
    description:"Ver un Meme Random",
    async execute (client, message, args, discord){
        try {
            msg.delete().catch(error =>
                msg.reply(({embed: {
                    color: 15158332,
                    description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
                }})
                )
            );
            let embed = new MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+ msg.author.username +" 𝐄𝐬𝐭𝐚 𝐓𝐫𝐢𝐬𝐭𝐞")
            embed.setImage('https://cdn.discordapp.com/emojis/631035860657373186.png')
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};