
module.exports = {
    name: "fbi",
    aliases: ["policia"],
    description:"Reaction Anime FBI",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*16);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " ๐๐ฅ ๐๐๐ ๐๐ฌ๐ญ๐ ๐๐ช๐ฎ๐ข ๐๐ฎ๐ฒ๐ (โโญโฎโ) ยกยกยก๐๐๐๐ฒ!!! " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/FBI/FBI"+NumMagic+".gif");
                embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};