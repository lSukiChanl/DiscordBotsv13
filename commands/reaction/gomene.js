
module.exports = {
    name: "gomene",
    aliases: ["gomen", "sorry", "lo siento", "perdon"],
    description:"Reaction Anime Gomene/Sorry/Lo Siento",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*8);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+msg.author.username + " 𝐋𝐨 𝐒𝐢𝐞𝐧𝐭𝐞 𝐌𝐮𝐜𝐡𝐢𝐬𝐢𝐦𝐨 (︶︹︺) " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Gomene/Gomene"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};