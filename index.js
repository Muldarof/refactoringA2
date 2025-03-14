import {createProvince} from "./province.js";


function callMain(){
    const asia = createProvince(sampleProvinceData());
    //assert.equal(asia.shortfall, 5);
    console.assert(asia.shortfall === 5);
}

function sampleProvinceData(){
    return {
        name: "Asia",
        producers: [
            {name: "Byzantium", cost: 10, production: 9},
            {name: "Attalia", cost: 12, productin: 10},
            {name: "Sinope", cost: 10, production: 6}
        ],
        demand: 30,
        price: 20
    };
}



callMain();