const Discord = require('discord.js');

const gossipEmbed = new Discord.MessageEmbed()
    .setColor('#ff00fb')
    .setTitle('Gossip!')
    //.setURL('https://discord.js.org/')
    .setDescription('You look like you have friends in low places. Access the whisper network to find out information about a target.')
    //.setThumbnail('https://media.tenor.com/images/3485276e2fbb30a575f86bc60563bce5/tenor.gif')
    //.addField(' ** 1 - 6 ** target not found \n ** 7 - 10 ** GM provides information, but in vague terms.People may hear that you’re asking around.\n ** 10 +** Ask three questions, two will be answered truthfully., true)
    .addFields(
        {name: 'Regular Effect',  value: '**1-6** target not found \n **7-10**  GM provides information, but in vague terms. People may hear that you’re asking around.  \n **10+** Ask three questions, two will be answered truthfully.' },
        { name: 'Critical Success', value: 'Ask 2 questions, they will be asnwered truthfull. Provide a rumour about the target that will hencforth be believed as true' },
        { name: 'Critical Failure', value: 'You discover a terrible rumour has been circulating about yourself' },
    )
    //.addField('Inline field title', 'Some value here', true)
    .setImage('https://media.giphy.com/media/ZErmptaZPGQQXeO2Lw/source.gif')
    //.setTimestamp()
    .setFooter('CompanionsRPG');

module.exports = {
    name: 'gossip',
    description: 'access the whisper network',
    execute(message, args) {
        
        message.channel.send(gossipEmbed);
    }
}
