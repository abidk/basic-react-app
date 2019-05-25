import Names from './RetrieveNames'
import * as chai from 'chai'

const expect = chai.expect;

describe('RetrieveNames', () => {
    it('should return the correct list of names', () => {
        expect(Names.length).to.equal(2);
        expect(Names[0]).to.equal('Joe');
        expect(Names[1]).to.equal('Abid');
    });
});