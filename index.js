const retriever = require('./retriever');

retriever.getAccounts([`hogdog`,`논타겟중독자`,`Chuck Norris`,`rsas`,`두근두근삼두박근`,`형 신병이야`,`artes`], function(accounts) {
    console.log(accounts.length);
});
