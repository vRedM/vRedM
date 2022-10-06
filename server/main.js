const { oxmysql } = require('@overextended/oxmysql');


onNet("js:debug", (msg) => {
    emitNet('chat:addMessage', -1 , {
        args: [msg]
    });
    return;
})


function registerplayer() {
    const identifiers = GetPlayerIdentifier(source, 0);
    const sql = "INSERT INTO users (identifier, name, surname) VALUES ('"+identifiers+"', 'salut','lesmecs')";
    oxmysql.insert(sql)
    console.log(identifiers, 'salut','lesmecs')
};



onNet("db:creer", () =>
{
    const identifiers = GetPlayerIdentifier(source, 0);
    const sql = "INSERT INTO users (identifier, name, surname) VALUES ('"+identifiers+"', 'salut','lesmecs')";
    oxmysql.insert(sql)
    console.log(identifiers, 'salut','lesmecs')
});





onNet("db:isnew", () =>
{
    const identifiers = GetPlayerIdentifier(source, 0);
    const sql = "SELECT * FROM `users` WHERE `identifier`='+identifiers+'";
    oxmysql.query(sql, (result) => {
        if(result) {
            console.log("tg");
        } else {
            console.log('tg');
            registerplayer();
        }
    });
});



