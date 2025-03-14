import {strict as assert} from 'assert';
import {Province} from '../src/province.js'

describe('province', function(){
    it('shorfall', function() {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    })
})

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