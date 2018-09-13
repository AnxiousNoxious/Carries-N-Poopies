const retriever = require('./retriever');

accounts = retriever.getAccounts([`hogdog`,`논타겟중독자`,`Chuck Norris`,`rsas`,`두근두근삼두박근`,`형 신병이야`,`artes`]);
setTimeout(f => {matches = retriever.getMatches(accounts);}, 1000)