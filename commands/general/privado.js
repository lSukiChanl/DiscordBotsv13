module.exports = {
    name: "privado",
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
                embed.setTitle("🎀 🎀 🎀 🎀 🎀 𝐂𝐚𝐢𝐬𝐭𝐞 🎀 🎀 🎀 🎀 🎀")
                embed.setThumbnail("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/MenheraAngel001.png")
                embed.setURL("https://discord.gg/BRq5QGw")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Privado/Circulo.jpg")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
                message.reply(" 𝐓𝐞 𝐀𝐜𝐚𝐛𝐨 𝐝𝐞 𝐄𝐧𝐯𝐢𝐚𝐫 𝐮𝐧𝐚 𝐒𝐨𝐫𝐩𝐫𝐞𝐬𝐚 𝐚𝐥 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 :heartpulse: ")
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};