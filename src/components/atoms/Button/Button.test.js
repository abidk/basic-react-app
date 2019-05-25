import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Button from './Button';

describe(__filename, () => {
  it('Should render', () => {
    const output = shallow(<Button label="Click here" action={() => { }} />);

    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button label="Click here" action={mockCallBack} />);
    button.find('button').simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  });
});