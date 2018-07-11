import { displayTimer } from '../src/pages/index/index';

describe('test index', () => {
  it('Display time successfully', () => {
    jest.useFakeTimers();
    let mockFn = jest.fn();
    displayTimer(mockFn);
    jest.runTimersToTime(2000);
    expect(document.body.innerHTML).toBeTruthy();
    expect(mockFn).toHaveBeenCalled();
  });
});
