const https = require('https');
const apiKey = 'RGAPI-7d2f82d0-a6b9-4f26-affc-ed585e00be04';

https.get(`https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/hogdog?api_key=${apiKey}`, (res) => {
    res.on('data', d => {
        process.stdout.write(d);
    });
});