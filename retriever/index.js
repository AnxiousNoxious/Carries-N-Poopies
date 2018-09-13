const axios = require('axios');
const apiKey = 'RGAPI-c1f837b5-c011-44ad-b9a0-92a15b1590a3';

function getAccounts(names){
    const members = [];
    for (let i=0; i<names.length; i++){
        axios.get(`https://kr.api.riotgames.com/lol/summoner/v3/summoners/by-name/${encodeURI(names[i])}?api_key=${apiKey}`)
        .then(res => {members[i] = res.data;
        })
        .catch(error => {console.log(`error`);});
    }
    return members;
}

function getMatches(accounts){
    const matches = [];
    for (let i=0; i<accounts.length; i++){
        axios.get(`https://kr.api.riotgames.com/lol/match/v3/matchlists/by-account/${accounts[i].accountId}?api_key=${apiKey}`)
        .then(res => {
            matches[i] = res.data;
        })
    }
}
/* function getMatchListsByUserNames(names) {
 return Promise
   .all(names.map(name =>
     axios.get(`${API_BASE}/summoner/v3/summoners/by-name/${name}?api_key=${API_KEY}`)
       .then(res => {
         const accountId = res.data.accountId;
         return axios.get(`${API_BASE}/match/v3/matchlists/by-account/${accountId}?api_key=${API_KEY}`);
       })
   ))
   .then(array => {
     return array.map(item => item.data)
   })
}

module.exports = { getMatchListsByUserNames }; */

module.exports = {getAccounts, getMatches}