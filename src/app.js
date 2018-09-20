import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const showVisibleExpenses = () => {
  const { expenses, filters } = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
};

store.dispatch(addExpense({ description: 'Water bill', amount: 2305 }));
store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 3782,
    createdAt: 1000,
    note: 'I have more to say!'
  })
);
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
console.log(store.getState());
showVisibleExpenses();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
