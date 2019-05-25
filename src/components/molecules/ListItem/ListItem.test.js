import React from 'react'
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ListItem from './ListItem'

describe(__filename, () => {

    it('Should render', () => {
        const output = mount(<ListItem name="Abid" />);

        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('should not show Hello', () => {
        const output = mount(<ListItem name="Abid" />);
        output.find('button').simulate('click');

        expect(output.state('isVisible')).toEqual(false);

        expect(shallowToJson(output)).toMatchSnapshot();
    });
});