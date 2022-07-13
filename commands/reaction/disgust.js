
module.exports = {
    name: "disgust",
    aliases: ["disgustado", "iuugh", "asco"],
    description:"Reaction Anime Angry/Molesto",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*26);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐃𝐢𝐬𝐠𝐮𝐬𝐭𝐚𝐝@ (＞﹏＜)  " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Disgust/Disgust"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};