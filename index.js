console.log('El bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'hola') {
		message.channel.sendMessage('Hola ! ');
	}
	if (message.content == 'quien es el mas pto?') {
		message.channel.sendMessage('Bilbo');
	}
	if (message.content == 'info geobot') {
		message.channel.sendMessage('Soy solo una prueba pto nano :v');
	}
	if (message.content == 'que agradable sujeto') {
		message.channel.sendMessage(':grin:');
	}
});
bot.login('NDE1MzM2NjIxMzUzODYxMTIy.DW0lrg.CAr8vkcPoKdc6njfxkLCjOmhYcY'); 