const { oxmysql } = require('@overextended/oxmysql');


onNet("js:debug", (msg) => {
    emitNet('chat:addMessage', -1 , {
        args: [msg]
    });
    return;
})


onNet("db:test", () => {
    const identifierddd = GetPlayerIdentifier(source, 0);
    const name = "vlad";
    const surname = "kusva";
    const sql = "INSERT INTO users (identifier, firstname, lastname) VALUES ("+identifierddd+ ", "+name+", "+surname+")";
    oxmysql.insert(sql)
});