
module.exports = {
    name: "thanks",
    aliases: ["gracias"],
    description:"Interaction Anime Birthday/CumpleaΓ±os",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*6);
            NumMagic = NumMagic + 1;
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " ππ¬π­π ππ π«πππππ’ππ¨ ππ¨π§ ππ₯ ππ ππ«π«π’ππ ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Thanks/Thanks"+NumMagic+".gif")
                embed.setFooter({text: " ππ«πππ’π­π¨π¬ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()      
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + "\n ππ ππ π₯ππ¬ ππ«πππ’ππ¬ π : "+member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Thanks/Thanks"+NumMagic+".gif")
            embed.setFooter({text: " ππ«πππ’π­π¨π¬ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};