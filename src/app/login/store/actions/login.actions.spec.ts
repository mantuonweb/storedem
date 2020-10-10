import * as fromLogin from './login.actions';

describe('loadLogins', () => {
  it('should return an action', () => {
    expect(fromLogin.loadLogins({user:{}}).type).toBe('[Login] Load Logins');
  });
});
