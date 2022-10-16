RegisterCommand("testrec", (source, args) => {
    setTick(async () => {
        emitNet("js:debug", "Should display the menu !");
        DrawText("Salut", 0.5, 0.5);
        DrawRect(0.20500001410593,0.20000001222514,0.24000002821186,0.038000004466878,0,0,0,220)
        DrawRect(0.20500001410593,0.39200003455953,0.24000002821186,0.038000004466878,0,0,0,220)
        DrawRect(0.20500001410593,0.41675003679297,0.24000002821186,0.0015,0,0,0,255)
    
    });
    
});

function DrawText(text, posx, posy) {
    SetTextProportional(0)
    SetTextFont(1)
    SetTextEntry("STRING")
    AddTextComponentString(text)
    DrawText(posx,posy)
}