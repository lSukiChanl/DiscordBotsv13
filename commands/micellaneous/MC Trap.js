module.exports = {
    name: "trap",
    aliases: ["mctrap", "trapito"],
    description:"Comando para ver un Trapito",
    async execute (client, message, args, discord){
        try {
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*45);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setDescription(" "+message.author.username + " 𝐒𝐢 𝐞𝐬 𝐓𝐫𝐚𝐩𝐢𝐭𝐨 𝐞𝐬 𝐌𝐚𝐬 𝐑𝐢𝐜𝐨 (≧◡≦) ♡ " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Trap/Trap"+NumMagic+".gif");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};