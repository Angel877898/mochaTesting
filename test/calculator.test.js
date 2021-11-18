const chai = require('chai')
const expect = chai.expect

const calculator = require('../src/calculator.js')

describe('Calculator', () => {
    describe('Suma', () => {
        it('suma de dos numeros', () => {
            expect(calculator.add(2,4)).to.equal(6)
            expect(calculator.add(4,4)).to.equal(8)
            expect(calculator.add(12,102)).to.equal(114)
            expect(calculator.add(32,30)).to.equal(62)
            
        });
        it('suma de 14 + 14 = 28', () => {
            expect(calculator.add(14,14)).to.equal(28)
            
        });
    });
    describe('Multiplicacion', () => {
        it('multiplicacion de dos numeros', () => {
            expect(calculator.multiply(2,2)).to.be.equal(4)
            expect(calculator.multiply(3,2)).to.be.equal(6)
            expect(calculator.multiply(1,2)).to.be.equal(2)
            expect(calculator.multiply(90,87)).to.be.equal(7830)
            
        });
        
    });
    describe('division', () => {
        it('division de dos numeros', () => {
            expect(calculator.divide(2,1)).to.be.equal(2)
            expect(calculator.divide(4,2)).to.be.equal(2)
            expect(calculator.divide(2,0)).to.be.equal(undefined)
            
            
        });
        
    });
    describe('resta', () => {
        it('resta de dos numeros', () => {
            expect(calculator.substract(2,2)).to.be.equal(0)
            expect(calculator.substract(3,2)).to.be.equal(1)
            expect(calculator.substract(1,2)).to.be.equal(-1)
            expect(calculator.substract(90,87)).to.be.equal(3)
            
        });
    });
});