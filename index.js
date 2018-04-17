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
	
	
	if (message.content == 'hola') {
		message.channel.sendMessage('Hola ! :grin: ');
	}
	if (message.content == 'quien es el mas pto?' || message.content == 'quien es el mas puto?') {
		message.channel.sendMessage('Bilbo :speaking_head: ');
	}
   if (message.content == 'quien es el mas ptazo?' || message.content == 'quien es el mas putazo?' || message.content == 'Quien es el mas putazo?') {
		message.channel.sendMessage('@El Pura Rabia#7833');
	}
  if (message.content.indexOf("!tm") != -1) {
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
	if (message.content == '!tm ice beam') {
		message.channel.sendMessage('**TM13**');
		message.channel.sendMessage('```  + Mahogany City Gym - $4,000 - Special Offer: 5 for $16,000 ```');
		message.channel.sendMessage('```  + Lorelei Boss Battle Reward ```');
		message.channel.sendMessage('```  + Mauville City Game Corner - $5,000 ```');
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
  }
  if (message.content.indexOf("!requisitos") != -1) {
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
  }
	if (message.content == 'xd' || message.content == 'xD' || message.content == 'XD' || message.content == 'Xd'){
		message.channel.sendMessage(':joy:');
	}
	if (message.content == '!canalyt') {
		message.channel.sendMessage('https://www.youtube.com/channel/UC2OWt0YJOcZjyDhPNnfaZqA');	
	}
  
  if (message.content.indexOf("!legtutor") != -1) {
	if (message.content == '!legtutor') {
	    message.channel.sendMessage('**Ruinas alpha johto - Centro de investigación​ $20,000 por movimiento** \n ' + '  + Entei: Flare Blitz, Howl, Extreme Speed \n '+ '  + Suicune: Air Slash, Extreme Speed \n '+ '  + Raikou: Aura Sphere, Weather Ball, Extreme Speed \n '+'  + Celebi: Nasty Plot \n '  + 'Completar la quest previamente : \n https://pokemonrevolution.net/forum/index.php?threads/the-legendary-trio-legendary-dogs-event-moves-quest-legendary-beast-tutor.64772/');		
	}
	if (message.content == '!legtutor entei') {
	    message.channel.sendMessage('**Ruinas alpha johto - Centro de investigación​ (donde está el boss ELM)​ $20,000 por movimiento** \n ' +  '  + Movimientos que aprende: Flare Blitz, Howl, Extreme Speed \n ' + 'Completar la quest previamente : \n https://pokemonrevolution.net/forum/index.php?threads/the-legendary-trio-legendary-dogs-event-moves-quest-legendary-beast-tutor.64772/');		
	}
	if (message.content == '!legtutor suicune') {
	    message.channel.sendMessage('**Ruinas alpha johto - Centro de investigación​ (donde está el boss ELM)​ $20,000 por movimiento** \n ' +  '  + Movimientos que aprende: Air Slash, Extreme Speed \n ' + 'Completar la quest previamente : \n https://pokemonrevolution.net/forum/index.php?threads/the-legendary-trio-legendary-dogs-event-moves-quest-legendary-beast-tutor.64772/');		
	}
	if (message.content == '!legtutor raikou') {
	    message.channel.sendMessage('**Ruinas alpha johto - Centro de investigación​ (donde está el boss ELM)​ $20,000 por movimiento** \n ' +  '  + Movimientos que aprende: Aura Sphere, Weather Ball, Extreme Speed \n ' + 'Completar la quest previamente : \n https://pokemonrevolution.net/forum/index.php?threads/the-legendary-trio-legendary-dogs-event-moves-quest-legendary-beast-tutor.64772/');		
	}
	if (message.content == '!legtutor celebi') {
	    message.channel.sendMessage('**Ruinas alpha johto - Centro de investigación (donde está el boss ELM)​ $20,000 por movimiento** \n ' +  '  + Movimientos que aprende: Nasty Plot \n '  + 'Completar la quest previamente : \n https://pokemonrevolution.net/forum/index.php?threads/the-legendary-trio-legendary-dogs-event-moves-quest-legendary-beast-tutor.64772/');		
	}
  }
  if (message.content.indexOf("!boss") != -1) {
	if (message.content == '!boss boss') {
		var embed = new Discord.RichEmbed()
		.setDescription("Boss")
		.addField("Region","Kanto",true)
		.addField("Location","Isla Sevii 2",true)
		.addField("Cooldown","15 days")
		.addField("Requirement/s","6 level 100 pokemon, 200 hours playtime")
		.addField("Team"," Mega Mewtwo X (Psycho Cut, Close Combat, Recover, Psych Up) \n Primal Groundon (Earthquake, Flamethrower, Swords Dance, Thunder Punch) \n XD001 (Cosmic Power, Aeroblast, Psyshock, Roar) \n Primal Kyogre (Surf, Thunder, Ice Beam, Calm Mind) \n Mega Latios (Calm Mind, Stored Power, Recover, Dragon Pulse) \n Mega Rayquaza (Dragon Dance, Outrage, Roost, Extreme Speed)")
		.addField("Possible Rewards","$60000-125000, 10x Rare Candy, 10x PP Up, 10x Focus Sash, 50x Ultra Ball, Assault Vest, 1x Weakness Policy, Eviolite, Master Ball, Dratini, Larvitar, Bagon, Beldum, Goomy, Gible, 25 % chance for Phione")
		.addField("Third Rewards","Dratini, Larvitar, Bagon, Beldum, Goomy, Gible, Small MS Medalion")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/YWeLpi_6cdV_AzGaomiS331B933bO1A_8Z-CrW4zlg0/https/reborn-pro.tk/files/Forum/Boss.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss brock') {
		var embed = new Discord.RichEmbed()
		.setDescription("Brock")
		.addField("Region","Kanto",true)
		.addField("Location","Digletts Cave",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","1 level 100 pokemon, 150 hours playtime")
		.addField("Team"," Steelix (Sandstorm, Dig, Stone Edge, Double Edge) \n Kabutops (Night Slash, Metal Sound, Ancient Power, Wring Out) \n Golem (Stone Edge, Explosion, Heavy Slam, Double Edge) \n Armaldo (X-Scissor, Slash, Rock Blast, Crush Claw) \n Rhyperior (Earthquake, Megahorn, Horn Drill, Rock Wrecker) \n Regirock (Zap Cannon, Hammer Arm, Stone Edge, Hyper Beam)")
		.addField("Possible Rewards","$60000-125000, 10x Rare Candy, 10x PP Up, 10x Focus Sash, 50x Ultra Ball, Assault Vest, 1x Weakness Policy, Eviolite, Master Ball, Dratini, Larvitar, Bagon, Beldum, Goomy, Gible, 25 % chance for Phione")
		.addField("Third Rewards","Omanyte, Kabuto, Aerodactyl, Anorith, Lileep")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/_WCoH7BYaTfF8tG3m9JCkdpdjS8r3CRHAaQeRnKScy4/https/walrosskastanie.tk/2017/10/oegJVgv.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss chuck') {
		var embed = new Discord.RichEmbed()
		.setDescription("Chuck")
		.addField("Region","Kanto",true)
		.addField("Location","Golds Gym (Saffron City)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","180 hours playtime, Johto Champion")
		.addField("Team","Machamp (Bulk Up, Cross Chop, Scary Face, Dynamic Punch) \n Mienshao (Wide Guard, Bounce, Aura Sphere, Reversal) \n Conkeldurr (Stone Edge, Superpower, Hammer Arm, Focus Punch) \n Infernape (Flare Blitz, Close Combat, Fire Spin, Acrobatics) \n Lucario (Aura Sphere, Close Combat, Extreme Speed, Dragon Pulse) \n Breloom (Dynamic Punch, Mind Reader, Sky Uppercut, Seed Bomb)")
		.addField("Possible Rewards","$3000-10000, 5x Focus Sash, Black Belt, Shroomish, Riolu, Timburr, Chimchar, Mienfoo")
		.addField("Third Rewards","Mienfoo, Riolu, Timburr, Chimchar")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/dJ-zW5o_MKzRuwW4IQ05Ho3u8Z-gXWhCbUnKhHKakUk/https/reborn-pro.tk/files/Forum/Chuck.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss guardian entei' || message.content == '!boss entei guardian') {
		var embed = new Discord.RichEmbed()
		.setDescription("Guardian Entei")
		.addField("Region","Kanto",true)
		.addField("Location","Route 25 Cave",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","All Kanto and Johto pokemon owned, 750 hours playtime")
		.addField("Team","Mega Charized Y (Roar, Flamethrower, Air Cutter, Roost) \n Talonflame (Brave Bird, Flare Blitz, Roost, Solar Beam) \n Emboar (Flame Charge, Earthquake, Stone Edge, Wild Charge) \n Entei (Sacred Fire, Solar Beam, Calm Mind, Sunny Day) \n Venusaur (Solar Beam, Ancient Power, Synthesis, Sludge Bomb) \n Machamp (Fissure, Dynamic Punch, Ice Punch, Stone Edge)")
		.addField("Possible Rewards","$50000-80000, 3x TM85 - Flamethrower, 3x TM100 - Overheat, 3x TM61 - Sunny Day, Smooth Rock, Choice Band, Entei (Si no lo tienes aun)")
		.addField("Fourth Rewards","Charmander, Bulbasaur, Fletchling, Tepig, Entei (Si no lo tienes aun)")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/AgPLQ9jfMzllPAs8kBQga6wiBjSZ0S6fvkjAYz65OAQ/https/walrosskastanie.tk/2017/10/ErRVAX8.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss erika') {
		var embed = new Discord.RichEmbed()
		.setDescription("Erika")
		.addField("Region","Kanto",true)
		.addField("Location","Viridian Maze",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon")
		.addField("Team","Ferrothorn (Iron Head, Payback, Flash Cannon, Explosion) \n Ludicolo (Growl, Astonish, Mega Drain, Nature Power) \n Volcarona (Heat Wave, Bug Buzz, Rage Powder, Hurricane) \n Shiftry (Nasty Plot, Feint Attack, Whirlwind, Leaf Storm) \n Torterra (Synthesis, Crunch, Giga Drain, Leaf Storm) \n Virizion (Quick Guard, Work Up, Leaf Blade, Close Combat)")
		.addField("Possible Rewards","$2500-8500, Sun Stone, Leaf Stone, Seedot, 2x TM22 - Solarbeam, 2x TM86 - Sludge Bomb, 5x Pomeg Berry, 5x Kelpsy Berry, 5x Qualot Berry, 5x Hondew Berry, 5x Grepa Berry, 5x Tomato Berry, Ferroseed, Larvesta")
		.addField("Third Rewards","Seedot, Ferroseed, Larvesta, Turtwig")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/4tWgGowH1AFsUOCU7N7rMAoqIrCWUEZRH207ikV6YBQ/https/reborn-pro.tk/files/Forum/Erika.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss george') {
		var embed = new Discord.RichEmbed()
		.setDescription("George")
		.addField("Region","Kanto",true)
		.addField("Location","Carcel(Pewter City)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Complete quest, 750 hours")
		.addField("Team","Arcanine (Wild Charge, Flare Blitz, Outrage, Roar) \n Stoutland (Yawn, Superpower, Wild Charge, Facade) \n Furfrou (Grass Knot, Surf, Zen Headbutt, U-Turn) \n Mega Houndoom (Dark Pulse, Fire Blast, Iron Tail, Thunder Fang) \n Manetric (Thunderbolt, Flame Burst, Signal Beam, Eerie Impulse) \n Lucario (Extreme Speed, Flash Cannon, Close Combat, Dark Pulse)")
		.addField("Possible Rewards","$25000-45000, 2x Toxic Orb, 2x Flame Orb, 2x Life Orb, Houndour, Electrike, Lillipup, Riolu, Furfrou")
		.addField("Third Rewards","Houndour, Electrike, Lillipup, Riolu, Furfrou")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/14YtmGxn-JFTqq6evnIxYNZZuUeRUtSFlI6ehVkfC48/https/reborn-pro.tk/files/Forum/George.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss team rocket' || message.content == '!boss rocket' || message.content == '!boss jessie' || message.content == '!boss james' || message.content == '!boss jessie/james') {
		var embed = new Discord.RichEmbed()
		.setDescription("Team Rocket")
		.addField("Region","Kanto",true)
		.addField("Location","Celadon City",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon, level 100 Pikachu")
		.addField("Team (Jessie)","Arbok (Coil, Gunk Shot, Sucker Punch, Seed Bomb) \n Dustox (Quiver Dance, Sludge Bomb, Bug Buzz, Roost) \n Yanmega (Air Slash, Giga Drain, Bug Buzz, Ancient Power) \n Porygon-Z (Tri Attack, Dark Pulse, Thunderbolt, Nasty Plot) \n Seviper (Sludge Bomb, Giga Drain, Sucker Punch, Flamethrower) \n Jellicent (Shadow Ball, Will-o-Wisp, Surf, Recover)")
		.addField("Team (James)","Weezing (Will-o-Wisp, Sludge Bomb, Flamethrower, Pain Split) \n Arcanine (Flare Blitz, Thunder Fang, Extreme Speed, Close Combat) \n Malamar (Psycho Cut, Knock Off, Aerial Ace, Hypnosis) \n Cacturne (Sucker Punch, Drain Punch, Low Kick, Seed Bomb) \n Amoonguss (Spore, Giga Drain, Sludge Bomb, Payback) \n Cofagrigus (Shadow Ball, Haze, Will-o-Wisp, Knock Off) \n")
		.addField("Possible Rewards","$10000-30000, Silver Disc, Wynaut, Frilish, Team Rocket Clothes, Foongus, Cacnea, Inkay")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://d1u5p3l4wpay3k.cloudfront.net/wiki_marriland/thumb/e/ed/TeamRocketAnime.png/92px-TeamRocketAnime.png?version=258a6105d29356438c42b9dae7ff8bc3")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss koichi') {
		var embed = new Discord.RichEmbed()
		.setDescription("Koichi")
		.addField("Region","Kanto",true)
		.addField("Location","Saffron Dojo",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Only level 100 pokemon in your team, 201 hours playtime")
		.addField("Team","Lucario (Dragon Pulse, Extreme Speed, Aura Sphere, Close Combat) \n Hitmontop (Detect, Endeavor, Wide Guard, Close Combat) \n Gallade (Stored Power, Protect, False Swipe, Close Combat) \n Poliwrath (Circle Throw, Mind Reader, Dynamic Punch, Bubblebeam) \n Pangoro (Taunt, Hammer Arm, Crunch, Sky Uppercut) \n Terrakion (Close Combat, Bulk Up, Stone Edge, Quick Guard)")
		.addField("Possible Rewards","$2500-10000, 5x Focus Sash, Hitmontop, Hitmonchan, Hitmonlee, Riolu, Pancham")
		.addField("Third Rewards","Hitmonlee, Hitmonlee, Hitmontop, Riolu, Pancham")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/CUzWePPHRXo8Z_BR3pSqnNforNiq08QqfzQ7O8iGCUg/https/reborn-pro.tk/files/Forum/Koichi.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss naero') {
		var embed = new Discord.RichEmbed()
		.setDescription("Naero")
		.addField("Region","Kanto",true)
		.addField("Location","Cerulean Cave B1F",true)
		.addField("Cooldown","12 days, 6 days (active MS)")
		.addField("Requirement/s","6 level 100 pokemon, 201 hours playtime")
		.addField("Team","Togekiss (Thunder Wave, Air Slash, Flamethrower, Roost) \n Snorlax (Crunch, Body Slam, Rest, Sleep Talk) \n Mr. Mime (Icy Wind, Psychic, Confuse Ray, Shadow Ball) \n Blissey (Seismic Toss, Softboiled, Thunder Wave, Flamethrower) \n Electivire (Thunder Punch, Cross Chop, Flamethrower, Ice Punch) \n Magmortar (Thunderbolt, Earthquake, Lava Plume, Focus Blast)")
		.addField("Reward","Unlocks Daycare Centers")
		.addField("Possible Rewards","Elekid, Magby, Munchlax, Cleffa, Igglybuff, Pichu, Bonsly, Tyrogue, Togepi, Smoochum, TM28 - Dig")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/HoXRap6TWVka0c_5Duj2ziIBSt69P772Nf3Wu4tI8es/https/reborn-pro.tk/files/Forum/Naero.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss nikola') {
		var embed = new Discord.RichEmbed()
		.setDescription("nikola")
		.addField("Region","Kanto",true)
		.addField("Location","Unknown Place (Trainers Valley)",true)
		.addField("Cooldown","21 days")
		.addField("Requirement/s","Not able to catch a legendary anymore")
		.addField("Team","Mewtwo (Stealth Rock, Toxic Spikes, Spikes, Zap Cannon) \n Mega Charizard X (Dragon Dance, Earthquake, Flare Blitz, Dragon Claw) \n Kyogre (Thunder Wave, Thunder, Ice Beam, Scald) \n Deoxys (Psychic, Ice Beam, Focus Blast, Energy Ball) \n Arceus (Swords Dance, Extreme Speed, Shadow Claw, Earthquake) \n Dragonite (Dragon Dance, Extreme Speed, Dragon Claw, Earthquake)")
		.addField("Possible Rewards","Recatch a legendary, you can't catch anymore")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/7s5aV9JJi1qTvJHzk3MulgOlDeW-ThPtXwo2OFAePrM/https/reborn-pro.tk/files/Forum/Nikola.png")
		
		message.channel.sendEmbed(embed);
	}
	
	if (message.content == '!boss oak') {
		var embed = new Discord.RichEmbed()
		.setDescription("Oak")
		.addField("Region","Kanto",true)
		.addField("Location","Cinnabar Lab Room 2",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon, 200 pokemon owned")
		.addField("Team","Tauros (Giga Impact, Thrash, Swagger, Take Down) \n Exeggutor (Psyshock, Egg Bomb, Leaf Storm) \n Mega Venusaur (Giga Drain, Earthquake, Sludge Bomb, Silver Wind) \n Arcanine (Bite, Thunder Fang, Roar, Extreme Speed) \n Kangaskhan (Reversal, Endure, Sucker Punch, Outrage) \n Dragonite (Hurricane, Dragon Dance, Hyper Beam)")
		.addField("Possible Rewards","$2000-10000, Miracle Seed, Charcoal, Mystic Water, Charmander, Bulbasaur, Squirtle, Kangaskhan")
		.addField("Third Rewards","Squirtle, Charmander, Bulbasaur, Kangaskhan, Dratini")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/i6jCOiRTipmihTXZtDbkImBz8pNS1u_bn1O8K3Ysmhs/https/reborn-pro.tk/files/Forum/Oak.png")
		
		message.channel.sendEmbed(embed);
	}
	
	if (message.content == '!boss shamac') {
		var embed = new Discord.RichEmbed()
		.setDescription("Shamac")
		.addField("Region","Kanto",true)
		.addField("Location","Carcel(Pewter City)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon, 200 hours playtime")
		.addField("Team #1","Latias (Draco Meteor, Psyshock, Energy Ball, Thunderbolt) \n Lapras (Surf, Ice Beam, Dragon Pulse, Psychic) \n Goodra (Sludge Bomb, Flamethrower, Brick Break, Draco Meteor) \n Mega Swampert (Ice Punch, Waterfall, Rock Slide, Earthquake) \n Cinccino (Focus Blast, Rock Blast, Bullet Seed, Knock Off) \n Mega Pidgeot (Heat Wave, Hurricane, Roost, Ominous Wind)")
		.addField("Team #2","Goodra (Sludge Bomb, Flamethrower, Brick Break, Draco Meteor) \n Mega Swampert (Ice Punch, Waterfall, Rock Slide, Earthquake) \n Latias (Draco Meteor, Psyshock, Energy Ball, Thunderbolt) \n Cinccino (Focus Blast, Rock Blast, Bullet Seed, Knock Off) \n Lapras (Surf, Ice Beam, Dragon Pulse, Psychic) \n Mega Pidgeot (Heat Wave, Hurricane, Roost, Ominous Wind)")
		.addField("Team #3","Swampert (Ice Punch, Waterfall, Rock Slide, Earthquake) \n Mega Pidgeot (Heat Wave, Hurricane, Roost, Ominous Wind) \n Goodra (Sludge Bomb, Flamethrower, Brick Break, Draco Meteor) \n Lapras (Surf, Ice Beam, Dragon Pulse, Psychic) \n Cinccino (Focus Blast, Rock Blast, Bullet Seed, Knock Off) \n Mega Latias (Draco Meteor, Psyshock, Energy Ball, Thunderbolt)")
		.addField("Possible Rewards","$10000-30000, 5x Rare Candy, 5x Focus Sash, 1x Dubious Disc, Shiny Pidgey, Lapras, Mudkip, Minccino, Goomy")
		.addField("Third Rewards","Lapras, Mudkip, Minccino, Goomy")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/XO8e-jA264H_kGQ9Cn0DPfwpylK6HVhMVsCOhqMW5U4/https/walrosskastanie.tk/2017/10/mxokfTV.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss shary/shaui' || message.content == '!boss shaui' || message.content == '!boss shary') {
		var embed = new Discord.RichEmbed()
		.setDescription("Shary/Shaui")
		.addField("Region","Kanto",true)
		.addField("Location","Love Island House 1",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon, no Fairy and Ice type pokemon, you can't leave the house, before you beat Shary and Shaui")
		.addField("Team (Shary)","Thundurus (Focus Blast, Grass Knot, Dark Pulse, Nasty Plot) \n Mega Lopunny (High Jump Kick, Return, Fire Punch, Frustration) \n Meloetta (Psychic, Hyper Voice, Focus Blast, Dazzling Gleam) \n Latias (Thunderbolt, Ice Beam, Draco Meteor, Recover) \n Jolteon (Thunderbolt, Signal Beam, Shadow Ball, Thunder Wave) \n Mega Audino (Dazzling Gleam, Protect, Fire Blast, Psychic)")
		.addField("Team (Shaui)","Mega Garchomp (Outrage, Earthquake, Fire Fang, Stone Edge) \n Quagsire (Scald, Earthquake, Curse, Ice Beam) \n Flygon (Earthquake, Outrage, Aerial Ace, Fire Punch) \n Cobalion (Close Combat, Iron Head, Giga Impact, Zen Headbutt) \n Luxray (Wild Charge, Ice Fang, Superpower, Fire Fang) \n Hydreigon (Dark Pulse, Draco Meteor, Superpower, Fire Blast)")
		.addField("Possible Rewards","$60000-95000, 2x TM115 - Shadow Claw, 2x TM85 - Flamethrower, 2x TM96 - Thief, 2x TM52 - Dragon Claw, 2x TM92 - Facade, 3x TM80 - Shadow Ball, 3x TM54 - Calm Mind, 3x TM62 - Taunt, 5x Rare Candy, 5x Dark Gem, Lunch Box, 5x Focus Sash, Goomy Hat, Eevee, Togepi, Marill, Pancham, Purrloin, Shinx, Buneary, Trapinch, Deino, Audino")
		.addField("Third Rewards","Eevee, Shinx, Deino, Audino, Trapinch, Buneary")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/RyjMzptRQyW4BX0gAePe33Ja68qqW3bHSSH51PqSVtM/https/walrosskastanie.tk/2017/10/XXwNyEH.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss the pumpkin king' || message.content == '!boss rey calabaza' || message.content == '!boss calabaza') {
		var embed = new Discord.RichEmbed()
		.setDescription("The Pumpkin King")
		.addField("Region","Kanto",true)
		.addField("Location","Route 6",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","1 level 100 pokemon")
		.addField("Team","Shuckle (Toxic, Rest, Stealth Rock, Stone Edge) \n Ludicolo (Surf, Ice Beam, Giga Drain, Synthesis) \n Rattata (Thunder Wave, Sucker Punch, Double-Edge, Wild Charge) \n Yanmega (Bug Buzz, Ancient Power, Air Slash, Psychic) \n Roserade (Toxic Spikes, Giga Drain, Sludge Bomb, Energy Ball) \n Bisharp (Swords Dance, Night Slash, Iron Head, Psycho Cut)")
		.addField("Reward","Unlock the berry shop in Goldenrod City")
		.addField("Possible Rewards","Shuckle, Shiny Stone, Lotad, Pawniard")
		.addField("Third Rewards","Shuckle, Lotad, Pawniard")

		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/aLTJjIheL00hkjzZn1Dr3SdoPkUsvb1F8BeCJ3k6vvI/https/reborn-pro.tk/files/Forum/The%2520Pumpkin%2520King.png?width=80&height=72")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss bruno') {
		var embed = new Discord.RichEmbed()
		.setDescription("Bruno")
		.addField("Region","Johto",true)
		.addField("Location","Mt. Mortar Lower Cave",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon")
		.addField("Team","Hariyama (Heavy Slam, Endure, Reversal, Close Combat) \n Scrafty (Head Smash, Focus Punch, Rock Climb, Facade) \n Medicham (Reversal, Acupressure, Recover, Power Trick) \n Throh (Reversal, Superpower, Wide Guard, Endur) \n Sawk (Reversal, Close Combat, Endure, Quick Guard) \n Mega Steelix (Heavy Slam, Earthquake, Stone Edge, Toxic)")
		.addField("Possible Rewards","5x Focus Sash, TM 26 - Earthquake, Meditite, Sawk, Throh, Scraggy")
		.addField("Third Rewards","Meditite, Sawk, Throh, Scraggy")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/4sJ8E0MlmFzInAEuP63HwDyWVlpTzrO-HuF0hzNzjsk/https/reborn-pro.tk/files/Forum/Bruno.png")
		
		message.channel.sendEmbed(embed);
	}

	if (message.content == '!boss bugsy') {
		var embed = new Discord.RichEmbed()
		.setDescription("Bugsy")
		.addField("Region","Johto",true)
		.addField("Location","Amazon Forest (dock island)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Only level 100 pokemon in your team, 150 hours playtime, no fire-type pokemon in your team")
		.addField("Team","Scizor (Feint, Iron Head, Swords Dance, Double Hit) \n Genesect (Flamethrower, Ice Beam, Iron Head, Extreme Speed) \n Ninjask (Baton Pass, Slash, X-Scissor, Agility) \n Ferrothorn (Payback, Explosion, Flash Cannon, Iron Head) \n Pinsir (Thrash, Superpower, Guillotine, Swords Dance) \n Mega Heracross (Rock Blast, Close Combat, Pin Missile, Earthquake)")
		.addField("Possible Rewards","$3000-9500, Silver Powder, Shiny Caterpie, Shiny Weedle, TM139 - U-Turn, Snivy, Pinsir, Scyther, Ferroseed, Straw Hat, Straw Hat 2, Snivy")
		.addField("Third Rewards","Pinsir, Scyther, Heracross, Snivy, Nincada")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/1TtlePZPvbAWPCMHY_EAvIs88zyU8TDHmbDRWBpUxRA/https/reborn-pro.tk/files/Forum/Bugsy.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss elm') {
		var embed = new Discord.RichEmbed()
		.setDescription("Elm")
		.addField("Region","Johto",true)
		.addField("Location","Ruinas alfa(Centro de investigacion)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Only level 100 pokemon in your team")
		.addField("Team","Corsola (Flail, Earth Power, Mirror Coat, Power Gem) \n Togekiss (Air Slash, Aura Sphere, Extreme Speed, Sky Attack) \n Typhlosion (Eruption, Roll Out, Inferno, Double Edge) \n Meganium (Petal Blizzard, Solar Beam, Safe Guard, Aromatherapy) \n Feraligatr (Thrash, Superpower, Hydro Pump, Stone Edge) \n Tyranitar (Earthquake, Giga Impact, Stone Edge, Hyper Beam)")
		.addField("Possible Rewards","$6000-20000, Miracle Seed, Charcoal, Mystic Water, Cyndaquil, Chikorita, Totodile, Larvitar, Togepi")
		.addField("Third Rewards","Cyndaquil, Chikorita, Totodile, Togepi, Larvitar")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/KyIxMAWc2hmNP_zaDr7Is-Ap6L5Iq_E-fEgxFV4LAc8/https/reborn-pro.tk/files/Forum/Elm.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss lance') {
		var embed = new Discord.RichEmbed()
		.setDescription("Lance")
		.addField("Region","Johto",true)
		.addField("Location","Dragons Shrine",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","1 level 100 Dragon type pokemon and 150 evolutions for enter to area")
		.addField("Team","Tyrantrum (Head Smash, Dragon Claw, Earthquake, Brick Break) \n Noivern (Hurricane, Flamethrower, Air Slash, Focus Blast) \n Hydreigon (Dark Pulse, Flash Cannon, Fire Blast, Earth Power) \n Dragonite (Dragon Claw, Fire Punch, Thunder Punch, Ice Punch) \n Zekrom (Dragon Claw, Thunderbolt, Zen Headbutt, Crunch) \n Mega Salamence (Facade, Fire Blast, Dragon Claw, Earthquake)")
		.addField("Possible Rewards","$10000-30000, 5x Weakness Policy, 5x Rare Candy, 5x Focus Sash, Axew, Swablu, Dratini, Skrelp")
		.addField("Third Rewards","Swablu, Dratini, Axew, Skrelp")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/CuaEEq_33PK5pYf0rS8WBAMM132N5CwsVLoUPLa6tvM/https/reborn-pro.tk/files/Forum/Lance%25202.0.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss lorelei') {
		var embed = new Discord.RichEmbed()
		.setDescription("Lorelei")
		.addField("Region","Johto",true)
		.addField("Location","Ice Path B2F",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon, Johto champion")
		.addField("Team","Lapras (Hydro Pump, Sheer Cold, Safeguard, Brine) \n Mamoswine (Blizzard, Scary Face, Earthquake, Mist) \n Cloyster (Spike Cannon, Hydro Pump, Shell Smash, Spikes) \n Weavile (Dark Pulse, Metal Claw, Fling, Night Slash) \n Articuno (Hurricane, Roost, Blizzard, Sheer Cold) \n Mega Glalie (Ice Beam, Shadow Ball, Dark Pulse, Water Pulse)")
		.addField("Possible Rewards","$2000-7500, TM13 - Ice Beam, TM14 - Blizzard, Winter Clothes Blue, Winter Clothes Pink, Winter Clothes Green, Winter Clothes Grey, Lapras mount, Sneasel, Snorunt, Shellder, Lapras")
		.addField("Third Rewards","Sneasel, Snorunt, Shellder, Lapras")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/ewqYBRBB1iKXNPKeYVXHz2qOv7oeFFztmHrWGK4n4hE/https/reborn-pro.tk/files/Forum/Lorelei.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss misty') {
		var embed = new Discord.RichEmbed()
		.setDescription("Misty")
		.addField("Region","Johto",true)
		.addField("Location","Route 41",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon, 150 hours playtime")
		.addField("Team","Milotic (Mirror Shot, Scald, Ice Beam, Recover) \n Mega Gyarados (Crunch, Waterfall, Earthquake, Outrage) \n Kingdra (Waterfall, Focus Energy, Dragon Dance, Outrage) \n Wailord (Water Spout, Rest, Sleep Talk, Fissure) \n Togekiss (Air Slash, Aura Sphere, Flamethrower, Roost) \n Gastrodon (Bubblebeam, Earthquake, Recover, Amnesia)")
		.addField("Possible Rewards","5x Rare Candy, 3x TM11 - Bubblebeam, 3x TM68 - Rain Dance, Wailmer, Feebas, Shellos, Wailmer mount, Stardust, Star Piece, Pearl, Big Peal")
		.addField("Third Rewards","Wailmer, Shellos, Feebas, Togepi")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/HbjqnyCDyehkb5uatjS-0U_YTBCvo3DEctnOaATbumQ/https/reborn-pro.tk/files/Forum/Misty.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss neroli') {
		var embed = new Discord.RichEmbed()
		.setDescription("Neroli")
		.addField("Region","Johto",true)
		.addField("Location","Ilex Forest",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 Pokemon, you need a Celebi in your team")
		.addField("Team","Celebi (Earth Power, Giga Drain, Psyshock, Recover) \n Mega Altaria (Dragon Dance, Dragon Claw, Earthquake, Double-Edge) \n Chandelure (Shadow Ball, Energy Ball, Fire Blast, Pain Split) \n Milotic (Dragon Tail, Scald, Recover, Ice Beam) \n Skarmory (Roost, Brave Bird, X-Scissor, Reversal) \n Goodra (Draco Meteor, Sludge Wave, Thunderbolt, Flamethrower)")
		.addField("Possible Rewards","$20000-40000, Goomy, Chikorita, Budew, Shroomish, Pansy Flower, Orchid Flower, Anemone Flower, Hibiscus Hat, Jasmine Flower, Miracle Seed, Leaf Stone, TM22 - Solarbeam, TM61 - Sunny Day, 5x Rare Candy, 5x Revival Herb, 5x Energy Root")
		.addField("Third Rewards","Flabebe, Petilil, Foongus, Shiny Hoppip")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/90JJ6szj2jU1w84335tiwYIc9phBheVhoqDyIPkkBoE/https/walrosskastanie.tk/2017/11/LdZAzTQ.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss pewdie' || message.content == '!boss diepy' || message.content == '!boss pewdie/diepy') {
		var embed = new Discord.RichEmbed()
		.setDescription("Pewdie/Diepy")
		.addField("Region","Johto",true)
		.addField("Location","Goldenrod City Game Corner",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon, Johto champion, can't use ghost- and dark-type pokemon. You have to beat them without leaving the Game Corner.")
		.addField("Team (Pewdie)","Slowbro (Psychic, Thunder Wave, Ice Beam, Scald) \n Mr. Mime (Psyshock, Dazzling Gleam, Energy Ball, Focus Blast) \n Reuniclus (Psyshock, Pain Split, Thunder, Calm Mind) \n Sigilyph (Air Slash, Psychic, Calm Mind, Flash Cannon) \n Mewtwo (Calm Mind, Psyshock, Aura Sphere, Flamethrower) \n Jirachi (Ancient Power, Iron Head, Psyshock, Thunder Punch)")
		.addField("Team (Diepy)","Slowking (Scald, Ice Beam, Calm Mind, Psyshock) \n Jynx (Calm Mind, Psychic, Ice Beam, Grass Knot) \n Espeon (Psyshock, Calm Mind, Dazzling Gleam, Shadow Ball) \n Beheeyem (Dark Pulse, Thunderbolt, Psychic, Energy Ball) \n Hoopa (Shadow Ball, Psychic, Calm Mind, Thunderbolt) \n Mew (Earthquake, Ice Beam, Dragon Claw, Psyshock)")
		.addField("Possible Rewards","$40000-80000, 3x Air Balloon, 1x Shed Shell, 1x Kings Rock, 1x Fire Stone, 1x Water Stone, 1x Leaf Stone, 1x Thunder Stone, 1x Arcade Game Coin, Elgyem, Eevee, Shiny Slowpoke, Solosis, Sigilyph")
		.addField("Third Rewards","Solosis, Sigilyph, Eevee, Shiny Slowpoke")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/kGoslgI_ieZMMAzURjmRT4Yv57vOA715bCmxbeyYL5M/https/walrosskastanie.tk/2018/01/gSxtkK9.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss sage') {
		var embed = new Discord.RichEmbed()
		.setDescription("Sage")
		.addField("Region","Johto",true)
		.addField("Location","Sprout Tower F3 (Violet City)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Only level 100 pokemon, 201 hours playtime")
		.addField("Team","Jolteon (Thunderbolt, Thunder Wave, Shadow Ball, Signal Beam) \n Sylveon (Psyshock, Moonblast, Wish, Calm Mind) \n Espeon (Psyshock, Shadow Ball, Calm Mind, Morning Sun) \n Umbreon (Toxic, Assurance, Moonlight, Confuse Ray) \n Leafeon (Leaf Blade, X-Scissor, Knock Off, Aerial Ace) \n Glaceon (Ice Beam, Water Pulse, Shadow Ball, Signal Beam)")
		.addField("Reward","Eevee")
		.addField("Possible Rewards","Fire Stone, Water Stone, Thunder Stone, Dusk Stone, Leaf Stone")
		.addField("Third Rewards","Eevee")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/zr8Rz4tiKFB850OTIJZlmbbibJTSb_wuv9ogwzsh52o/https/reborn-pro.tk/files/Forum/Sage.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss suicune guardian' || message.content == '!boss guardian suicune') {
		var embed = new Discord.RichEmbed()
		.setDescription("Suicune Guardian")
		.addField("Region","Johto",true)
		.addField("Location","Secluded Lake (Lake of Rage)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","All Kanto and Johto pokemon owned, 750 hours playtime")
		.addField("Team","Mega Abomasnow (Wood Hammer, Ice Shard, Earthquake, Leech Seed) \n Mamoswine (Ice Shard, Earthquake, Stealth Rock, Toxic) \n Walrein (Hail, Roar, Fissure, Sheer Cold) \n Suicune (Ice Beam, Scald, Extrasensory, Calm Mind) \n Samurot (Swords Dance, Aqua Jet, Megahorn, Protect) \n Froslass (Ice Beam, Shadow Ball, Taunt, Thunderbolt)")
		.addField("Possible Rewards","$50000-80000, 3x PP Up, 3x TM105 - Scald, 3x TM54 - Calm Mind, 3x TM57 - Hail, Icy Rock, Choice Specs, Suicune(Si no lo tienes aun)")
		.addField("Fourth Rewards","Snover, Speal, Snorunt, Oshawott, Suicune(Si no lo tienes aun)")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/AgPLQ9jfMzllPAs8kBQga6wiBjSZ0S6fvkjAYz65OAQ/https/walrosskastanie.tk/2017/10/ErRVAX8.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss terminator') {
		var embed = new Discord.RichEmbed()
		.setDescription("Terminator")
		.addField("Region","Johto",true)
		.addField("Location","Mt. Silver Moltres Chamber",true)
		.addField("Cooldown","11 days")
		.addField("Requirement/s","400 hours playtime, Sinnoh champion")
		.addField("Team","Moltres (Fire Blast, Hurricane, Whirlwind, Roost) \n Porygon-Z (Psyshock, Zap Cannon, Recover, Tri Attack) \n Bastiodon (Earthquake, Heavy Slam, Toxic, Thunderbolt) \n Mega Aggron (Heavy Slam, Curse, Ice Punch, Thunder Punch) \n Empoleon (Flatter, Hydro Pump, Flash Cannon, Blizzard) \n Mecha Mewtwo (Recover, Thunder Wave, Psychic, Flash Cannon)")
		.addField("Possible Rewards","$12000-30000, 5x Rare Candy, 5x Focus Sash, Up-Grade, Porygon, Aron, Shieldon, Piplup")
		.addField("Third Rewards","Porygon, Aron, Shieldon, Piplup")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/LOpJXxgFqWBJg336yRVMYV1KKIuNr6tKQfwG8XBEv9I/https/reborn-pro.tk/files/Forum/Terminator.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss thor') {
		var embed = new Discord.RichEmbed()
		.setDescription("Thor")
		.addField("Region","Johto",true)
		.addField("Location","Whirl Islands B4F",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon")
		.addField("Team","Dragonite (Dragon Dance, Iron Head, Outrage, Extreme Speed) \n Greninja (Surf, Ice Beam, Toxic Spikes, Dark Pulse) \n Mew (Aura Sphere, Hypnosis, Roost, Psyshock) \n Tyranitar (Eartquake, Dragon Dance, Ice Punch, Attack Order) \n Mamoswine (Earthquake, Ice Shard, Stealth Rock) \n XD001 (Aeroblast, Roost, Calm Mind, Psyshock)")
		.addField("Possible Rewards","Lugia seen data, $6000-15000, 1-5x Leftovers, 1-5x Rare Candy, Smooth Rock, Light Clay, Icy Rock, Heat Rock, 1-5x Focus Sash, Dratini, Larvitar, Froakie")
		.addField("Third Rewards","Larvitar, Dratini, Froakie")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/snFGaAB4XJlvj_c-9Acek7K-JRaE1rbV-qqFoFGfeWU/https/reborn-pro.tk/files/Forum/Thor.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss birch') {
		var embed = new Discord.RichEmbed()
		.setDescription("Birch")
		.addField("Region","Hoenn",true)
		.addField("Location","Verdanturf House 2",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon")
		.addField("Team #1","Medicham (High Jump Kick, Zen Headbutt, Grass Knot, Poison Jab) \n Slaking (Hammer Arm, Yawn, Body Slam, Rock Slide) \n Mightyena (Fire Fang, Ice Fang, Thunder Fang, Crunch) \n Flygon (Draco Meteor, Dragon Claw, Earthquake, Dragon Tail) \n Swellow (Brave Bird, Roost, Whirlwind, Hurricane) \n Mega Sceptile (Giga Drain, Dragon Pulse, Rock Slide, Acrobatics)")
		.addField("Team #2","Mightyena (Howl, Play Rough, Sucker Punch, Roar) \n Medicham (Rock Tomb, Psychic, Energy Ball, Thunder Punch) \n Flygon (Flamethrower, Toxic, Earth Power, Superpower) \n Swellow (Sunny Day, Giga Impact, Swagger, Brave Bird) \n Mega Blaziken (High Jump Kick, Flare Blitz, Overheat, Stone Edge) \n Slaking (Low Kick, Earthquake, Slack Off, Yawn)")
		.addField("Team #3","Swellow (Air Slash, Toxic, Rain Dance, Hurricane) \n Mega Swampert (Earthquake, Waterfall, Ice Beam, Hammer Arm) \n Medicham (Calm Mind, Psyshock, Shadow Ball, Poison Jab) \n Mightyena (Crunch, Play Rough, Roar, Dark Pulse) \n Slaking (Giga Impact, Slack Off, Amnesia, Feint Attack) \n Flygon (Bug Buzz, Dragon Claw, Earth Power, Stone Edge)")
		.addField("Possible Rewards","$8000-25000, 5x Rare Candy, Poochyena, Tailow, Trapinch, Torchic, Mudkip, Treecko, Slakoth")
		.addField("Third Rewards","Trapinch, Mudkip, Torchic, Treecko, Slakoth")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/fnM6vrbA73Q5__gVoyK_03iDvFfMw0MvfuJF4LZAw8k/https/reborn-pro.tk/files/Forum/Birch.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss gingery jones' || message.content == '!boss gingery' || message.content == '!boss jones') {
		var embed = new Discord.RichEmbed()
		.setDescription("Gingery Jones")
		.addField("Region","Hoenn",true)
		.addField("Location","Feral Site (Fiery Path)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Only level 100 pokemon in your team, 2400 discoveries")
		.addField("Team","Mandibuzz (Bone Rush, Brave Bird, Mirror Move, Whirlwind) \n Clawitzer (Aura Sphere, Dark Pulse, Dragon Pulse, Muddy Water) \n Conkeldurr (Superpower, Stone Edge, Hammer Arm, Focus Punch) \n Klinklang (Hyper Beam, Lock-On, Zap Cannon, Metal Sound) \n Pangoro (Hammer Arm, Crunch, Taunt, Sky Uppercut) \n Golurk (Focus Punch, Heavy Slam, Earthquake, Hammer Arm)")
		.addField("Possible Rewards","Elgyem, Darumaka, Leftovers, Rare Candy, Jaw Fossil, Sail Fossil")
		.addField("Third Rewards","Tyrunt, Amaura, Timburr, Vullaby")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/0TdD3O_aTvHTi5lMD5XM7B1DH7RXd0TDK4FKkYMviwI/https/walrosskastanie.tk/2017/10/vNFulIb.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss lt.surge' || message.content == '!boss lt surge' || message.content == '!boss lt' || message.content == '!boss surge') {
		var embed = new Discord.RichEmbed()
		.setDescription("Lt.Surge")
		.addField("Region","Hoenn",true)
		.addField("Location","New Mauville",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","1 level 100 electric pokemon, 250 hours playtime")
		.addField("Team","Raichu (Quick Attack, ThunderShock, Tail Whip, Thunderbolt) \n Magnezone (Gyro Ball, Magnet Rise, Zap Cannon, Magnet Rise) \n Stunfisk (Thunderbolt, Flail, Fissure, Revenge) \n Electivire (Giga Impact, Thunder, Screech, Thunderbolt) \n Zapdos (Drill Peck, Zap Cannon, Roost, Thunder) \n Mega Manectric (Thunder, Flamethrower, Sleep Talk, Rest)")
		.addField("Possible Rewards","$3000-10000, Pikachu, Stunfisk, 2x TM25 - Thunder, 2x TM24 - Thunderbolt, TM122 - Volt Switch, Electrike, Manectric mount, Elekid")
		.addField("Third Rewards","Pikachu, Electrike, Elekid, Stunfisk")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/nLoy91u7semqznLufIiJmLAj2i3-EzTZ8gWCc0-6GgE/https/reborn-pro.tk/files/Forum/Lt.%2520Surge.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss morty') {
		var embed = new Discord.RichEmbed()
		.setDescription("Morty")
		.addField("Region","Hoenn",true)
		.addField("Location","Mt. Pyre 4F",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","1 level 100 ghost pokemon, 200 hours playtime")
		.addField("Team","Gengar (Hex, Nightmare, Dark Pulse, Hypnosis) \n Dusknoir (Payback, Future Sight, Mean Look, Shadow Punch) \n Froslass (Ice Shard, Blizzard, Destiny Bond, Hail) \n Mismagius (Astonish, Growl, Magical Leaf, Lucky Chant) \n Mega Sableye (Shadow Ball, Dark Pulse, Shadow Sneak, Confuse Ray) \n Darkrai (Dark Pulse, Dream Eater, Nasty Plot, Dark Void)")
		.addField("Possible Rewards","$3000-10000, 5x Focus Sash, 2x Spell Tag, 2x TM115 - Shadow Claw, 3x TM80 - Shadow Ball, Duskull, Sableye, Pumpkaboo")
		.addField("Third Rewards","Duskull, Sableye, Pumpkaboo, Rotom")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/7YWdOVcAsda9eK0kQ1RD553oC7Bb4gnSVRLGJo2yW4c/https/reborn-pro.tk/files/Forum/Morty.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss raikou guardian' || message.content == '!boss guardian raikou') {
		var embed = new Discord.RichEmbed()
		.setDescription("Raikou Guardian")
		.addField("Region","Hoenn",true)
		.addField("Location","Secret Base Alpha (Route 110)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","All Kanto and Johto pokemon owned, 750 hours playtime")
		.addField("Team","Politoed (Hydro Pump, Ice Beam, Hypnosis, Perish Song) \n Mega Manectric (Overheat, Thunder, Roar, Signal Beam) \n Ludicolo (Rain Dance, Surf, Giga Drain, Ice Beam) \n Raikou (Thunder, Aura Sphere, Extreme Speed, Roar) \n Zebstrika (Wild Charge, Flame Charge, Toxic, Protect) \n Eelektross (Dragon Claw, Iron Tail, Wild Charge, Flamethrower)")
		.addField("Possible Rewards","$50000-80000, 3x PP Up, 3x Rare Candy, Dome Fossil, Helix Fossil, Old Amber, Raikou (If you didn't catch it, level 30)")
		.addField("Fourth Rewards","Lotad, Electrike, Tynamo, Blitzle, Raikou (If you didn't catch it, level 30)")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/AgPLQ9jfMzllPAs8kBQga6wiBjSZ0S6fvkjAYz65OAQ/https/walrosskastanie.tk/2017/10/ErRVAX8.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss steven') {
		var embed = new Discord.RichEmbed()
		.setDescription("Steven")
		.addField("Region","Hoenn",true)
		.addField("Location","Valley Of Steel Underground (Lavaridge Town)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","1 steel-type pokemon, a pokemon with the move Iron Defense, 201 hours playtime")
		.addField("Team","Armaldo (X-Scissor, Rock Blast, Crush Claw, Slash) \n Bisharp (Night Slash, Iron Head, Guillotine, Swords Dance) \n Mawile (Iron Head, Spit Up, Swallow, Stockpile) \n Aggron (Automize, Double Edge, Metal Burst, Heavy Slam) \n Klinklang (Hyper Beam, Zap Cannon, Metal Sound, Lock-On) \n Mega Metagross (Meteor Mash, Hammer Arm, Thunder Punch, Ice Punch)")
		.addField("Possible Rewards","Pawniard, Beldum, Mawile, Aron, Everstone, Metal Coat, Klink")
		.addField("Third Rewards","Mawile, Aron, Pawniard, Beldum, Kling")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/OiGNNfrt-5Ue3lns9S1XYZoy8IshDSOnKOZ7DHaQmfw/https/reborn-pro.tk/files/Forum/Steven.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss suhuzen') {
		var embed = new Discord.RichEmbed()
		.setDescription("Suhuzen")
		.addField("Region","Hoenn",true)
		.addField("Location","Desert Ruins",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon, 300 hours playtime")
		.addField("Team","Staraptor (Brave Bird, Close Combat, Double-Edge, Quick Attack) \n Diggersby (Return, Quick Attack, Earthquake, Fire Punch) \n Porygon-Z (Psyshock, Petal Blizzard, Shadow Ball, Focus Blast) \n Heliolisk (Thunderbolt, Surf, Hyper Voice, Fire Blast) \n Exploud (Hyper Voice, Surf, Fire Blast, Fire Punch) \n Regigigas (Heavy Slam, Giga Impact, Ice Punch, Fire Punch)")
		.addField("Possible Rewards","$12000-30000, 2x Rare Candy, 3x Oran Berry, 2x Big Pearl, Razor Claw, Prism Scale, Slakoth, Tynamo, Sigilyph, Cacnea")
		.addField("Third Rewards","Slakoth, Tynamo, Sigilyph")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/NJn1EnKoiB4YAhb2SSEj4tnW5d1IgWpXbqJwuR7CKO4/https/reborn-pro.tk/files/Forum/Suhuzen.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss toothless') {
		var embed = new Discord.RichEmbed()
		.setDescription("Toothless")
		.addField("Region","Hoenn",true)
		.addField("Location","Abandoned Ship B1F Room 1 (Route 108)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Only level 100 pokemon in your team, 301 hours playtime")
		.addField("Team","Garchomp (Dragon Rush, Dig, Crunch, Dragon Claw) \n Miltank (Rollout, Body Slam, Ice Punch, Defense Curl) \n Starmie (Scald, Recover, Thunderbolt, Psyshock) \n Diancie (Calm Mind, Moonblast, Stealth Rock, Ancient Power) \n Metagross (Earthquake, Psyshock, Iron Defense, Meteor Mash) \n Quagsire (Scald, Amnesia, Earthquake, Yawn)")
		.addField("Reward","Outrage tutor")
		.addField("Possible Rewards","Miltank, Staryu, Sableye, Beldum, PP Max, TM115 - Shadow Claw, TM105 - Scald, TM80 - Shadow Ball")
		.addField("Third Rewards","Staryu, Miltank, Beldum, Gible")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/FI8TTOm3VRpysbdpPg1sw595wrFEECY_Xff3UidbBSQ/https/reborn-pro.tk/files/Forum/Toothless.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss ash estbrook' || message.content == '!boss ash' || message.content == '!boss westbrook') {
		var embed = new Discord.RichEmbed()
		.setDescription("Ash Westbrook")
		.addField("Region","Sinnoh",true)
		.addField("Location","Spear Pillar",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Sinnoh champion, 500 hours play time")
		.addField("Team","Mega Gengar (Focus Blast, Shadow Ball, Sludge Bomb, Thunderbolt) \n Mega Mewtwo Y (Ice Beam, Aura Sphere, Flamethrower, Psyshock) \n Zekrom (Wild Charge, Dragon Claw, Crunch, Giga Impact) \n Giratina (Aura Sphere, Calm Mind, Iron Head, Outrage) \n XD001 (Aeroblast, Roost, Calm Mind, Psyshock) \n Yveltal (Sucker Punch, Dark Pulse, Roost, Acrobatics)")
		.addField("Possible Rewards","$40000-60000, 5x Rare Candy, Shed Shell, 5x Revive, 5x Hyper Potion, 20x Ultra Ball, 3x Air Balloon, 3x Weakness Policy, Vullaby, Emolga, Tympole, Chespin, Shiny Gastly")
		.addField("Third Rewards","Vullaby, Emolga, Tympole, Chespin")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/_qBAAabLV60X7y5QQ040eHr7Pfandgj_7T81MXfOVJY/https/walrosskastanie.tk/2018/03/Ash.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss letrix') {
		var embed = new Discord.RichEmbed()
		.setDescription("Letrix")
		.addField("Region","Sinnoh",true)
		.addField("Location","Valley Windworks",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Sinnoh champion, 400 hours playtime, Snorlax is disallowed")
		.addField("Team","Togekiss (Grass Knot, Steel Wing, Air Slash, Ancient Power) \n Azelf (Flamethrower, Energy Ball, Iron Tail, Explosion) \n Shiftry (Knock Off, Swords Dance, Seed Bomb, Sucker Punch) \n Snorlax (Fire Punch, Body Slam, Earthquake, Curse) \n Excadrill (Earthquake, Rock Slide, Iron Head, Swords Dance) \n Primal Kyogre (Scald, Thunder, Ice Beam, Calm Mind)")
		.addField("Possible Rewards","$10000-50000, 5x Super Repel, 5x Air Ballon, 5x Rare Candy, 2x Focus Sash, Drilbur, Solosis, Togepi, regular or shiny Magikarp, Mew Hat")
		.addField("Third Rewards","Drilbur, Togepi, Shiny Magikarp, Solosis")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/aPDK0V_6ICPSq2pPVnP0L5RDFYSEgZswGdFYQOa7rEM/https/reborn-pro.tk/files/Forum/Letrix.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss link') {
		var embed = new Discord.RichEmbed()
		.setDescription("Link")
		.addField("Region","Sinnoh",true)
		.addField("Location","Twinleaf Town House 2",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Sinnoh champion")
		.addField("Team","Electrode (Explosion, Protect, Signal Beam, Taunt) \n Rapidash (Megahorn, Flamethrower, Poison Jab, Bounce) \n Aegislash (Shadow Sneak, Brick Break, Iron Head, Swords Dance) \n Bronzong (Payback, Earthquake, Psychic, Flash Cannon) \n Hitmontop (Close Combat, Rock Slide, Aerial Ace, Bulk Up) \n Mega Absol (Shadow Ball, Ice Beam, Psycho Cut, Night Slash)")
		.addField("Possible Rewards","$12000-30000, 5x Revival Herb, 5x Focus Sash, 10x Energy Roots, Shiny Voltorb, Shiny Ponyta, Hitmontop, Bronzor, Absol, Honedge")
		.addField("Third Rewards","Bronzor, Hitmontop, Absol, Honedge")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/kDgWDHO2BMaAoDp96w0_ljAY5fCNfr10PExGm7xtEWQ/https/reborn-pro.tk/files/Forum/Link.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss maribela') {
		var embed = new Discord.RichEmbed()
		.setDescription("Maribela")
		.addField("Region","Sinnoh",true)
		.addField("Location","Floaroma Meadow",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","6 level 100 pokemon")
		.addField("Team","Sylveon (Last Resort, Psych Up, Moonblast, Light Screen) \n Xerneas (Close Combat, Outrage, Giga Impact, Nature Power) \n Delphox (Fire Blast, Future Sight, Psychic, Sunny Day) \n Keldeo (Close Combat, Hydro Pump, Quick Guard, Work Up) \n Volcarona (Bug Buzz, Hurricane, Rage Power, Heat Wave) \n Jellicent (Water Spout, Wring Out, Hydro Pump, Rain Dance)")
		.addField("Possible Rewards","$12000-30000, 5x Rare Candy, 5x PP Up, 5x Focus Sash, Fennekin, 5x Pomeg Berry, 5x Kelpsy Berry, 5x Qualot Berry, 5x Hondew Berry, 5x Grepa Berry, 5x Tomato Berry, Frillish, Eevee, Larvesta, Blue Punk Jacket if male, Silver Diva Dress if female")
		.addField("Third Rewards","Fennekin, Frillish, Eevee, Larvesta")
		.setFooter("Alma de Guerreros")
		.setThumbnail("")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss professor rowan' || message.content == '!boss rowan') {
		var embed = new Discord.RichEmbed()
		.setDescription("Professor Rowan")
		.addField("Region","Sinnoh",true)
		.addField("Location","Jubilife Trainers School",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","Sinnoh champion, 100 Sinnoh hours playtime, 50 Sinnoh owned pokemon, 75 Sinnoh seen pokemon, 300 pokemon seen pokemon")
		.addField("Team","Bronzong (Gyro Ball, Stealth Rock, Earthquake, Zen Headbutt) \n Infernape (Close Combat, Flare Blitz, Grass Knot, Swords Dance) \n Gliscor (Stone Edge, Earthquake, Toxic, Roost) \n Torterra (Wood Hammer, Roar, Stone Edge, Earthquake) \n Luxray (Wild Charge, Crunch, Superpower, Ice Fang) \n Empoleon (Surf, Ice Beam, Defog, Flash Cannon)")
		.addField("Possible Rewards","$10000-30000, 1x Metal Coat, 1x Mystic Water, 1x Soft Sand, 1x Black Belt, 1x Miracle Seed, 4-10x Max Potion, 3x Rare Candy, Bidoof, Shinx, Turtwig, Piplup, Chimchar, Skorupi, Starly, Buizel")
		.addField("Third Rewards","Turtwig, Chimchar, Piplup, Shinx, Skorupi, Buizel")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/PzjOo5bdsEkQuEXDykmu_2pij2cyqdcnqFka9E8aTjg/https/walrosskastanie.tk/2017/10/9cktKKi.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss saphirr') {
		var embed = new Discord.RichEmbed()
		.setDescription("Saphirr")
		.addField("Region","Sinnoh",true)
		.addField("Location","Route 227",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","At least one fire-type pokemon, Sinnoh Champion, Heatran quest completed, Rock Climb, Snorlax disallowed")
		.addField("Team","Groudon (Earthquake, Stone Edge, Fire Blast, Hammer Arm) \n Heatran (Magma Storm, Stone Edge, Flash Cannon, Solar Beam) \n Kingdra (Flash Cannon, Outrage, Waterfall, Ice Beam) \n Quagsire (Scald, Brick Break, Haze, Acid Spray) \n Talonflame (Acrobatics, U-Turn, Roost, Flare Blitz) \n Mega Mewtwo Y (Psyshock, Ice Beam, Flamethrower, Energy Ball)")
		.addField("Possible Rewards","$10000-50000, 5x Focus Sash, 2x Magmarizer, Flame Orb, Reroll Ticket, Fire Elemental Set, Fletchling, Cyndaquil, Darumaka, Shiny Wooper")
		.addField("Third Rewards","Fletchling, Shiny Wooper, Cyndaquil, Darumaka")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-1.discordapp.net/external/6f-iB6GU0QlBUYENa0DzDamfwf-AJMXhdLK5kRBuSfA/https/walrosskastanie.tk/2018/02/FYyKCt6.png")
		
		message.channel.sendEmbed(embed);
	}
	if (message.content == '!boss jenny') {
		var embed = new Discord.RichEmbed()
		.setDescription("Officer Jenny")
		.addField("Region","Kanto",true)
		.addField("Location","Pinkan Lighthouse 2F (Pink island)",true)
		.addField("Cooldown","12 days")
		.addField("Requirement/s","400 hours playtime")
		.addField("Team","Arcanine (Extreme speed, Flare Blitz, Crunch, Wild Charge) \n Ariados (Night Slash, Fell Stinger, Cross Poison, Dig) \n Luxray (Thunder, Crunch, Round, Ice Fang) \n Manectric (Wild Charge, Crunch, Ice Fang, Extreme Speed) \n Swoobat (Energy Ball, Calm Mind, Shadow Ball, Air Slash) \n Clawitzer (Dragon Pulse, Aura Sphere, Dark Pulse, Water Pulse)")
		.addField("Possible Rewards","$30000-35000, Sun Stone, Moon Stone, Dawn Stone, Shiny Stone, Electrizer, 5x Air Balloons, Magmarizer, Rare Candies, (low chance) Shiny Spinarak, Woobat, (low chances) Security Cap and Security Uniform")
		.addField("Third Rewards","Shellos, Electrike, Shinx, Woobat, Bergmite")
		.setFooter("Alma de Guerreros")
		.setThumbnail("https://images-ext-2.discordapp.net/external/4-ePkoL-wiHDu0AuYe6aR1UXaepiHklcS0IugpADXl8/https/walrosskastanie.tk/2017/10/pUNlC83.png")
		
		message.channel.sendEmbed(embed);
	}
	
	
  }
	if (message.content == '!comandos') {
		message.channel.sendMessage('```!tm				Colocar el ataque a consultar. Ejemplo: !tm earthquake \n'+'!requisitos		Colocar el legendario a consultar. Ejemplo !requisitos mew \n'+'!canalyt		   Muestra el canal de youtube de la guild \n'+'!legtutor 		 Tutor de legendarios. Ejemplo !legtutor raikou \n'+'!boss 		     Ubicacion y team de los bosses. Ejemplo !boss koichi```');
	}
	
	




	
});
//bot.login('NDE2NDIyMjcyNDY3OTkyNTg3.DXEPBw.1uNZFrViwOosX18W_MdB7Z2LDSs'); 
bot.login(botSettings.token);