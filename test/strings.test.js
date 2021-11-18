const chai = require('chai')
const expect = chai.expect

const strings = require('../src/strings.js')

describe('Strings', () => {
    describe('longitud', () => {
        it('logitud de un string', () => {
            expect(strings.longString('hola como estas')).to.equal(15)
            expect(strings.longString('Angel')).to.equal(5)
            expect(strings.longString('diplomado')).to.equal(9)
            expect(strings.longString('wa sacar 10')).to.equal(11)
            expect(strings.longString('cruz azul campeon')).to.equal(17)
            expect(strings.longString('buenas noches')).to.equal(13)
        });
        
    });
    describe('convertir en mayusculas', () => {
        it('convierte un texto en mayusculas', () => {
            expect(strings.toUpperFunc('hola como estas')).to.equal('HOLA COMO ESTAS')
            expect(strings.toUpperFunc('Angel')).to.equal('ANGEL')
            expect(strings.toUpperFunc('diplomado')).to.equal('DIPLOMADO')
            expect(strings.toUpperFunc('wa sacar 10')).to.equal('WA SACAR 10')
            expect(strings.toUpperFunc('cruz azul campeon')).to.equal('CRUZ AZUL CAMPEON')
            expect(strings.toUpperFunc('buenas noches')).to.equal('BUENAS NOCHES')
        });
        
    });
})