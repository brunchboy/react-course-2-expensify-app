import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('should correctly total expenses', () => {
  const result = getExpensesTotal(expenses);
  expect(result).toBe(114195);
});

test('should return zero if no expenses', () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});

test('should work correctly when there is only one expense', () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toBe(expenses[0].amount);
});
