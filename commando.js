	//Elleme

const { CommandoClient } = require('discord.js-commando');
const config = require('./config.json')
const path = require('path');
const discord = require('discord.js')

var p = config.bot.prefix;

const client = new CommandoClient({
    commandPrefix: config.bot.prefix,
    unknownCommandResponse: false,
    owner: config.owner.id,
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['allcommands', 'All command']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

	//Oynuyor kısmı (değiştire bilirsin)
	
client.on('ready', () => {
    console.log('BOT: Bot Started name: '+client.user.tag);
    client.user.setActivity(p+'help || '+client.guilds.size+' servers '+client.users.size+' users', { TYPE: "WATCHING" });
});

client.on('guildCreate', guild => {
	console.log('BOT: new guild name: '+guild.name);
	client.user.setActivity(p+'help || '+client.guilds.size+' servers '+client.users.size+' users', { TYPE: "WATCHING" });
});

client.on('guildDelete', guild => {
	console.log('BOT: delete guild name: '+guild.name);
	client.user.setActivity(p+'help || '+client.guilds.size+' servers '+client.users.size+' users', { TYPE: "WATCHING" });
});

	//Elleme

client.on('error', e => {
    console.log('BOT: error '+e);
});

client.login(process.env.BOT_TOKEN);
