module.exports = {
    name: "jpose",
    aliases: ["mcjpose"],
    description:"Comando JOJO Pose",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*27);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐏𝐨𝐬𝐚𝐧𝐝𝐨 𝐂𝐨𝐦𝐨 𝐮𝐧 𝐉𝐨𝐣𝐨 (*¯︶¯*) " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/JPose/JPose"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};