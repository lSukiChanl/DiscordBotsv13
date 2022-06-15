
module.exports = {
    name: "scared",
    aliases: ["asusado"],
    description:"Interaction Anime Scared/Asustado",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*72);
            NumMagic = NumMagic + 1;
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+message.author.username + " 𝐓𝐢𝐞𝐧𝐞 𝐌𝐢𝐞𝐝𝐨 ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Scared/Scared"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()        
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " \n 𝐋𝐞 𝐓𝐢𝐞𝐧𝐞 𝐌𝐢𝐞𝐝𝐨 𝐀 : "+ member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Scared/Scared"+NumMagic+".gif");
            embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};