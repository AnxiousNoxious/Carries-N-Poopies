const https = require('https');
const apiKey = 'RGAPI-1dd4f3d9-a107-4edc-a56a-c13e38cc5067';

const nameList = [`hogdog`,`논타겟중독자`,`Chuck Norris`,`rsas`,`두근두근삼두박근`,`형 신병이야`,`artes`];
const memberList = nameList.map(name => {
    return {summonerName: name};
});

function getAccount

console.log(memberList);

for (let i=0;i<memberList.length;i++){
    https.get(`https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/${encodeURI(nameList[i])}?api_key=${apiKey}`, (res) => {
        res.on('data', data => {
            dataNoBrackets = data.slice(1,-1);
            dataArray = (dataNoBrackets.toString()).split(",");
            memberList[i].accountId = dataArray[1].slice(12);
            memberList[i].accountLevel = dataArray[5].slice(16);        
            console.log(memberList[i]);
        });
    });
}