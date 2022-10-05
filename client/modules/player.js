Wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


RegisterCommand("register", (source, args) => {
    emitNet("js:debug", "Hello from the client!");
    emitNet("db:test");
    return;
    
});