Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


RegisterCommand("register", (source, args) => {
    emitNet("js:debug", "Checking if you are already registered !");
    emitNet("db:isnew");
    return;
    
});


RegisterCommand("create", (source, args) => {
    emitNet("js:debug", "Thanks for creating your character, we will be the best RedM Framework, trust me!❤ ");
    emitNet("db:creer");
    return;
    
});