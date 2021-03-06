
module.exports = {
    name: "birthday",
    aliases: ["cumpleaรฑos", "fiesta", "party"],
    description:"Interaction Anime Birthday/Cumpleaรฑos",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;            
            
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*3);
            NumMagic = NumMagic + 1;
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " ๐๐๐ฅ๐ข๐ณ ๐๐ฎ๐ฆ๐ฉ๐ฅ๐๐รฑ๐จ๐ฌ ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Birthday/Birthday"+NumMagic+".gif")
                embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()    
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " \n ๐๐ ๐๐๐ฌ๐๐ ๐๐๐ฅ๐ข๐ณ ๐๐ฎ๐ฆ๐ฉ๐ฅ๐๐รฑ๐จ๐ฌ ๐ "+member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Birthday/Birthday"+NumMagic+".gif")
            embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};