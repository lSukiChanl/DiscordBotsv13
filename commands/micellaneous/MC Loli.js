module.exports = {
    name: "loli",
    aliases: ["mcloli"],
    description:"Comando para ver una Loli",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*51);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐃𝐞𝐣𝐨 𝐚 𝐒𝐮 𝐂𝐮𝐢𝐝𝐚𝐝𝐨 𝐄𝐬𝐭𝐚 𝐏𝐞𝐪𝐮𝐞ñ𝐚 𝐋𝐨𝐥𝐢 \n 𝐂𝐮𝐢𝐝𝐚𝐦𝐞𝐥𝐚 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 (≧◡≦) ♡ " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Loli/Loli"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};