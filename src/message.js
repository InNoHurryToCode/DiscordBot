const guild = require('./guild.js');
const { Client, RichEmbed } = require('discord.js');
const client = new Client();

const users = {
    "shinobu": 667734811439267860,
    "senko-san": 218399895302832128
};
const channels = {
    "help-en": 629765584187424782,
    "help-ru": 626151491282927627,
    "help-fr": 664914591368871936
};
const msgHello = [
    "hello!",
    "hi!",
    "goodday!",
    "nice to see you here",
    "glad to see you here"
];
const msgGoodnight = [
    "oyasumi!",
    "sleep tight",
    "goodnight!",
    "nighty night night",
    "see you soon!",
    "sleep well"
];
const msgSleep = [
    "sleep now, you've worked hard enough already",
    "get some sleep, you deserve it",
    "you should sleep...",
    "you deserve some rest",
    "sleep now, I'll watch over you",
    "it's already late, time to go to bed"
];
const msgHelp = [
    "please use discord search and check the __REPLACEME__ channel!",
    "ask questions in the __REPLACEME__ channel!",
    "try searching your question first and ask it in the __REPLACEME__ channel",
    "can you please ask your question in the __REPLACEME__ channel?"  
];
// helpTutorial message
const msgList = [ new RichEmbed()
    .setColor(0xFFFF00)
    .addField('defaultcommand', '```!list\n!asksources```')
    .addField('faq','```!mirror\n!addmoney\n!moneyerrors\n!saves\n!questrewards\n!weathers\n!brokenfeatures```', true)
    .addField('modding','```!installmods\n!botsmodding\n!hideoutmodding\n!createmods\n!gameparameters\n!gameediting```', true)
    .addField('errors','```!servererrors\n!duplicatekey\n!ports```', true)
];
const msgAskSources = [ new RichEmbed()
    .setColor(0xFF0000)
    .addField('Version Check!', 'Are you using the latest version from <#648666893674217492> and follow the written steps in <#661571929232375847>?\nUnless you\'ve done it, you won\'t get support here')
];
const msgMirror = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('File unavailable for download?', 'Use the download mirror from <#664914611300204596>, <#649134925131546624>, or [maoci.eu](https://maoci.eu/)\n\nAlternatively you can copy the file to your own drive and download it\n1. Click "Add to my drive" in right hand corner\n2. Open your own drive, the files should be available there\n3. Right-click the said file, and choose "Make a copy"\n4. Download the copied files you have just created')
];
const msgAddMoney = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('Adding money to your character', 'Go to: `serverdir\\user\\profiles\\id\\character.json`\nFind the money stack using these itemsid\n ```5449016a4bdc2d6f028b456f - Roubles\n5696686a4bdc2da3298b456a - Dollars\n569668774bdc2da2298b4568 - Euros```Then change `StackObjectsCount` value\n\nNote:\n1. Make sure the money stack you\'re editing are in the stash, not in your inventory. Otherwise it will cause annoying problem\n2. You can edit the value to whatever you want, just make sure you divide it to a new stack ingame\n')
]
const msgMoneyErrors = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('I don\'t receive money while selling items', 'The money is either invisible or bugged.\nYou can try start a raid and then press back while map is loading or just restart the game. It should solve the problem if the problem was invisible money.\n\nIf the problem persist then it is bugged. Follow this steps:\n1. Discard all of the money stacks ingame\n2. Close the game and open your `serverdir\\user\\profile\\id\\character.json`\n3. Search the money entries and make sure there\'s no entries left. Use this items id `5449016a4bdc2d6f028b456f` for Roubles\n4. Launch the game and sell an item so the new money stack will be created\n5. Add your money back in your `character.json`\n\nNotes:\nYou shouldn\'t sell items with some money in your loadout. Move all the money to the stash first. It will trigger some bugs if you don\'t')
]
const msgSaves = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('Save Editing', 'You can edit your profile by going to `serverdir\\user\\profiles\\id\\character.json`\nUse other text editor like Notepad++ or Sublime Text 3 to open the file.\nYou can pretty much edit everything to your own liking. Just make sure you know what you\'re doing and which part to edit.\n\nExample 1: If you want to edit Skills, you can go to `Skills` section and change `Progress` value to `5100`. This will max your character skills\n\nExample 2: if you want to shorter the Hideout upgrade time, go to `Hideout` section and change `constructionTime` value to `10`.\n\n**ALWAYS BACKUP THE PROFILE BEFORE ATTEMPTING TO EDIT YOUR SAVE FILES! YOU\'VE BEEN WARNED**\n')
];
const msgQuestRewards = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('Quest reward doesn\'t appear in the stash', 'You can solve this by starting a Raid, and while `"Loading maps..."`, immediately press Back. Doing this will refresh your profiles. Alternatively you can just restart the game,\n\nAnother important thing to note, make sure you empty a few row in the top most of your stash. The quest reward will go in there.\n\nThis issue is caused by the messaging system that isn\'t implemented yet. Next update will solve this')
];
const msgWeathers = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('How to enable Random Weathers?', 'The button in pve menu is actually switched. So tick `RandomTIme` to enable Random Weathers.')
];
const msgBrokenFeatures = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('List of broken features in r22', 'Check <#675413012869283842> for complete list\n\n- Bots, Hideout, and Locale modding is broken, fixed in the next update\n- Using special character like "-" in the weapon presets name will bug the game\n- ScavCase in hideout is broken\n- Skiers have duplicated items.\n- Proper maps loot generation isn\'t implemented yet, hence why marked room always has empty loot.\n- Messaging system isn\'t implemented yet, hence the problem with quest rewards and insurance.\n')
];
const msgInstallMods = [ new RichEmbed()
    .setColor(0x50EB74)
    .addField('Installing mods', 'Grab the file from mods-repo [here](https://github.com/justemutarkov/EmuTarkov-ServerMods)\n\nExcept for ***Sorata-AdvancedBotsLoadouts*** and ***Ragerys-FasterHideout***, follow the steps bellow.\n\n1. Add the desired mod folder into `serverdir\\user\\mods`\n-- e.g: Installing `XXX-YYYYYYYY` mods\n2. Add the following code in `serverdir\\user\\server.config.json`\n```json\n{\n\t"name": "YYYYYYYY",\n\t"author": "XXX",\n\t"version": "ZZZ",\n\t"enabled": true\n}\n```3. Then change `ZZZ` with the mod version found in `mod.config.json` inside the `XXX-YYYYYYYY` folder\n4. Launch the server.\n\nIf you\'ve done it correctly, the server will launch succesfully. Otherwise, it won\'t launch. If this happened, correct your `server.config.json`. Make sure the comma or bracket is correctly placed')
];
const msgBotsModding = [ new RichEmbed()
    .setColor(0x50EB74)
    .addField('How to install Sorata\'s AdvancedBotsLoadouts', 'Currently in JET version r22, Bots and Hideout modding isn\'t implemented yet. So to install Sorata\'s mods, you just need to drop the content of `/db/bots` from Sorata\'s mods into `serverdir/db/bots`')
];
const msgHideoutModding = [ new RichEmbed()
    .setColor(0x50EB74)
    .addField('How to install Ragerys\'s FasterHideout', 'Currently in JET version r22, Bots and Hideout modding is broken. So to install Ragerys\'s mods, you just need to drop the content of `/db/hideout` from the mods you\'ve download into `serverdir/db/hideout`')
];
const msgCreateMods = [ new RichEmbed()
    .setColor(0x50EB74)
    .addField('How to create mods', 'Take a look at this [guide](https://github.com/justemutarkov/EmuTarkov-Server/wiki/Create-a-mod)\n\nNote:\n1. In JET r22, Items Locale, Bots and Hideout modding is broken, so just replace the files you want to mod in `db`\n2. Don\'t forget to push your mods to the mods-repo\n')
    .addField('Here are some references','```db\\assort - stores list of items in the flea market\ndb\\bots - stores bots data e.g inventory, experience, etc\ndb\\hideout - stores hideout data\ndb\\items - stores game items data. To search the items id, use this website eft.maoci.eu\ndb\\locations - stores maps parameters\ndb\\maps - stores loot presets of each maps\ndb\\templates - stores items details\ndb\\traders - stores traders data\ndb\\weathers - stores weather data```')
];
const msgGameParameters = [ new RichEmbed()
    .setColor(0x50EB74)
    .addField('Editing parameters of the games', 'You can change some parameter of the games. Most of it are available in\n`serverdir\\db\\globals.json`\nAnd in\n`serverdir\\user\\server.config.json`\n\n Example 1: You want to change skills progression rate to be faster. Find `SkillProgressRate` in `serverdir\\db\\globals.json` then increase its value (e.g 10)\n\n Example 2: You want insurance to always return your gears when you\'re died, then go to `serverdir\\user\\server.config.json` and change `insureReturnChance` to 100\n\nMake sure the comma or the bracket is correctly placed, otherwise the server won\'t start\n\n__**ALWAYS BACKUP THE FILES BEFORE MESSING ARROUND WITH IT!!!**__\n__**YOU\'VE BEEN WARNED.**__\n')
];
const msgGameEditing = [ new RichEmbed()
    .setColor(0x50EB74)
    .addField('Editing parameters of the games (2)', 'You can edit everything in the game; armors to have 1000 points, extending raid time, change items price, etc. To do this you have to go to `serverdir\\db\\` just find the correct `.json` files and the correct parameters to edit inside the `.json` files.\n But this is unpreferable. Because it is tampering the server files directly and you need to do it again each time there\'s a server update. Thats why it is recommended to create a proper mods. But if you just want to make a few simple edit, this way is easier.\n')
    .addField('Here are the locations you should look at','```db\\assort - stores list of items in the flea market\ndb\\bots - stores bots data e.g inventory, experience, etc\ndb\\hideout - stores hideout data\ndb\\items - stores game items data. To search the items id, use this website eft.maoci.eu\ndb\\locations - stores maps parameters\ndb\\maps - stores loot presets of each maps\ndb\\templates - stores items details\ndb\\traders - stores traders data\ndb\\weathers - stores weather data```\nJust open the desired `.json` files and make your changes. After you finish your edits the server needs to be recache before you launch your game. Just delete `serverdir\\user\\caches` folder to recached. If you don\'t do this then your changes will be inactive\n\nMake sure the comma or the bracket is correctly placed when you\'re editing the files, otherwise the server won\'t recached succesfully\n\n__**ALWAYS BACKUP THE FILES BEFORE MESSING ARROUND WITH IT!!!**__\n__**YOU\'VE BEEN WARNED.**__\n')
];
const msgServerErrors = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('"Server Closes Itself" & "SyntaxError: Unexpected token ..."', 'This is caused by some error in the `.json` files. Especially if you\'ve just edit some `.json`. Make sure the comma, bracket or structure of the files you\'ve just edit is correct.\n')
    .addField('The server shows error with "locale" words', 'This is caused by the game failed to find the localization that match your Operating Systems language. You can solve this by going to `Documents\\Escape From Tarkov\\shared.ini`\nThen change `Languages` value to `"en"` then launch the game\n\nIf the error persist then\n1. Delete the content of `serverdir\\user\\caches`\n2. Go to `serverdir\\user\\profile\\list.json`\n3. In id `2` set `wipe` to true\n')
    .addField('`/client/handbook/build/mylist?retry` & `/client/game/profile/list?retry`\n', 'This is caused by duplicate key. Type `!duplicatekey` then I\'ll tell you how to solve it')
];
const msgDuplicateKey = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('"Critical error ... An item with the same key ..."', 'Check <#675413012869283842>.\n\nIf you\'ve got `/client/game/profile/list?retry` message on console screen You can solve this by go to `serverdir\\user\\profiles\\id\\character.json`. Find the keys shown in error message then remove the duplicate entry.\n\nIf you\'ve got `/client/handbook/build/mylist?retry` then check `serverdir\\user\\profiles\\id\\userbuilds.json` and do the same')
];
const msgPortInUse = [ new RichEmbed()
    .setColor(0x007DFF)
    .addField('Port is already in use', 'Check <#661573036776095754>')
];
const staticMessages = {
    // hello
    "hello": replyHello,
    "hi": replyHello,

    // goodnight
    "gn": replyGoodnight,
    "goodnight": replyGoodnight,
    "good night": replyGoodnight,
    "nighty night night": replyGoodnight,

    // commands
    "!hi": replyHello,
    "!gn": replyGoodnight,
    "!help": replyHelp,
};

