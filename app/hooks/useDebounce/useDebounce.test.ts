import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from './';

describe('useDebounce hook', () => {
  it('should return a function', () => {
    const mockCallback = jest.fn();
    const mockDelay = 100;

    const { result } = renderHook(() => useDebounce(mockCallback, mockDelay));

    expect(typeof result.current).toBe('function');
  });

  it('should delay callback', async () => {
    const mockCallback = jest.fn();
    const mockDelay = 100;

    const { result } = renderHook(() => useDebounce(mockCallback, mockDelay));

    await act(async () => {
      result.current();
      result.current();
      result.current();
      result.current();
      await new Promise<void>(resolve => setTimeout(resolve, 200));
    });

    expect(mockCallback).toBeCalledTimes(1);
  });
});
