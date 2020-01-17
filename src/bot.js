const client = new (require('discord.js')).Client();
const auth = require('../db/auth.json');
const message = require('./message.js');
const guild = require('./guild.js');

function onLogin()
{
    console.log(client.user.tag + " is online and ready to help you!");
}

async function onFixedUpdate()
{
    await guild.update(client, auth.guild);
}

async function onMessage(msg)
{
    await message.onUpdate(msg);
}

function init()
{
    client.login(auth.token);
}

function update()
{
    client.on('ready', () => { onLogin(); });
    client.on('ready', async () => { setInterval(async () => { await onFixedUpdate(client); }, 1000); });
    client.on('message', async msg => { await onMessage(msg); });
}

module.exports.init = init;
module.exports.update = update;