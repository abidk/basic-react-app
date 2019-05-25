import React from 'react'
import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import List from './index';

const mockStore = configureMockStore();

describe(__filename, () => {

    it('Should render', () => {    
        const store = mockStore({names:['Abid3']});

        const output = mount(<List names={['Abid1', 'Abid2']} store={store}/>);

        expect(shallowToJson(output)).toMatchSnapshot();
    });
});