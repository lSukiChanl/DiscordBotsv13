
module.exports = {
    name: "disgust",
    aliases: ["disgustado", "iuugh", "asco"],
    description:"Reaction Anime Angry/Molesto",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
                        
            let NumMagic = Math.floor(Math.random()*26);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " đđŦđ­đ đđĸđŦđ đŽđŦđ­đđ@ (īŧīšīŧ)  " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Disgust/Disgust"+NumMagic+".gif");
                embed.setFooter({text: " đđĢđđđĸđ­đ¨đŦ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};