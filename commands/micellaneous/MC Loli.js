module.exports = {
    name: "loli",
    aliases: ["mcloli"],
    description:"Comando para ver una Loli",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*51);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " 𝐃𝐞𝐣𝐨 𝐚 𝐒𝐮 𝐂𝐮𝐢𝐝𝐚𝐝𝐨 𝐄𝐬𝐭𝐚 𝐏𝐞𝐪𝐮𝐞ñ𝐚 𝐋𝐨𝐥𝐢 \n 𝐂𝐮𝐢𝐝𝐚𝐦𝐞𝐥𝐚 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 (≧◡≦) ♡ " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Loli/Loli"+NumMagic+".gif");
            embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};