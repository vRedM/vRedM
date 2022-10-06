Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


RegisterCommand("register", (source, args) => {
    emitNet("js:debug", "Checking if you are already registered !");
    emitNet("db:isnew");
    return;
    
});


RegisterCommand("creer", (source, args) => {
    emitNet("js:debug", "Hello from the client!");
    emitNet("db:creer");
    return;
    
});