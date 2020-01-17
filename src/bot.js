// https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b

const Discord = require('discord.js');
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
    if (staticMessages[message.content] !== "undefined") {
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
    // bot token
    client.login("NjY3NzM0ODExNDM5MjY3ODYw.XiHELA.EWGLU4mu5rBiDtCqVmGvdjMcmbs");
}

module.exports.init = init();
module.exports.update = update();