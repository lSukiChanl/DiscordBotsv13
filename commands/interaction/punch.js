
module.exports = {
    name: "punch",
    aliases: ["golpe", "golpear", "puÃ±etazo"],
    description:"Interaction Anime Puch/Golpear",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*48);
            NumMagic = NumMagic + 1;
            if (!member){return message.channel.send(" ðð¨ ðð¢ðð§ð­ð¨ ðð§ð¢ð¢-ðð¡ðð§ ððð«ð¨ ððððð¬ ððð§ðð¢ð¨ð§ðð« ð ðð¥ð ð®ð¢ðð§ ");}

            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + "\n ðð ðð¢ð¨ ðð§ ðð¨ð¥ð©ð ð : "+ member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Punch/Punch"+NumMagic+".gif");
            embed.setFooter({text: " ðð«ððð¢ð­ð¨ð¬ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};