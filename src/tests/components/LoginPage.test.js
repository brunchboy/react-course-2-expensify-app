import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startLogin, wrapper;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test('should render login page correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('clicking on log in button should call startLogin', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
