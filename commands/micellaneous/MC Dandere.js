module.exports = {
    name: "dandere",
    aliases: ["mcdandere"],
    description:"Comando para ver a una Chica Dandere",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*17);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐂𝐨𝐧 𝐌𝐮𝐜𝐡𝐨 𝐀𝐦𝐨𝐫 𝐮𝐧𝐚 𝐃𝐚𝐧𝐝𝐞𝐫𝐞 𝐏𝐚𝐫𝐚 𝐔𝐬𝐭𝐞𝐝 ლ(𝐨◡𝐨ლ)  " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Dandere/Dandere"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};