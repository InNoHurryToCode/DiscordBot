let members = [];
let channels = [];

async function update(client, guildID) {
    const guild = await client.guilds.get(guildID);

    members = guild.members.array();
    channels = guild.channels.array();
}

async function getMember(memberID) {
    for (let member of members) {
        if (parseInt(member.user.id) === memberID) {
            return member;
        }
    }

    return undefined;
}

async function getChannel(channelID) {
    for (let channel of channels) {
        if (parseInt(channel.id) === channelID) {
            return channel;
        }
    }

    return undefined;
}

module.exports.update = update;
module.exports.getMember = getMember;
module.exports.getChannel = getChannel;