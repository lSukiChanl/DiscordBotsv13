module.exports = {
    name: "shota",
    aliases: ["mcshota"],
    description:"Comando para ver un Shota",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*21);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐃𝐞𝐣𝐨 𝐚 𝐒𝐮 𝐂𝐮𝐢𝐝𝐚𝐝𝐨 𝐄𝐬𝐭𝐞 𝐏𝐞𝐪𝐮𝐞ñ𝐨 𝐒𝐡𝐨𝐭𝐚 \n 𝐂𝐮𝐢𝐝𝐚𝐦𝐞𝐥𝐨 𝐏𝐨𝐫 𝐅𝐚𝐯𝐨𝐫 (≧◡≦) ♡ " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Shota/Shota"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};