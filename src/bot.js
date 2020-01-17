const client = new (require('discord.js')).Client();
const auth = require('../db/auth.json');
const message = require('./message.js');

function onLogin() {
    console.log(`Logged in as ${client.user.tag}!`);
}

function update() {
    client.on('ready', () => {
        onLogin();
    });
    
    client.on('message', msg => {
        message.onUpdate(msg);
    });
}

function init() {
    client.login(auth.token);
}

module.exports.init = init;
module.exports.update = update;