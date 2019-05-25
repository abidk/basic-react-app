import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Hello from './Hello';

describe(__filename, () => {
    it('Test Hello render', () => {
        const output = shallow(<Hello name="Abid" />);

        expect(shallowToJson(output)).toMatchSnapshot();
    });
});