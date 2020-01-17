const Discord = require('discord.js');
const auth = require('../db/auth.json');
const client = new Discord.Client();

const staticMessages = {
    "hello": replyHello,
    "goodnight": replyGoodnight
}

function replyHello(message) {
    message.reply('hi!');
}

function replyGoodnight(message) {
    message.reply('oyasumi!');
}

function onLogin() {
    console.log(`Logged in as ${client.user.tag}!`);
}

function onMessage(message) {
    if (typeof staticMessages[message.content] !== "undefined") {
        staticMessages[message.content](message);
    }
}

function update() {
    client.on('ready', () => {
        onLogin();
    });
    
    client.on('message', msg => {
        onMessage(msg);
    });
}

function init() {
    client.login(auth.token);
}

module.exports.init = init;
module.exports.update = update;