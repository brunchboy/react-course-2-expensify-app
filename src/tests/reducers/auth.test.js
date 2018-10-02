import authReducer from '../../reducers/auth';
import { login, logout } from '../../actions/auth';

test('should default to not logged in', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set to logged in state', () => {
  const uid = 'fr0bo33';
  const state = authReducer(undefined, login(uid));
  expect(state).toEqual({ uid });
});

test('should set state to logged out', () => {
  const state = authReducer({ uid: 'somebody' }, logout());
  expect(state).toEqual({});
});
