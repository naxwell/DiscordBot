module.exports = {
    name: 'rolld6',
    description: 'Roll a D6',
    execute (message, args) {
        var result = Math.floor(Math.random() * 6) + 1;
        message.channel.send(result);
    }
}