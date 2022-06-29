
module.exports = {
    name: "banghead",
    aliases: ["golpecabeza"],
    description:"Reaction Anime BangHead/Golpe en la Cabeza",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*79);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+msg.author.username + " 𝐒𝐞 𝐄𝐬𝐭𝐚 𝐆𝐨𝐥𝐩𝐞𝐚𝐧𝐝𝐨 𝐥𝐚 𝐂𝐚𝐛𝐞𝐳𝐚 (o_O)!" )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Banghead/Banghead"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};