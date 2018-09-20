import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state).toEqual({
    ...defaultState,
    sortBy: 'amount'
  });
});

test('should set sortBy to date', () => {
  const currentState = {
    text: 'foo',
    startDate: undefined,
    endDate: moment(123),
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state).toEqual({
    ...currentState,
    sortBy: 'date'
  });
});

test('text filter should be set', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'galoshes'
  };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    ...defaultState,
    text: 'galoshes'
  });
});

test('should set start date', () => {
  const startDate = moment(424242).startOf('day');
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    ...defaultState,
    startDate
  });
});

test('should set end date', () => {
  const endDate = moment(42424242).endOf('day');
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    ...defaultState,
    endDate
  });
});
