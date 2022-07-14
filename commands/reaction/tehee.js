
module.exports = {
    name: "tehee",
    aliases: ["tehhee"],
    description:"Reaction Anime Tehee",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*21);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+message.author.username + " \n 𝐀𝐜𝐭𝐮𝐚 𝐝𝐞 𝐅𝐨𝐫𝐦𝐚 𝐓𝐨𝐧𝐭𝐚 𝐏𝐚𝐫𝐚 𝐝𝐞𝐬𝐯𝐢𝐚𝐫 𝐥𝐚 𝐀𝐭𝐞𝐧𝐜𝐢𝐨𝐧 " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Teehee/Teehee"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};