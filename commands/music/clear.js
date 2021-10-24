module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nic nie jest grane ${message.author}... Chcesz spróbować ponownie? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Kolejka pusta poza obecnie graną piosenką ${message.author}... Chcesz spróbować ponownie? ❌`);

        await queue.clear();

        message.channel.send(`Kolejka została wyczyszczona 🗑️`);
    },
};