import * as fromLogin from '../reducers/login.reducer';
import { selectIsLoggedIn } from './login.selectors';

describe('Login Selectors', () => {
  it('should select the feature state', () => {
    const result = selectIsLoggedIn({
      [fromLogin.loginFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
