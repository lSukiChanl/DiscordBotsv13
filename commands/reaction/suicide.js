
module.exports = {
    name: "suicide",
    aliases: ["suicidio"],
    description:"Reaction Anime Suicide/Suicidio",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*55);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.addField(" ๐ ๐๐๐ฅ๐จ๐ซ๐๐ญ๐ ๐๐ง๐ข๐ข-๐๐ก๐๐ง ๐ ", "๐๐ ๐ฏ๐ข๐๐ ๐๐ฌ ๐๐๐ซ๐ฆ๐จ๐ฌ๐ ๐ฒ ๐๐๐ง๐ก๐๐ซ๐-๐๐ก๐๐ง ๐๐ ๐๐ฎ๐ข๐๐ซ๐ ๐๐ฎ๐๐ก๐จ \n " + message.author.username + " ๐๐ง ๐๐๐ฌ๐ข๐ญ๐จ ๐๐๐ซ๐ ๐๐ข \n (ไบบยด3๏ฝ)โโก ๐ฐ๐ต๐๐โฅ  ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Cuddle/Cuddle"+NumMagic+".gif");
                embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};