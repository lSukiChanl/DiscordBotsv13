module.exports = {
    name: "secret",
    aliases: ["mcsecret"],
    description:"Comando es un Secreto",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*8);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " ๐๐ฌ๐ญ๐ ๐๐ฎ๐๐ซ๐๐๐ง๐๐จ ๐ฎ๐ง ๐๐๐๐ซ๐๐ญ๐จ (>ไบบ<) " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Secret/Secret"+NumMagic+".gif");
            embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};