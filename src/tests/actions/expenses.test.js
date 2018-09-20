import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const result = removeExpense({ id: '123abc' });
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should set up edit expense action object', () => {
  const updates = { note: 'Some new value' };
  const result = editExpense('54321', updates);
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '54321',
    updates
  });
});

test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Bribes',
    amount: 109500,
    createdAt: 1000,
    note: "Don't ask!"
  };
  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should set up the add expense action object with default values', () => {
  expect(addExpense()).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      amount: 0,
      createdAt: 0,
      description: '',
      note: ''
    }
  });
});
