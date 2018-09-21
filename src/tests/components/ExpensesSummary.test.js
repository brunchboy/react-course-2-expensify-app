import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render correct summary with all expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correct summary with a single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[2]]} />);
  expect(wrapper).toMatchSnapshot();
});
