
module.exports = {
    name: "smile",
    aliases: ["sonrisa", "sonreir"],
    description:"Reaction Anime Smile/Sonrisa",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*169);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐒𝐨𝐧𝐫𝐢𝐞𝐧𝐝𝐨 ¿𝐏𝐨𝐫 𝐐𝐮𝐞 𝐒𝐞𝐫𝐚? (o◕‿◕o) " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Smile/Smile"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};