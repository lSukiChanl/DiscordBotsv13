module.exports = {
    name: "menhera",
    aliases: ["menhera-chan","kurumi","kurumi-chan"],
    description:"Ver un Meme Random",
    async execute (client, message, args, discord){

        const Creditos = process.env.AUTHOR;
        const Version = process.env.VERSION;
        const Author = process.env.NOMBREAUTOR;
        const Icon = process.env.ICONURL;
        const Url = process.env.URL;

        try {
            let NumMagic = Math.floor(Math.random()*968);
            NumMagic = NumMagic + 1;
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐝𝐞 𝐌𝐞𝐧𝐡𝐞𝐫𝐚 𝐑𝐚𝐧𝐝𝐨𝐦 " + NumMagic + " / "+"969... ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Menhera/Menhera"+NumMagic+".png")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};