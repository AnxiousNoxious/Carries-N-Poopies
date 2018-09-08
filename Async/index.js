const https = require('https');

const API_BASE = 'https://kr.api.riotgames.com/lol';
const API_Key = 'RGAPI-1dd4f3d9-a107-4edc-a56a-c13e38cc5067';

https.get(`${API_BASE}/https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/hogdog?api_key=RGAPI-1dd4f3d9-a107-4edc-a56a-c13e38cc5067`, res => {
    res.on('data', data => {
        const summoner = JSON.parse(data.toString());
        console.log(summoner, ``);
    });
});