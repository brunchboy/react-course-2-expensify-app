import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const pluralized = expensesCount == 1 ? 'expense' : 'expenses';
  const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <h2>
      Viewing {expensesCount} {pluralized} totalling {formattedTotal}
    </h2>
  );
};

const mapStateToProps = state => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: expenses.length,
    expensesTotal: getExpensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
