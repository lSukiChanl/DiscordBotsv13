
module.exports = {
    name: "avatar",
    description:"Ver el Avatar de Alguien",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let usuario = message.mentions.members.first() || message.member; 
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription("𝐀𝐯𝐚𝐭𝐚𝐫 𝐃𝐞 : \n"+ usuario.user.username)
                embed.setImage(usuario.user.avatarURL()+"?size=1024")
                embed.addField("𝐀𝐯𝐚𝐭𝐚𝐫 𝐏𝐞𝐝𝐢𝐝𝐨 𝐏𝐨𝐫 : \n"+message.author.username+"", "\n [ --- 𝗔𝘃𝗮𝘁𝗮𝗿 𝗨𝗥𝗟 ---]("+usuario.user.avatarURL()+"?size=1024)")
                embed.setFooter(" 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos)
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};