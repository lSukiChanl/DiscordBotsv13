module.exports = {
    name: "say",
    aliases: ["decir","di"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){

        try {
            let Texto = args.join(" ");
            message.channel.send(Texto);
            message.delete()
            .catch(error =>
                message.reply(({embed: {
                    color: 15158332,
                    description: "šššš ššššššššš ššššššššššššš šššššššš \nššš šššš ššššššššššššš"
                }})
                )
            );
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};