module.exports = {
    name: "yandere",
    aliases: ["mcyandere"],
    description:"Comando para ver una Chica Yandere",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*42);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " ππ¬π­π ππ§ ππ¨ππ¨ πππ§πππ«π οΌΌ(ΒΊ β‘ ΒΊ l|l)/ " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yandere/Yandere"+NumMagic+".gif");
            embed.setFooter({text: " ππ«πππ’π­π¨π¬ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()      
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};