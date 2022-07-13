
module.exports = {
    name: "lewd",
    aliases: ["pervert", "pervertido", "horny", "caliente"],
    description:"Reaction Anime LEWD/Horny",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*59);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+msg.author.username + " 𝐄𝐬𝐭𝐚 𝐝𝐞 𝐋𝐚𝐬𝐜𝐢𝐯@ (⁄ ⁄•⁄ω⁄•⁄ ⁄) " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/LEWD/LEWD"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};