const chai = require('chai')
const expect = chai.expect

const pares = require('../src/pares.js')

describe('Pares', () => {
    describe('numeros par', () => {
        it('verificador de numeros par', () => {
            expect(pares.par(2)).to.be.equal(true)
            expect(pares.par(4)).to.be.equal(true)
            expect(pares.par(5)).to.be.equal(false)
            expect(pares.par(6)).to.be.equal(true)
            expect(pares.par(7)).to.be.equal(false)
            expect(pares.par(8)).to.be.equal(true)
            
        });
        
    });
    describe('array lleno de numeros pares', () => {
        it('verificador de array lleno de numeros pares', () => {
            expect(pares.parArray([2,4,6,8])).to.be.equal(true)
            expect(pares.parArray([6,8])).to.be.equal(true)
            expect(pares.parArray([1,3,6,8])).to.be.equal(false)
            expect(pares.parArray([2,4,1,8])).to.be.equal(false)
            expect(pares.parArray([2,7,6,8])).to.be.equal(false)
            expect(pares.parArray([12,14,16,18])).to.be.equal(true)
        }); 
    });
});