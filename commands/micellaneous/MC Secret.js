module.exports = {
    name: "secret",
    aliases: ["mcsecret"],
    description:"Comando es un Secreto",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*8);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐆𝐮𝐚𝐫𝐝𝐚𝐧𝐝𝐨 𝐮𝐧 𝐒𝐞𝐜𝐫𝐞𝐭𝐨 (>人<) " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Secret/Secret"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};