
module.exports = {
    name: " ==========> Reaction Commands <==========",
    aliases: ["==========> Reaction Commands <=========="],
    description:"Reaction Anime Angry/Molesto",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;

            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};