setTick(async () => {
    await Wait(1000);
    emitNet("js:chat", "Hello from the client!");
});

setTick(async () => {
    text();
});

function text(){
    SetTextFont(0)
    SetTextScale(0.475, 0.475)
    SetTextColour(0, 0, 0, 255)
    SetTextEntry("STRING")
    AddTextComponentString("JS")
    DrawText(0.97, 0.95)
    DrawRect(0.973, 0.955, 0.03, 0.05, 255, 242, 64, 255)

}