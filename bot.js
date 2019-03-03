const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTUxNTc4MDI0MjQwMjE4MTQz.D115Fw.TAsKR0307kqANDQEYC4vELFpO8Q);//BOT_TOKEN is the Client Secret