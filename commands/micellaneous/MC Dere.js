module.exports = {
    name: "dere",
    aliases: ["mcdere"],
    description:"Comando para saber que tipos de Dere existen",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " Āæšš®š¢šš«šš¬ ššššš« š„šØš¬ šš¢š©šØš¬ šš ššš«š šŖš®š ššš²? \nššŖš®Ć­ š„š ššš¬š©š®šš¬š­š Źā¢Ģį“„ā¢ĢŹć£  ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Dere/Dere1.jpg");
            embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};

