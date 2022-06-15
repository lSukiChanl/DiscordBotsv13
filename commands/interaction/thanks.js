
module.exports = {
    name: "thanks",
    aliases: ["gracias"],
    description:"Interaction Anime Birthday/Cumpleaños",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*6);
            NumMagic = NumMagic + 1;
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐢𝐝𝐨 𝐂𝐨𝐧 𝐞𝐥 𝐝𝐞 𝐀𝐫𝐫𝐢𝐛𝐚 ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Thanks/Thanks"+NumMagic+".gif")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()        
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + "\n 𝐋𝐞 𝐃𝐚 𝐥𝐚𝐬 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐀 : "+member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Thanks/Thanks"+NumMagic+".gif")
            embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};