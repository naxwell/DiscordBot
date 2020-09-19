const Discord = require('discord.js');

const castEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Cast!')
    //.setURL('https://discord.js.org/')
    //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription('Summon to yourself all the magics available and conjure... I dunno, whatever you want, MAGIC!')
    //
    .setThumbnail('https://media.tenor.com/images/3485276e2fbb30a575f86bc60563bce5/tenor.gif')
    .addFields(
        { name: 'Regular Effect', value: 'Some value here' },
        { name: 'Critical Success', value: 'Some value here' },
        { name: 'Critical Failure', value: 'Some value here' },
    )
    //.addField('Inline field title', 'Some value here', true)
   // .setImage('https://i.imgur.com/wSTFkRM.png')
    //.setTimestamp()
    .setFooter('Companions!');

module.exports = {
    name: 'cast',
    description: 'cast a spell',
    execute(message, args) {
        var result = 'Summon to yourself all the magics available and conjure... I dunno, whatever you want, MAGIC!';
        message.channel.send(castEmbed);
    }
}
