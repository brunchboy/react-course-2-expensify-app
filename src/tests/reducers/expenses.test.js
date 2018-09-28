import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if id does not match', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '37',
    description: 'Concert',
    note: '',
    amount: 3750,
    createdAt: moment().valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

const updates = {
  note: 'More expensive than I thought!',
  amount: 245
};

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    {
      ...expenses[0],
      ...updates
    },
    expenses[1],
    expenses[2]
  ]);
});

test('edit should have no effect without id match', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'bob',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const replacementExpenses = [
    {
      id: '9',
      description: 'Sonic screwdriver',
      note: `Don't leave your home planet without one!`,
      amount: 1995,
      createdAt: -390000
    },
    {
      id: '42',
      description: 'Guide to the Galaxy',
      note: `A bargain at twice the price! And really, don't panic.`,
      amount: 4199,
      createdAt: moment(0)
        .add(422, 'years')
        .valueOf()
    }
  ];
  const action = {
    type: 'SET_EXPENSES',
    expenses: replacementExpenses
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(replacementExpenses);
});
