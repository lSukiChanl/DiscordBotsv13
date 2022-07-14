
module.exports = {
    name: "sleep",
    aliases: ["dormir", "durmiendo"],
    description:"Reaction Anime Sleep/Dormir",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*59);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+message.author.username + " 𝐓𝐢𝐞𝐧𝐞 𝐒𝐮𝐞ñ𝐧𝐨 𝐨 𝐘𝐚 𝐬𝐞 𝐃𝐮𝐫𝐦𝐢𝐨 (￣ρ￣)..zzZZ " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sleep/Sleep"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};