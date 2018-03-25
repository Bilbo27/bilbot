const Discord = require('discord.js');
const client = new Discord.Client();

const botSettings = require('./botsettings.json');
const prefix = botSettings.prefix;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
	
	if (message.content == 'hola') {
		message.channel.sendMessage('Hola ! :grin: ');
		
	}
	if (message.content == 'quien es el mas pto?') {
		message.channel.sendMessage('Bilbo :speaking_head: ');
	}
	if (message.content == 'info almabot') {
		message.channel.sendMessage('Aun estoy en pruebas');
	}
});



// THIS  MUST  BE  THIS  WAY
client.login(botSettings.token);