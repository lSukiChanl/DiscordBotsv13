module.exports = {
    name: "yuri",
    aliases: ["mcyuri"],
    description:"Comando para ver un poco de Yuri",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*54);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " ๐๐ง๐ข๐ข-๐๐ก๐๐ง ๐๐ซ๐๐ฌ ๐ฎ๐ง ๐๐ฎ๐๐ซ๐๐จ \n ๐๐๐ซ๐ซ๐๐ซ๐ ๐ฅ๐จ๐ฌ ๐๐ฃ๐จ๐ฌ  (>ไบบ<)  " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yuri/Yuri"+NumMagic+".gif");
            embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};