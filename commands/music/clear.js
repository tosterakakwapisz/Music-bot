module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Ale teraz ${message.author} nie puszcza piosenki... Spróbować ponownie? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Brak piosenek w bieżącej kolejce ${message.author}... Spróbować ponownie? ❌`);

        await queue.clear();

        message.channel.send(`Wyczyściłem cała kolekę, pff łatwe zadanie 🗑️`);
    },
};