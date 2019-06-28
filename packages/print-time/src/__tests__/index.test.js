import { printTime } from '../index';


describe('Print Timer', () => {
  test('#printTime', () => {
    const result = printTime();
    expect(typeof result).toBe('string');
  });
});
