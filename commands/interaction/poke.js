
module.exports = {
    name: "poke",
    aliases: ["picar", "molestar", "fastidiar"],
    description:"Interaction Anime Birthday/Cumpleaรฑos",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*47);
            NumMagic = NumMagic + 1;
            if (!member){return message.channel.send(" ๐๐จ ๐๐ข๐๐ง๐ญ๐จ ๐๐ง๐ข๐ข-๐๐ก๐๐ง ๐๐๐ซ๐จ ๐๐๐๐๐ฌ ๐๐๐ง๐๐ข๐จ๐ง๐๐ซ ๐ ๐๐ฅ๐ ๐ฎ๐ข๐๐ง ");}

            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + "\n ๐๐๐ฌ๐ญ๐ข๐๐ข๐ ๐ : "+ member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Poke/Poke"+NumMagic+".gif");
            embed.setFooter({text: " ๐๐ซ๐๐๐ข๐ญ๐จ๐ฌ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};