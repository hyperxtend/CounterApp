import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App/>', () => {
  it('checks initial count to be 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
  });

  it('checks if count increases by 1', () => {
    const wrapper = shallow(<App />);
    const increase = wrapper.find('button.increase');
    increase.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
  });

  it('checks if count increases by 1', () => {
    const wrapper = shallow(<App />);
    const decrease = wrapper.find('button.decrease');
    decrease.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: -1');
  });

  it('creates a snapshot of component', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
