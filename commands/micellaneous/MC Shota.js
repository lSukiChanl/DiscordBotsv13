module.exports = {
    name: "shota",
    aliases: ["mcshota"],
    description:"Comando para ver un Shota",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let embed = new discord.MessageEmbed()
            let NumMagic = Math.floor(Math.random()*21);
            NumMagic = NumMagic + 1;
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " ๐๐๐ฃ๐จ ๐ ๐๐ฎ ๐๐ฎ๐ข๐๐๐๐จ ๐๐ฌ๐ญ๐ ๐๐๐ช๐ฎ๐รฑ๐จ ๐๐ก๐จ๐ญ๐ \n ๐๐ฎ๐ข๐๐๐ฆ๐๐ฅ๐จ ๐๐จ๐ซ ๐๐๐ฏ๐จ๐ซ (โงโกโฆ) โก " )
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Shota/Shota"+NumMagic+".gif");
            embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};