const https = require('https');
const apiKey = 'RGAPI-1dd4f3d9-a107-4edc-a56a-c13e38cc5067';

function getAccounts(names, callback) {
    const members = [];
    for (let i=0;i<names.length;i++){
        let name = names[i];
        https.get(`https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/${encodeURI(name[i])}?api_key=${apiKey}`, (res) => {
            res.on('data', data => {
                let member = JSON.parse(data.toString());
                members.push(member);
                if (members.length == names.length) callback(members);
            });
        });
    }
}

function getRecentGames()

module.exports = { getAccounts };
