import { run } from '../index';

describe('Awesome Tool', () => {
  test('#run', () => {
    const result = run();
    expect(result).toEqual('Running');
  });
});
