import * as fromAuthor from '../reducers/author.reducer';
import { selectAuthorState } from './author.selectors';

describe('Author Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAuthorState({
      [fromAuthor.authorFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
