
module.exports = {
    name: "wow",
    aliases: ["woow", "wooow"],
    description:"Reaction Anime WOW",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*23);
            NumMagic = NumMagic + 1;            
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐒𝐨𝐫𝐩𝐫𝐞𝐧𝐝𝐢𝐝@ (⊙_⊙) " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/WOW/WOW"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};