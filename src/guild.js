let members = [];

async function update(client, guildID) {
    const guild = await client.guilds.get(guildID);

    members = guild.members.array();
}

async function getMember(memberID) {
    for (let member of members) {
        if (parseInt(member.user.id) === memberID) {
            return member;
        }
    }

    return undefined;
}

module.exports.update = update;
module.exports.getMember = getMember;