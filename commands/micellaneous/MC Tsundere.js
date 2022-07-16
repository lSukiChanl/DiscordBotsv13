module.exports = {
    name: "tsundere",
    aliases: ["mctsundere"],
    description:"Comando para ver una Chica Tsundere",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*45);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " (҂ `з´ ) " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Tsundere/Tsundere"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};