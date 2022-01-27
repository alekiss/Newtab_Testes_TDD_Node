//importação das classes
const assert = require('../src/core/assert/assert.js');
var Product = require('../src/core/product/product.js')

//criando o mock para os tests
var prod = new Product(1234, 'Mouse', 34.85)

describe('Testing of product', () => {
    it('Testing to Json', () => {
        //criando um mock interno
        let mock = {'code': 1234, 'name': 'Mouse', 'price': 34.85}
        expect(prod.toJson()).toStrictEqual(mock);
    })

    it('Testing toJson is not equal', () => {
        let mock = {'code': 12345, 'name': 'Mouse', 'price': 34.85}
        expect(!assert(prod.toJson()));
    })

    it('Testing getCode', () => {
        expect(prod.getCode()).toEqual(1234);
    })

    it('Testing getName', () => {
        expect(prod.getName()).toEqual('Mouse');
    })

    it('Testing getPrice', () => {
        expect(prod.getPrice()).toEqual(34.85);
    })

    it('Testing setCode', () => {
        expect(prod.setCode(12)).toEqual(12);
    })

    it('Testing setName', () => {
        expect(prod.setName('Pen')).toEqual('Pen');
    })

    it('Testing setPrice', () => {
        expect(prod.setPrice(5.99)).toEqual(5.99);
    })


})