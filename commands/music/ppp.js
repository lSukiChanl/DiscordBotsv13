const play = require("play-dl");
const ytdl = require("ytdl-core")

const {
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
} = require("@discordjs/voice");

module.exports = {
  name: "ppp",
  description: "Reproducir musica",
  async execute(client, message, args, discord) {
    //# Canal de voz
    let vc = message.member.voice.channel;
    //# Comprobaciones
    if (args.length < 1) {
      return message.channel.send("Tienes que indicar el nombre de la cancion");
    }

    if (!vc) {
      return message.channel.send("Tienes que estar en un canal de voz");
    }

    let ytInfo = await play.search(args.join(" "));
    //let stream = await play.stream('https://www.youtube.com/watch?v=2qoN4ED3VS8');

    const connection = joinVoiceChannel({
      channelId: vc.id,
      guildId: message.guildId,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    const stream = ytdl('https://www.youtube.com/watch?v=2qoN4ED3VS8', { filter : 'audioonly' });


    const resource = createAudioResource(stream, {
      inputType: stream.type,
    });

    const player = createAudioPlayer();
    player.play(resource);
    connection.subscribe(player);

    player.on("error", (error) => {
      console.error(
        `Error: ${error.message} with resource ${error.resource.metadata.title}`
      );
      player.play(getNextResource());
    });
  },
};