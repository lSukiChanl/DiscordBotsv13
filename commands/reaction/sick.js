
module.exports = {
    name: "sick",
    aliases: ["enfermo"],
    description:"Reaction Anime Sick/Enfermo",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*25);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " ππ¬π­π ππ§πππ«π¦@ ο½‘οΎο½₯ (>οΉ<) ο½₯οΎο½‘  " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sick/Sick"+NumMagic+".gif");
                embed.setFooter({text: " ππ«πππ’π­π¨π¬ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};