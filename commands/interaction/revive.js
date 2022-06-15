
module.exports = {
    name: "revive",
    aliases: ["revivir"],
    description:"Interaction Anime Revive/Revivir",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*16);
            NumMagic = NumMagic + 1;
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+message.author.username + " 𝐇𝐚 𝐑𝐞𝐬𝐮𝐜𝐢𝐭𝐚𝐝𝐨")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Revive/Revive"+NumMagic+".gif")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()        
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+member.user.username + " \n 𝐇𝐚 𝐒𝐢𝐝𝐨 𝐑𝐞𝐯𝐢𝐯𝐢𝐝@ 𝐎 𝐒𝐚𝐧𝐚𝐝@ 𝐏𝐨𝐫 : "+message.author.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Revive/Revive"+NumMagic+".gif")
            embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};