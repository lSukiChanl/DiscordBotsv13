module.exports = {
    name: "ping",
    description:"Tiempo de Respuesta",
    async execute (client, interaction) {

        try {
            interaction.channel.send({content: `Usuario mencionado`})
        } catch (error) {
            console.log("Error en sc: " + error);
            return interaction.reply({ content: "Faltan datos" });
        }
    }
};