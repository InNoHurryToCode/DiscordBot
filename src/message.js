const replyMessageHello = [
    "hello!",
    "hi!",
    "goodday!",
    "nice to see you here",
    "glad to see you here"
];
const replyMessageGoodnight = [
    "oyasumi!",
    "sleep tight",
    "goodnight!",
    "nighty night night",
    "see you soon!",
    "sleep well"
];
const replyMessageSleepnow = [
    "sleep now, you've worked hard enough already",
    "get some sleep, you deserve it",
    "you should sleep...",
    "you deserve some rest",
    "sleep now, I'll watch over you",
    "it's already late, time to go to bed"
];
const staticMessages = {
    "hello": replyHello,
    "hi": replyHello,
    "night": replyGoodnight,
    "goodnight": replyGoodnight,
    "good night": replyGoodnight,
    "nighty night night": replyGoodnight
};

function getRandomValue(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

function replyHello(msg)
{
    msg.reply(getRandomValue(replyMessageHello));
}

function replyGoodnight(msg)
{
    msg.reply(getRandomValue(replyMessageGoodnight));
}

function replySleepnow(msg)
{
    msg.reply(getRandomValue(replyMessageSleepnow));
}

async function onUpdate(msg)
{
    let hour = new Date().getHours();
    let senko = 218399895302832128;
    let shinobu = 667734811439267860;

    if (parseInt(msg.member.user.id) === senko && (hour < 7))
    {
        replySleepnow(msg);
    }

    for (key in staticMessages) {
        if (msg.content.split(" ").includes(key) && parseInt(msg.member.user.id) !== shinobu) {
            staticMessages[key](msg);
            return;
        }
    }
}

module.exports.onUpdate = onUpdate;