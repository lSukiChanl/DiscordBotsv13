module.exports = {
    name: "yandere",
    aliases: ["mcyandere"],
    description:"Comando para ver una Chica Yandere",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*42);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐞𝐧 𝐌𝐨𝐝𝐨 𝐘𝐚𝐧𝐝𝐞𝐫𝐞 ＼(º □ º l|l)/ " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yandere/Yandere"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};