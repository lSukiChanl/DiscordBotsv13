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
                if (args  = ''){
                    embed.setColor('#D57DC1')
                    embed.setImage('https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/URL/URL.png')
                return msg.channel.send(embed)
                }
                embed.setColor('#D57DC1')
                embed.setDescription(" "+message.author.username + " 𝐃𝐢𝐜𝐞: \n 𝐑𝐞𝐬𝐩𝐞𝐭𝐨 𝐥𝐚𝐬 𝐑𝐞𝐠𝐥𝐚𝐬 𝐝𝐞𝐥 𝐒𝐞𝐫𝐯𝐢𝐝𝐨𝐫, 𝐏𝐞𝐫𝐨 𝐑𝐞𝐚𝐟𝐢𝐫𝐦𝐨 𝐦𝐢 𝐀𝐮𝐭𝐨𝐫𝐢𝐝𝐚𝐝 𝐔𝐭𝐢𝐥𝐢𝐳𝐚𝐧𝐝𝐨 𝐞𝐥 𝐁𝐨𝐭 𝐏𝐚𝐫𝐚 𝐞𝐧𝐯𝐢𝐚𝐫 𝐞𝐬𝐭𝐚 𝐈𝐦𝐚𝐠𝐞𝐧")
                embed.setImage(args)
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};