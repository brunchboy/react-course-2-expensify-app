import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  startEditExpense,
  editExpense,
  startRemoveExpense,
  removeExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

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
  const result = addExpense(expenses[2]);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', done => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'Squeaky cute',
    createdAt: 1000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        }
      ]);
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', done => {
  const store = createMockStore(defaultAuthState);
  const defaultExpense = {
    amount: 0,
    createdAt: 0,
    description: '',
    note: ''
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...defaultExpense
          }
        }
      ]);
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
    });
});

test('should set up set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase', done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: 'SET_EXPENSES',
        expenses
      }
    ]);
    done();
  });
});

test('should remove expense from firebase', done => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          type: 'REMOVE_EXPENSE',
          id
        }
      ]);
      return database.ref(`users/${uid}expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBe(null);
      done();
    });
});

test('should update an expense in firebase', done => {
  const store = createMockStore(defaultAuthState);
  const { id, ...expense } = expenses[1];
  const updates = {
    description: 'Rent (raised!)',
    amount: 129500,
    note: 'This is getting ridiculous, time to move to a saner market.'
  };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          type: 'EDIT_EXPENSE',
          id,
          updates
        }
      ]);
      return database.ref(`/users/${uid}/expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual({
        ...expense,
        ...updates
      });
      done();
    });
});
