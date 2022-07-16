module.exports = {
    name: "kuudere",
    aliases: ["mckuudere"],
    description:"Comando para ver una Chica Kuudere",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*21);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐂𝐨𝐧 𝐌𝐮𝐜𝐡𝐨 𝐀𝐦𝐨𝐫 𝐮𝐧𝐚 𝐊𝐮𝐮𝐝𝐞𝐫𝐞 𝐏𝐚𝐫𝐚 𝐔𝐬𝐭𝐞𝐝 ლ(o◡oლ) " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Kuudere/Kuudere"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};