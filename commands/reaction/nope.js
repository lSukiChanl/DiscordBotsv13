
module.exports = {
    name: "nope",
    aliases: ["NOPE"],
    description:"Reaction Anime Nope/No",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*36);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+msg.author.username + " ¡¡¡𝐍𝐨𝐩𝐞!!! ( ´ ▽ ` ).｡ｏ✖ " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Nope/Nope"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};