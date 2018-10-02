import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout, wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('clicking on log out button should call startLogout', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
