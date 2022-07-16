module.exports = {
    name: "yaoi",
    aliases: ["mcyoai"],
    description:"Comando para ver un poco de Yaoi",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*40);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 𝐄𝐫𝐞𝐬 𝐮𝐧 𝐏𝐮𝐞𝐫𝐜𝐨 \n 𝐂𝐞𝐫𝐫𝐚𝐫𝐞 𝐥𝐨𝐬 𝐎𝐣𝐨𝐬  (>人<) " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yaoi/Yaoi"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};