const helpTutorial = {
    // command list
    "!list": replyList,
    "!asksources" : replyAskSources,

    // frequently asked
    "!mirror": replyMirror,
    "!addmoney": replyAddMoney,
    "!moneyerrors": replyMoneyeErrors,
    "!saves": replySaves,
    "!questrewards": replyQuestRewards,
    "!weathers": replyWeathers,
    "!brokenfeatures": replyBrokenFeatures,

    // mods
    "!installmods": replyInstallMods,
    "!botsmodding": replyBotsModding,
    "!hideoutmodding": replyHideoutModding,
    "!createmods": replyCreateMods,
    "!gameparameters": replyGameParameters,
    "!gameediting": replyGameEditing,

    // errors
    "!servererrors": replyServerErrors,
    "!duplicatekey": replyDuplicateKey,
    "!ports": replyPortInUse,

}
const helpMessages = [
    "can somebody",
    "how do i",
    "what do i",
    "when do i",
    "why do i",
    "where do i",
    "somebody help me",
    "someone help me",
    
    "i need some help",
    "i need help",
];

function getRandomValue(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

function replyHello(msg)
{
    msg.reply(getRandomValue(msgHello));
}

function replyGoodnight(msg)
{
    msg.reply(getRandomValue(msgGoodnight));
}

function replySleep(msg)
{
    msg.reply(getRandomValue(msgSleep));
}

// helpTutorial Function
function replyList(msg)
{
    msg.reply(getRandomValue(msgList));
}

function replyAskSources(msg)
{
    msg.reply(getRandomValue(msgAskSources))
}

function replyMirror(msg)
{
    msg.reply(getRandomValue(msgMirror))
}

function replyAddMoney(msg)
{
    msg.reply(getRandomValue(msgAddMoney))
}

function replyMoneyeErrors(msg)
{
    msg.reply(getRandomValue(msgMoneyErrors))
}

function replySaves(msg)
{
    msg.reply(getRandomValue(msgSaves))
}

function replyQuestRewards(msg)
{
    msg.reply(getRandomValue(msgQuestRewards))
}

function replyWeathers(msg)
{
    msg.reply(getRandomValue(msgWeathers))
}

function replyBrokenFeatures(msg)
{
    msg.reply(getRandomValue(msgBrokenFeatures))
}

function replyInstallMods(msg)
{
    msg.reply(getRandomValue(msgInstallMods))
}

function replyBotsModding(msg)
{
    msg.reply(getRandomValue(msgBotsModding))
}

function replyHideoutModding(msg)
{
    msg.reply(getRandomValue(msgHideoutModding))
}

function replyCreateMods(msg)
{
    msg.reply(getRandomValue(msgCreateMods))
}

function replyGameParameters(msg)
{
    msg.reply(getRandomValue(msgGameParameters))
}

function replyGameEditing(msg)
{
    msg.reply(getRandomValue(msgGameEditing))
}

function replyServerErrors(msg)
{
    msg.reply(getRandomValue(msgServerErrors))
}

function replyDuplicateKey(msg)
{
    msg.reply(getRandomValue(msgDuplicateKey))
}

function replyPortInUse(msg)
{
    msg.reply(getRandomValue(msgPortInUse))
}

async function replyHelp(msg)
{
    const helpChannelName = (await guild.getChannel(channels["help-en"])).toString();
    msg.reply(getRandomValue(msgHelp).replace("__REPLACEME__", helpChannelName));
}

async function onUpdate(msg)
{
    const hour = new Date().getHours();

    if (parseInt(msg.member.user.id) === users["senko-san"] && (hour < 7))
    {
        replySleep(msg);
    }

    for (let key in staticMessages)
    {
        if (msg.content.toLowerCase().split(" ").includes(key) && parseInt(msg.member.user.id) !== users["shinobu"])
        {
            staticMessages[key](msg);
            return;
        }
    }

    for (let key in helpTutorial)
    {
        if (msg.content.toLowerCase().split(" ").includes(key) && parseInt(msg.member.user.id) !== users["shinobu"])
        {
            helpTutorial[key](msg);
            return;
        }
    }

    for (let key of helpMessages)
    {
        if (msg.content.toLowerCase().includes(key) && parseInt(msg.member.user.id) !== users["shinobu"])
        {
            const channel = parseInt(msg.channel.id);

            if (channel === channels["help-en"] || channel === channels["help-ru"] || channel === channels["help-fr"])
            {
                return;
            }

            await replyHelp(msg);
        }
    }
}

module.exports.onUpdate = onUpdate;
