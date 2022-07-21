
module.exports = {
    name: "pray",
    aliases: ["rezar", "rezando", "orando"],
    description:"Reaction Anime Angry/Molesto",
    
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
                embed.setDescription(" "+message.author.username + " 𝐋𝐞 𝐄𝐬𝐭𝐚 𝐑𝐞𝐳𝐚𝐧𝐝𝐨 𝐚 𝐃𝐢𝐨𝐬𝐢𝐭𝐨 (𝐀𝐦𝐞𝐧) " )
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Pray/Pray"+NumMagic+".gif");
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};