
module.exports = {
    name: "baka",
    aliases: ["tonto", "estupido", "idiota"],
    description:"Interaction Anime Baka/Stupid/Tonto",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;            
            
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*32);
            NumMagic = NumMagic + 1;
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " 𝐄𝐬 𝐮𝐧 𝐈𝐝𝐢𝐨𝐭𝐚")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagic+".gif")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()        
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " \n 𝐋𝐞 𝐃𝐢𝐣𝐨 𝐈𝐝𝐢𝐨𝐭𝐚 𝐚 "+member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagic+".gif")
            embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};