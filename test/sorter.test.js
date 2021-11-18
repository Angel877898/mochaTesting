const chai = require('chai')
const expect = chai.expect

const sorter = require('../src/sorter.js')

describe('Sorter', () => {
    describe('sort an array', () => {
        it('acomoda de menor a mayor numeros en un array', () => {
            expect(sorter.arraySorter([5,2,1,4])).to.eql([ 1, 2, 4, 5 ])
            expect(sorter.arraySorter([8,6])).to.eql([6,8])
            expect(sorter.arraySorter([3,6,1,8])).to.eql([1,3,6,8])
            expect(sorter.arraySorter([2,4,1,8])).to.eql([1,2,4,8])
            expect(sorter.arraySorter([2,7,6,8])).to.eql([2,6,7,8])
            expect(sorter.arraySorter([14,12,16,18])).to.eql([12,14,16,18])
        });
        
    });
    
})