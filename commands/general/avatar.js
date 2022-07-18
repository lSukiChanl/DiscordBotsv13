
module.exports = {
    name: "avatar",
    description:"Ver el Avatar de Alguien",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;

            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;

            let usuario = message.mentions.members.first() || message.member; 
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription("𝐀𝐯𝐚𝐭𝐚𝐫 𝐃𝐞 : "+ usuario.user.username)
                embed.setImage(usuario.user.avatarURL()+"?size=1024")
                embed.addField("𝐀𝐯𝐚𝐭𝐚𝐫 𝐏𝐞𝐝𝐢𝐝𝐨 𝐏𝐨𝐫 : "+message.author.username+"", "\n [ --- 𝗔𝘃𝗮𝘁𝗮𝗿 𝗨𝗥𝗟 ---]("+usuario.user.avatarURL()+"?size=1024)")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};