const nomiRandom = ["Pippo", "Paperino","Pinco", "Pallo"]

const cognomiRandom = ["Cannucia", "Terrazzo","Sgabello", "Formaggio"]

let fullName = 0;

const fakeGuestList = [];

for (let i = 0; i<6; i++) {
    fullName = nomiRandom[Math.floor(Math.random()* nomiRandom.length)] + " " + cognomiRandom [Math.floor(Math.random()* cognomiRandom.length)];
    console.log(fullName)
    fakeGuestList.push(fullName)
    console.log(fakeGuestList)
}

