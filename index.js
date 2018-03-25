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
	bot.user.setGame('pokemonrevolution.net');
	
	if (message.content == 'hola') {
		message.channel.sendMessage('Hola ! :grin: ');
	}
	if (message.content == 'quien es el mas pto?') {
		message.channel.sendMessage('Bilbo :speaking_head: ');
	}
	if (message.content == '!tm earthquake') {
		message.channel.sendMessage('**TM26**');
		message.channel.sendMessage('```  + Viridian City Gym - $6,000 - Special Offer: 5 for $24,000 ```');
		message.channel.sendMessage('```  + Bruno Boss Battle Reward ```');
	}
	if (message.content == '!tm thunderbolt') {
		message.channel.sendMessage('**TM24**');
		message.channel.sendMessage('```  + Vermilion City Gym - $3,000 - Special Offer: 5 for $12,000 ```');
		message.channel.sendMessage('```  + Mauville City Game Corner - $5,000 ```');
	}
	if (message.content == '!tm psyshock') {
		message.channel.sendMessage('**TM53**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
	}
	if (message.content == '!tm icebeam') {
		message.channel.sendMessage('**TM13**');
		message.channel.sendMessage('```  + Mahogany City Gym - $4,000 - Special Offer: 5 for $16,000 ```');
		message.channel.sendMessage('```  + Lorelei Boss Battle Reward ```');
		message.channel.sendMessage('```  + Mauville City Game Corner - $5,000 ```');
	}
	if (message.content == '!tm bodyslam') {
		message.channel.sendMessage('**TM08**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
		message.channel.sendMessage('```  + Goldenrod Mart - $1,500 ```');
		message.channel.sendMessage('```  + Por tutor en Saffron Dojo - $15,000 ```');
	}
	if (message.content == '!tm overheat') {
		message.channel.sendMessage('**TM100**');
		message.channel.sendMessage('```  + Lavaridge Town Gym - $7,000 - Special Offer: 5 for $28,000 ```');
	}
	if (message.content == '!tm reflect') {
		message.channel.sendMessage('**TM33**');
		message.channel.sendMessage('```  + Goldenrod Mart - $3,000 ```');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $5,500 ```');
	}
	if (message.content == '!tm whirlwind') {
		message.channel.sendMessage('**TM04**');
		message.channel.sendMessage('```  + Celadon Mart - $2,000 ```');
	}
	if (message.content == '!tm razorwind') {
		message.channel.sendMessage('**TM02**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
		message.channel.sendMessage('```  + Goldenrod Mart - $2,500 ```');
	}
	if (message.content == '!tm mega punch') {
		message.channel.sendMessage('**TM01**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
	}
	if (message.content == '!tm mega kick') {
		message.channel.sendMessage('**TM05**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
		message.channel.sendMessage('```  + Dig Spot Route 4 ```');
		message.channel.sendMessage('```  + Por tutor en Route 4 - $2,000 ```');
	}
	if (message.content == '!tm toxic') {
		message.channel.sendMessage('**TM06**');
		message.channel.sendMessage('```  + Fuchsia City Gym - $2,000 - Special Offer: 5 for $8,000 ```');
	}
	if (message.content == '!tm take down') {
		message.channel.sendMessage('**TM09**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
		message.channel.sendMessage('```  + Mt. Moon 1F gratis cada cierto tiempo ```');
	}
	if (message.content == '!tm blizzard') {
		message.channel.sendMessage('**TM14**');
		message.channel.sendMessage('```  + Goldenrod Mart - $5,500 ```');
		message.channel.sendMessage('```  + Lorelei Boss Battle Reward ```');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $5,500 ```');
	}
	if (message.content == '!tm hyperbeam') {
		message.channel.sendMessage('**TM15**');
		message.channel.sendMessage('```  + Goldenrod Mart - $7,500 ```');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $5,500 ```');
	}
	if (message.content == '!tm seismic toss') {
		message.channel.sendMessage('**TM19**');
		message.channel.sendMessage('```  + Por tutor en Pewter City - $2,000 ```');
	}
	if (message.content == '!tm mega drain') {
		message.channel.sendMessage('**TM21**');
		message.channel.sendMessage('```  + Celadon City Gym - $1,500 - Special Offer: 5 for $6,000 ```');
	}
	if (message.content == '!tm giga drain') {
		message.channel.sendMessage('```  + Por tutor en Viridian Maze - $7,500 (Despues de haber derrotado al Boss: Erika) ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $7,500 ```');
	}
	if (message.content == '!tm solarbeam') {
		message.channel.sendMessage('**TM22**');
		message.channel.sendMessage('```  + Goldenrod Mart - $4,000 ```');
		message.channel.sendMessage('```  + Erika Boss Battle Reward ```');
	}
	if (message.content == '!tm thunder') {
		message.channel.sendMessage('**TM25**');
		message.channel.sendMessage('```  + Goldenrod Mart - $5,500 ```');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $5,000 ```');
		message.channel.sendMessage('```  + Lt. Surge Boss Battle Reward ```');
	}
	if (message.content == '!tm dig') {
		message.channel.sendMessage('**TM28**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
		message.channel.sendMessage('```  + Route 36 Smuggler - $5,000 ```');
		message.channel.sendMessage('```  + Lilycove Mart - $4,000 ```');
		message.channel.sendMessage('```  + Dig Spot Route 114 ```');
	}
	if (message.content == '!tm scald') {
		message.channel.sendMessage('**TM105**');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $8,000 ```');
		message.channel.sendMessage('```  + Veilstone Dept Store - $8,000 ```');
	}
	if (message.content == '!tm softboiled') {
		message.channel.sendMessage('**TM41**');
		message.channel.sendMessage('```  + Goldenrod Mart - $3,000 ```');
		message.channel.sendMessage('```  + Por tutor en Celadon City - $15,000 ```');
	}
	if (message.content == '!tm light screen') {
		message.channel.sendMessage('**TM66**');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $6,000 ```');
	}
	if (message.content == '!tm thunder wave') {
		message.channel.sendMessage('**TM45**');
		message.channel.sendMessage('```  + Celadon Mart - $2,000 ```');
		message.channel.sendMessage('```  + Por tutor en Silph Co. - $15,000 ```');
	}
	if (message.content == '!tm iron head') {
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Olivine City Gym - $10,000 ```');
	}
	if (message.content == '!tm brick break') {
		message.channel.sendMessage('**TM81**');
		message.channel.sendMessage('```  + Trainers Valley - $7,500 ```');
	}
	if (message.content == '!tm psychic') {
		message.channel.sendMessage('**TM29**');
		message.channel.sendMessage('```  + Saffron City Gym - $3,000 - Special Offer: 5 for $12,000 ```');
		message.channel.sendMessage('```  + Mauville City Game Corner - $5,000 ```');
	}
	if (message.content == '!tm egg bomb') {
		message.channel.sendMessage('**TM37**');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $3,000 ```');
	}
	if (message.content == '!tm fire blast') {
		message.channel.sendMessage('**TM38**');
		message.channel.sendMessage('```  + Goldenrod Mart - $5,500 ```');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $5,000 ```');
		message.channel.sendMessage('```  + Slateport Outdoor Market - $5,000 ```');
	}
	if (message.content == '!tm dream eater') {
		message.channel.sendMessage('```  + Por tutor en Viridian City - $4,000 ```');
	}
	if (message.content == '!tm rest') {
		message.channel.sendMessage('**TM44**');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $6,000 ```');
		message.channel.sendMessage('```  + Vermilion City (Elder Maulana) - $6,000 - Special Offer: 5 for $24,000 ```');
	}
	if (message.content == '!tm sleep talk') {
		message.channel.sendMessage('**TM138**');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $7,000 ```');
	}
	if (message.content == '!tm psywave') {
		message.channel.sendMessage('**TM46**');
		message.channel.sendMessage('```  + Slateport Outdoor Market - $3,000 ```');
	}
	if (message.content == '!tm rock slide') {
		message.channel.sendMessage('**TM48**');
		message.channel.sendMessage('```  + Goldenrod Mart - $3,000 ```');
		message.channel.sendMessage('```  + Por tutor en Rock Tunnel - $5,000 ```');
	}
	if (message.content == '!tm draco meteor') {
		message.channel.sendMessage('```  + Por tutor en Dragons Shrine (After defeating Boss: Lance) - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
	}
	if (message.content == '!tm dragon claw') {
		message.channel.sendMessage('**TM52**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
		message.channel.sendMessage('```  + Goldenrod Mart - $8,000 ```');
		message.channel.sendMessage('```  + Mauville City Game Corner - $3,500 ```');
	}
	if (message.content == '!tm dragon pulse') {
		message.channel.sendMessage('```  + Por tutor en Blackthorn City Gym - $10,000 ```');
	}
	if (message.content == '!tm calm mind') {
		message.channel.sendMessage('**TM54**');
		message.channel.sendMessage('```  + Trainers Valley - $5,000 ```');
		message.channel.sendMessage('```  + Mossdeep City Gym - $2,000 - Special Offer: 5 for $10,000 ```');
	}
	if (message.content == '!tm roar') {
		message.channel.sendMessage('**TM55**');
		message.channel.sendMessage('```  + Celadon Mart - $2,000 ```');
		message.channel.sendMessage('```  + Route 114 - $2,000 - Special Offer: 5 for $8,000 ```');
	}
	if (message.content == '!tm hail') {
		message.channel.sendMessage('**TM57**');
		message.channel.sendMessage('```  + Celadon Mart - $2,000 ```');
	}
	if (message.content == '!tm bulk up') {
		message.channel.sendMessage('**TM58**');
		message.channel.sendMessage('```  + Dewford Town Gym - $2,500 - Special Offer: 5 for $10,000 ```');
		message.channel.sendMessage('```  + Veilstone Dept Store - $3,500 ```');
	}
	if (message.content == '!tm swords dance') {
		message.channel.sendMessage('**TM75**');
		message.channel.sendMessage('```  + Trainers Valley - $5,000 ```');
	}
	if (message.content == '!tm hidden power') {
		message.channel.sendMessage('**TM60**');
		message.channel.sendMessage('```  + Slateport Outdoor Market - $4,000 ```');
	}
	if (message.content == '!tm sunny day') {
		message.channel.sendMessage('**TM61**');
		message.channel.sendMessage('```  + Celadon Mart - $2,000 ```');
	}
	if (message.content == '!tm taunt') {
		message.channel.sendMessage('**TM62**');
		message.channel.sendMessage('```  + Celadon Mart - $2,000 ```');
	}
	if (message.content == '!tm paint split') {
		message.channel.sendMessage('```  + Por tutor en Heaven - $4,500 ```');
		message.channel.sendMessage('```  + Por tutor en Pokemon Tower 6F - $4,500 ```');
	}
	if (message.content == '!tm protect') {
		message.channel.sendMessage('**TM67**');
		message.channel.sendMessage('```  + Trainers Valley - $5,500 ```');
		message.channel.sendMessage('```  + Veilstone Dept Store - $6,000 ```');
	}
	if (message.content == '!tm rain dance') {
		message.channel.sendMessage('**TM68**');
		message.channel.sendMessage('```  + Celadon Mart - $2,000 ```');
	}
	if (message.content == '!tm roost') {
		message.channel.sendMessage('**TM69**');
		message.channel.sendMessage('```  + Trainers Valley - $6,000 ```');
	}
	if (message.content == '!tm shadow ball') {
		message.channel.sendMessage('**TM80**');
		message.channel.sendMessage('```  + Morty Boss Battle Reward ```');
		message.channel.sendMessage('```  + Celadon Daily Quest Reward ```');
		message.channel.sendMessage('```  + Lilycove Department Store 3F $4,000 ```');
	}
	if (message.content == '!tm flamethower') {
		message.channel.sendMessage('**TM85**');
		message.channel.sendMessage('```  + Cinnabar Gym - $3,000 - Special Offer: 5 for $12,000 ```');
		message.channel.sendMessage('```  + Mauville City Game Corner - $5,000 ```');
	}
	if (message.content == '!tm sludge bomb') {
		message.channel.sendMessage('**TM86**');
		message.channel.sendMessage('```  + Dewford Town - $5,000 - Special Offer: 5 for $20,000 (pre-req 5 Hoenn badges) ```');
	}
	if (message.content == '!tm sand storm') {
		message.channel.sendMessage('**TM87**');
		message.channel.sendMessage('```  + Celadon Mart - $2,000 ```');
		message.channel.sendMessage('```  + Goldenrod Mart $2,000 ```');
		message.channel.sendMessage('```  + Slateport Outdoor Market - $3,500 ```');
	}
	if (message.content == '!tm rock tomb') {
		message.channel.sendMessage('**TM89**');
		message.channel.sendMessage('```  + Rustboro Gym - $3,000 - Special Offer: 5 for $12,000 ```');
	}
	if (message.content == '!tm thief') {
		message.channel.sendMessage('**TM96**');
		message.channel.sendMessage('```  + Celadon Mart Roof - $7,500 (Debe completarse la misión) ```');
	}
	if (message.content == '!tm false swipe') {
		message.channel.sendMessage('**TM104**');
		message.channel.sendMessage('```  + Route 48 - $4,000 - Special Offer: 5 for $16,000 ```');
		message.channel.sendMessage('```  + Lilycove Department Store 3F - $4,000 ```');
		message.channel.sendMessage('```  + Veilstone Dept Store - $4,000 ```');
	}
	if (message.content == '!tm will-o-wisp') {
		message.channel.sendMessage('**TM111**');
		message.channel.sendMessage('```  + Celadon Mart - $5,000 ```');
	}
	if (message.content == '!tm rock smash') {
		message.channel.sendMessage('**TM114**');
		message.channel.sendMessage('```  + Celadon Mart - $3,500 ```');
		message.channel.sendMessage('```  + Route 36 Smuggler - $5,000 ```');
		message.channel.sendMessage('```  + Mauville City House 2 - $5,000 ```');
		message.channel.sendMessage('```  + Oreburgh City House 2 - $5,000 ```');
		message.channel.sendMessage('```  + Veilstone Dept Store - $3,500 ```');
	}
	if (message.content == '!tm shadow claw') {
		message.channel.sendMessage('**TM115**');
		message.channel.sendMessage('```  + Morty Boss Battle Reward ```');
		message.channel.sendMessage('```  + Celadon Daily Quest Reward ```');
		message.channel.sendMessage('```  + Slateport Outdoor Market - $3,500 ```');
		message.channel.sendMessage('```  + Lt. Surge Boss Battle Reward ```');
	}
	if (message.content == '!tm volt switch') {
		message.channel.sendMessage('**TM122**');
		message.channel.sendMessage('```  + Mauville City Game Corner - $2,500 ```');
		message.channel.sendMessage('```  + Por tutor en New Mauville - $5,000 ```');
	}
	if (message.content == '!tm u-turn') {
		message.channel.sendMessage('**TM139**');
		message.channel.sendMessage('```  + Azalea Town Gym - $2,500 - Special Offer: 5 for $10,000 ```');
		message.channel.sendMessage('```  + Bugsy Boss Battle Reward ```');
	}
	if (message.content == '!tm ancient power') {
		message.channel.sendMessage('```  + Por tutor en Ruins of Alph - $3,500 (after finishing Pewter Museum questline) ```');
	}
	if (message.content == '!tm aqua tail') {
		message.channel.sendMessage('```  + Por tutor en Abandoned Ship Exterior - $7,000 ```');
	}
	if (message.content == '!tm bounce') {
		message.channel.sendMessage('```  + Por tutor en Lake of Rage - $4,000 ```');
	}
	if (message.content == '!tm bug bite') {
		message.channel.sendMessage('```  + Por tutor en Ilex Forest - $5,000 ```');
	}
	if (message.content == '!tm counter') {
		message.channel.sendMessage('```  + Por tutor en Celadon Mart - $5,000 ```');
	}
	if (message.content == '!tm dark pulse') {
		message.channel.sendMessage('```  + Por tutor en Lavaridge Mart - $9,000```');
		message.channel.sendMessage('```  + Por tutor en Ecruteak City - $15,000 ```');
	}
	if (message.content == '!tm double-edge') {
		message.channel.sendMessage('```  + Por tutor en Victory Road 2F - $9,000 ```');
	}
	if (message.content == '!tm covet') {
		message.channel.sendMessage('```  + Por tutor en Goldenrod City Gym - $10,000 ```');
	}
	if (message.content == '!tm drain punch') {
		message.channel.sendMessage('```  + Por tutor en Cianwood Gym - $10,000 ```');
	}
	if (message.content == '!tm dynamic punch') {
		message.channel.sendMessage('```  + Por tutor en Rustboro City Building 1 3F - $7,500 (quest requerida) ```');
	}
	if (message.content == '!tm earth power') {
		message.channel.sendMessage('```  + Por tutor en Tohjo Falls - $10,000 ```');
	}
	if (message.content == '!tm endeavor') {
		message.channel.sendMessage('```  + Por tutor en Violet City - $11,000 ```');
	}
	if (message.content == '!tm explosion') {
		message.channel.sendMessage('```  + Por tutor en Mineral Site - $20,000 (need 5,000 points) ```');
		message.channel.sendMessage('```  + Por tutor en Route 47 - $15,000 ```');
	}
	if (message.content == '!tm fire punch') {
		message.channel.sendMessage('```  + Por tutor en Route 42 Rockclimb - $4,500 ```');
		message.channel.sendMessage('```  + Por tutor en Fallarbor Town - $10,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $4,500 ```');
	}
	if (message.content == '!tm gunk shot') {
		message.channel.sendMessage('```  + Por tutor en Petalburg Woods - $9,000 ```');
	}
	if (message.content == '!tm headbutt') {
		message.channel.sendMessage('```  + Por tutor en Viridian Forest Maze - $2,000 ```');
		message.channel.sendMessage('```  + Por tutor en Ilex Forest - $1,000 ```');
	}
	if (message.content == '!tm heal bell') {
		message.channel.sendMessage('```  + Por tutor en Bell Tower Floor 7 - $16,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $16,000 ```');
	}
	if (message.content == '!tm heat wave') {
		message.channel.sendMessage('```  + Por tutor en Cinnabar Gym B1F - $8,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000```');
	}
	if (message.content == '!tm horn leech') {
		message.channel.sendMessage('```  + Por tutor en Eterna Forest (through the secret cave) - $15,000 ```');
	}
	if (message.content == '!tm hyper voice') {
		message.channel.sendMessage('```  + Por tutor en Route 28 - $8,000 ```');
	}
	if (message.content == '!tm hypnosis') {
		message.channel.sendMessage('```  + Por tutor en Lavender Town B12 - $12,000 ```');
	}
	if (message.content == '!tm icy wind') {
		message.channel.sendMessage('```  + Por tutor en Mahogany Town Shop - $12,000 ```');
		message.channel.sendMessage('```  + Por tutor en Seafoam B4F - $5,000 ```');
	}
	if (message.content == '!tm ice punch') {
		message.channel.sendMessage('```  + Por tutor en Route 42 Rock Climb - $4,500 ```');
		message.channel.sendMessage('```  + Por tutor en Johto Safari - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $4,500 ```');
	}
	if (message.content == '!tm iron tail') {
		message.channel.sendMessage('```  + Por tutor en Olivine City - $13,000 ```');
	}
	if (message.content == '!tm knock off') {
		message.channel.sendMessage('```  + Por tutor en Trainers Valley - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
	}
	if (message.content == '!tm low kick') {
		message.channel.sendMessage('```  + Por tutor en Golds Gym - $7,500 (Despues de derrotar al Boss: Chuck) ```');
	}
	if (message.content == '!tm magne rise') {
		message.channel.sendMessage('```  + Por tutor en Mt. Coronet Summit - $12,000 ```');
	}
	if (message.content == '!tm outrage') {
		message.channel.sendMessage('```  + Por tutor en Abandoned Ship Hoenn (Después de derrotar al Boss: Toothless) - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
	}
	if (message.content == '!tm seed bomb') {
		message.channel.sendMessage('```  + Por tutor en Johto Safari - $12,000 ```');
	}
	if (message.content == '!tm signal beam') {
		message.channel.sendMessage('```  + Por tutor en National Park Johto - $8,000 ```');
	}
	if (message.content == '!tm stealth rock') {
		message.channel.sendMessage('```  + Por tutor en Johto Safari Mountain Side - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
	}
	if (message.content == '!tm sucker punch') {
		message.channel.sendMessage('```  + Por tutor en Haunted Site excavation - $20,000 (need 5,000 points) ```');
	}
	if (message.content == '!tm super fang') {
		message.channel.sendMessage('```  + Por tutor en Natural Site excavation - $20,000 (need 5,000 points) ```');
	}
	if (message.content == '!tm superpower') {
		message.channel.sendMessage('```  + Por tutor en Cianwood City - $12,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $12,000 ```');
	}
	if (message.content == '!tm synthesis') {
		message.channel.sendMessage('```  + Por tutor en Route 218 - $12,000 ```');
	}
	if (message.content == '!tm tailwind') {
		message.channel.sendMessage('```  + Por tutor en Violet City Gym - $10,000 ```');
	}
	if (message.content == '!tm thunder punch') {
		message.channel.sendMessage('```  + Por tutor en Route 42 (Requiere un pokemon con Rock Climb) - $4,500 ```');
		message.channel.sendMessage('```  + Por tutor en Pokemon League Hoenn - $10,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $4,500 ```');
	}
	if (message.content == '!tm vacuum wave') {
		message.channel.sendMessage('```  + Por tutor en Cianwood City - $8,000 ```');
	}
	if (message.content == '!tm water pulse') {
		message.channel.sendMessage('```  + Cianwood City - $5,000 ```');
	}
	if (message.content == '!tm zen headbutt') {
		message.channel.sendMessage('```  + Por tutor en Slateport Outdoor Market - $8,000 ```');
	}
	if (message.content == '!tm acrobatics') {
		message.channel.sendMessage('```  + Por tutor en Fortree City - $15,000 ```');
	}
	if (message.content == '!tm aerial ace') {
		message.channel.sendMessage('```  + Por tutor en Route 16 - $15,000 ```');
	}
	if (message.content == '!tm avalanche') {
		message.channel.sendMessage('```  + Por tutor en Route 216 - $15,000 ```');
	}
	if (message.content == '!tm bullet seed') {
		message.channel.sendMessage('```  + Por tutor en Sinnoh Safari Area Zone 2 - $15,000 ```');
	}
	if (message.content == '!tm charge beam') {
		message.channel.sendMessage('```  + Por tutor en Celadon Gamecorner Stairs - $15,000 ```');
	}
	if (message.content == '!tm defog') {
		message.channel.sendMessage('```  + Por tutor en Violet School - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $8,000 ```');
	}
	if (message.content == '!tm dargon tail') {
		message.channel.sendMessage('```  + Por tutor en Dragons Den - $15,000 ```');
	}
	if (message.content == '!tm energy ball') {
		message.channel.sendMessage('```  + Por tutor en Eterna City Gym - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
	}
	if (message.content == '!tm flame charge') {
		message.channel.sendMessage('```  + Por tutor en Cinnabar Mansion 2 - $15,000 ```');
	}
	if (message.content == '!tm flash cannon') {
		message.channel.sendMessage('```  + Por tutor en Valley of Steel - $12,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
	}
	if (message.content == '!tm focus blast') {
		message.channel.sendMessage('```  + Por tutor en Veilstone City Gym - $12,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
	}
	if (message.content == '!tm focus punch') {
		message.channel.sendMessage('```  + Por tutor en Petalburg City - $15,000 ```');
	}
	if (message.content == '!tm frustation') {
		message.channel.sendMessage('```  + Por tutor en Sunyshore City - $15,000 ```');
	}
	if (message.content == '!tm giga impact') {
		message.channel.sendMessage('```  + Por tutor en Celadon Gamecorner Stairs - $30,000 ```');
	}
	if (message.content == '!tm grass knot') {
		message.channel.sendMessage('```  + Por tutor en Love Island (Inside of a House) - $10,000 ```');
	}
	if (message.content == '!tm gyro ball') {
		message.channel.sendMessage('```  + Por tutor en Cinnabar Lab Room 3 - $15,000 ```');
	}
	if (message.content == '!tm poison jab') {
		message.channel.sendMessage('```  + Por tutor en Kanto Safari Area 1 - $12,000 ```');
	}
	if (message.content == '!tm rock climb') {
		message.channel.sendMessage('```  + Por tutor en Fuchsia City House 1 - $15,000 ```');
	}
	if (message.content == '!tm slugde wave') {
		message.channel.sendMessage('```  + Por tutor en Celadon Game Corner Stairs - $15,000 ```');
	}
	if (message.content == '!tm steel wing') {
		message.channel.sendMessage('```  + Por tutor en Celadon Gamecorner Stairs - $15,000 ```');
	}
	if (message.content == '!tm stone edge') {
		message.channel.sendMessage('```  + Por tutor en Mt. Silver Lower Mountainside - $15,000 ```');
		message.channel.sendMessage('```  + Por tutor en Heaven - $15,000 ```');
	}
	if (message.content == '!tm wild charge') {
		message.channel.sendMessage('```  + Por tutor en Kanto Power Plant - $15,000 ```');
	}
	if (message.content == '!tm x-scissor') {
		message.channel.sendMessage('```  + Por tutor en National Park - $15,000 ```');
	}
	if (message.content == '!tm zap cannon') {
		message.channel.sendMessage('```  + Por tutor en Iron Island B1F L - $15,000 ```');
	}
	if (message.content == '!requisitos mew') {
		message.channel.sendMessage('	:hourglass: 350 horas de juego ');
		message.channel.sendMessage('	:trophy: Haber ganado la liga de kanto y derrotado a rojo ');
		message.channel.sendMessage('	:ok_hand: Dex completa de Kanto y tener avistados a los legendarios Moltres, Zapdos, Articuno');
		message.channel.sendMessage('	:muscle: Tener 71 evoluciones');
	}
	if (message.content == '!requisitos celebi') {
		message.channel.sendMessage('	:hourglass: 400 horas de juego ');
		message.channel.sendMessage('	:trophy: Haber ganado la liga de Johto');
		message.channel.sendMessage('	:ok_hand: Dex completa de Kanto, Johto y tener avistados a los legendarios');
		message.channel.sendMessage('	:muscle: Tener 121 evoluciones');
	}
	if (message.content == '!requisitos jirachi') {
		message.channel.sendMessage('	:hourglass: 120 horas de juego en la región de Hoenn');
		message.channel.sendMessage('	:trophy: Haber ganado la liga de Hoenn y haber realizado la quest de latios y latias');
		message.channel.sendMessage('	:ok_hand: Dex completa de hoenn excluyendo a los legendario ni castform y tener avistados a los pokemon de la región');
		message.channel.sendMessage('	:ok_hand: Tener capturados y avistados (los no capturables) a todos los pókemon de kanto y johto');
		message.channel.sendMessage('	:muscle: Tener 210 evoluciones');
	}
	if (message.content == '!requisitos heatran') {
		message.channel.sendMessage('	:hourglass: 150 horas de juego en sinnoh ');
		message.channel.sendMessage('	:trophy: Haber ganado la liga de sinnoh');
		message.channel.sendMessage('	:ok_hand: Tener un pokemon máximo de nivel 60 (Recomendación : llevar un Gyarados full ev en atk y spd nivel 60)');
	}
	if (message.content == '!requisitos latios' || message.content == '!requisitos latias') {
		message.channel.sendMessage('	:trophy: Haber ganado la liga de hoenn y tener capturado a Jirachi');
		message.channel.sendMessage('	:muscle: Tener 344 evoluciones');
	}
	if (message.content == 'xd' || message.content == 'xD' || message.content == 'XD' || message.content == 'Xd'){
		message.channel.sendMessage(':joy:');
	}
	if (message.content == '!comandos') {
		message.channel.sendMessage('```!tm				Colocar el ataque a consultar. Ejemplo: !tm earthquake \n'+'!requisitos		Colocar el legendario a consultar. Ejemplo !requisitos mew ```');
	}
	if (message.content == '!ranking') {
		message.channel.sendMessage(' :: '+message.author.name);

		 var url = 'https://www.pokemonrevolution.net/ranking.php';
		 

		
	}
	
	
	
	
	
});
//bot.login('NDE2NDIyMjcyNDY3OTkyNTg3.DXEPBw.1uNZFrViwOosX18W_MdB7Z2LDSs'); 
bot.login(botSettings.token);