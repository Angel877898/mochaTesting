const chai = require('chai')
const expect = chai.expect

const calendar = require('../src/calendar.js')
let hoy = new Date()
let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
describe('Calendar', () => {
    describe('Dias', () => {
        it('Verificador de dias de la semana', () => {
            expect(calendar.dayOfWeek(1)).to.equal('Domingo')
            expect(calendar.dayOfWeek(2)).to.equal('Lunes')
            expect(calendar.dayOfWeek(3)).to.equal('Martes')
            expect(calendar.dayOfWeek(4)).to.equal('Miercoles')
            expect(calendar.dayOfWeek(5)).to.equal('Jueves')
            expect(calendar.dayOfWeek(6)).to.equal('Viernes')
        });
    });
    describe('Hora', () => {
        it('Verificador de hora actual', () => {
            expect(calendar.hour()).to.equal(hora)
            expect(calendar.hour()).to.equal(hora)
            expect(calendar.hour()).to.equal(hora)
            expect(calendar.hour()).to.equal(hora)
            expect(calendar.hour()).to.equal(hora)
            expect(calendar.hour()).to.equal(hora)
        });
    });
})