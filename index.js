console.log('El bot esta listo');
const botSettings = require('./botsettings.json');
const Discord = require('discord.js');
const prefix = botSettings.prefix;

//const bot = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`El bot esta listo! ${bot.user.username}`);
	
	try {
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});	

	
bot.on('message', async message => {
	
	if (message.author.bot) return;
	if (message.channel.type == "dm") return;
	
	let messageArray = message.content.split("	");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	
	if (!command.startsWith(prefix)) return;
	
	if (command === `${prefix}userinfo`) {
		let embed = new Discord.RichEmbed()
			.setAuthor(message.author.username)
			.setDescription("This is the user's info!")
			.setColor("#9B59B6")
			.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
			.addField("ID", message.author.id)
			.addField("Created At", message.author.createdAt);
			
		message.channel.sendEmbed(embed);
		return;	
	}
	
	
});


bot.on('message', async message => {
	
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
//bot.login('NDE2NDIyMjcyNDY3OTkyNTg3.DXEPBw.1uNZFrViwOosX18W_MdB7Z2LDSs'); 
bot.login(botSettings.token);