import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correct summary with all expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={3} expensesTotal={114195} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render correct summary with a single expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={4500} />
  );
  expect(wrapper).toMatchSnapshot();
});
