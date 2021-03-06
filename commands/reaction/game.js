
module.exports = {
    name: "game",
    aliases: ["jugar", "jugando"],
    description:"Reaction Anime Game/Jugando",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*42);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+msg.author.username + " ๐๐ ๐๐ฎ๐ฌ๐จ ๐ ๐๐ฎ๐ ๐๐ซ ๏ผผ(โงโฝโฆ)๏ผ " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Game/Game"+NumMagic+".gif");
                embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};