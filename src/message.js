const staticMessages = {
    "hello": replyHello,
    "goodnight": replyGoodnight
}

function replyHello(msg) {
    msg.reply('hi!');
}

function replyGoodnight(msg) {
    msg.reply('oyasumi!');
}

function onUpdate(msg) {
    if (typeof staticMessages[msg.content] !== "undefined") {
        staticMessages[msg.content](msg);
    }
}

module.exports.onUpdate = onUpdate;