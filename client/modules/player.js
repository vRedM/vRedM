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


RegisterCommand("testrec", (source, args) => {
    setTick(async () => {
        const msg = "testing";
        const str = Citizen.InvokeNative("0xFA925AC00EB830B9", 10, "LITERAL_STRING", msg, Citizen.ResultAsLong())
        Citizen.InvokeNative("0xFA233F8FE190514C", str)
        Citizen.InvokeNative("0xE9990552DEC71600")
        const test = Citizen.InvokeNative("0xDFF0D417277B41F8", Citizen.ResultAsInteger())
        emitNet("js:debug", "Should display the menu !");
        DrawRect(0.20500001410593,0.20000001222514,0.24000002821186,0.038000004466878,0,0,0,220)
        DrawRect(0.20500001410593,0.39200003455953,0.24000002821186,0.038000004466878,0,0,0,220)
        DrawRect(0.20500001410593,0.41675003679297,0.24000002821186,0.0015,0,0,0,255)
    
    });
    
});




RegisterCommand("testnotif", (source, args) => {
    DisplayLeftNotification(
        'Basic Notification', 
        'This is a Basic notification', 
        'HUD_TOASTS',
        'toast_mp_status_change',
        10000
      )
});

function DisplayLeftNotification(title, subTitle, iconDict, icon, duration) {
    const struct1 = new DataView(new ArrayBuffer(4 * 4));
    struct1.setInt32(0, duration, true);
    
    const string1 = CreateVarString(10, "LITERAL_STRING", title);
    const string2 = CreateVarString(10, "LITERAL_STRING", subTitle);
    
    const struct2 = new DataView(new ArrayBuffer(48));
    struct2.setBigInt64(8, BigInt(string1), true);
    struct2.setBigInt64(16, BigInt(string2), true);
    struct2.setBigInt64(32, BigInt(GetHashKey(iconDict)), true);
    struct2.setBigInt64(40, BigInt(GetHashKey(icon)), true);
  
    Citizen.invokeNative("0x26E87218390E6729", struct1, struct2, 1, 1);
}

// RegisterCommand("test", (source, args) => {
//     const display = true;
//     const retval = true = 
// 	SendNuiMessage(
// 		display =  true
// 	);
// });

// const display = false;

// RegisterNetEvent("js:nui");
// on("js:nui", function(value) {
    
//     const display = true;
//     SetNuiFocus(display, display);
//     SendNuiMessage({
//         type: "ui",
//         display: true
//     });
// });




// RegisterNetEvent("js:nuioff");
// on("js:nui", function(value) {
    

//     const display = false;
//     SetNuiFocus(display, display);
//     SendNuiMessage({
//         type: "ui",
//         display: false
//     });
// });

