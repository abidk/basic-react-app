import React from 'react'
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Form from './Form';

describe(__filename, () => {

    it('Should render', () => {    
        const output = mount(<Form />);

        expect(shallowToJson(output)).toMatchSnapshot();
    });
});