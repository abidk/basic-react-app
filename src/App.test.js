import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

describe('Test main app', function () {

  it('should contain list', () => {
    const output = shallow(<App />);

    expect(shallowToJson(output)).toMatchSnapshot();
  });
});