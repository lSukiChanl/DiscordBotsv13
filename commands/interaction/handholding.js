
module.exports = {
    name: "handholding",
    aliases: ["tomar"],
    description:"Interaction Anime Birthday/Cumpleaños",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*53);
            NumMagic = NumMagic + 1;
            if (!member){return msg.channel.send(" 𝐋𝐨 𝐒𝐢𝐞𝐧𝐭𝐨 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 𝐏𝐞𝐫𝐨 𝐃𝐞𝐛𝐞𝐬 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐀𝐥𝐠𝐮𝐢𝐞𝐧 ");}

            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" "+msg.author.username + "\n 𝐓𝐨𝐦𝐨 𝐥𝐚 𝐌𝐚𝐧𝐨 𝐃𝐞 :  "+ member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/HandHolding/HandHolding"+NumMagic+".gif");
            embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};