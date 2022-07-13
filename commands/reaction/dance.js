
module.exports = {
    name: "dance",
    aliases: ["bailar"],
    description:"Reaction Anime Angry/Molesto",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*71);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+msg.author.username + " 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐚 𝐁𝐚𝐢𝐥𝐚𝐫 (≧ω≦) " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Dance/Dance"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};