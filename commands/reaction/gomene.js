
module.exports = {
    name: "gomene",
    aliases: ["gomen", "sorry", "lo siento", "perdon"],
    description:"Reaction Anime Gomene/Sorry/Lo Siento",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*8);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " đđ¨ đđĸđđ§đ­đ đđŽđđĄđĸđŦđĸđĻđ¨ (ī¸ļī¸šī¸ē) " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Gomene/Gomene"+NumMagic+".gif");
                embed.setFooter({text: " đđĢđđđĸđ­đ¨đŦ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};