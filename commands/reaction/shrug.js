
module.exports = {
    name: "shrug",
    aliases: ["ya que"],
    description:"Reaction Anime Shrug/Ya Que",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            let NumMagic = Math.floor(Math.random()*12);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" "+message.author.username + " 𝐍𝐨 𝐒𝐚𝐛𝐞 𝐎 𝐍𝐨 𝐋𝐞 𝐈𝐦𝐩𝐨𝐫𝐭𝐚 ┐(￣ヘ￣)┌ " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Shrug/Shrug"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : " + Creditos})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};