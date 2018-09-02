const https = require('https');
const apiKey = 'RGAPI-1908de2b-a4a3-44cb-aa6e-032afafa9370';
const nameList = [];
const memberList = [];

nameList.push(`hogdog`,`논타겟중독자`,`Chuck Norris`,`rsas`,`두근두근삼두박근`,`형 신병이야`,`artes`);

//nameList에 있는 만큼 memberList에 새로 오브젝트를 만들고,
//각 오브젝트마다 summonerName이라는 값을 할당
for (i=0;i<nameList.length;i++){
   memberList.push(new Object());
   memberList[i].summonerName = nameList[i];
}

//memberList가 잘 만들어졌는지 확인
for (i=0;i<nameList.length;i++){
    console.log(memberList[i].summonerName);
}

/* https.get(`https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/${nameList[0]}?api_key=${apiKey}`, (res) => {
        res.on('data', data => {
            dataNoBrackets = data.slice(1,-1);
            dataArray = (dataNoBrackets.toString()).split(",");
            memberList[0].accountId = dataArray[1].slice(12);
            console.log(memberList[0].accountId);
        });
    }); */

for (i=0;i<memberList.length;i++){
    https.get(`https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/${nameList[i]}?api_key=${apiKey}`, (res) => {
        res.on('data', data => {
            dataNoBrackets = data.slice(1,-1);
            dataArray = (dataNoBrackets.toString()).split(",");
            memberList[i].accountId = dataArray[1].slice(12);
        });
    });
}

console.log(memberList[0].accountId);