import Province from "./province.js";
import Producer from "./province.js";

function callMain(){
    let sample = sampleProvinceData();
    describe('province', function(){
        it('shorfall', function() {
            const asia = new Province(sampleProvinceData());
            assert.equal(asia.shortfall, 5);
        })
    })
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