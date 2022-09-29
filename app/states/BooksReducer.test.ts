import { useReducer } from 'react';
import { renderHook, act } from '@testing-library/react-native';
import { booksInitialState, booksReducer } from './BooksReducer';
import { Volume } from '@app/interfaces/volume';

const renderUseReducer = () =>
  renderHook(() => useReducer(booksReducer, booksInitialState));

describe('books reducer', () => {
  it('should return state and dispatch', () => {
    const { result } = renderUseReducer();

    expect(result.current[0]).toEqual(booksInitialState);
    expect(typeof result.current[1]).toBe('function');
  });

  it('should update', () => {
    const { result } = renderUseReducer();

    const payload = {
      page: 7,
      total: 35,
      request: 'stringfied_request',
      data: [{} as Volume],
    };

    act(() => {
      result.current[1]({ type: 'update', ...payload });
    });

    expect(result.current[0]).toEqual({ ...booksInitialState, ...payload });
  });

  it('should change page', () => {
    const { result } = renderUseReducer();

    const payload = {
      page: 42,
    };

    act(() => {
      result.current[1]({ type: 'moveToPage', ...payload });
    });

    expect(result.current[0]).toEqual({ ...booksInitialState, ...payload });
  });

  it('should go back to initial state', () => {
    const { result } = renderUseReducer();

    const payload = {
      page: 7,
      total: 35,
      request: 'stringfied_request',
      data: [{} as Volume],
    };

    act(() => {
      result.current[1]({ type: 'moveToPage', ...payload });
    });

    act(() => {
      result.current[1]({ type: 'clear' });
    });

    expect(result.current[0]).toEqual(booksInitialState);
  });
});
