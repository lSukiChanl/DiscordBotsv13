module.exports = {
    name: "nekogirl",
    aliases: ["mcnekogirl"],
    description:"Comando para ver una NekoGirl",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*65);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐂𝐨𝐧 𝐌𝐮𝐜𝐡𝐨 𝐀𝐦𝐨𝐫 𝐮𝐧𝐚 𝐍𝐞𝐤𝐨𝐆𝐢𝐫𝐥 𝐏𝐚𝐫𝐚 𝐔𝐬𝐭𝐞𝐝 ლ(o◡oლ) " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/NekoGirl/NekoGirl"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};