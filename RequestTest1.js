const https = require('https');
const apiKey = 'RGAPI-ff52a274-6a22-4af7-a8c0-1c3b07c96f66';

https.get(`https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/hogdog?api_key=${apiKey}`, (res) => {
    res.on('data', d => {
        process.stdout.write(d);
    });
});