import { renderHook, act } from '@testing-library/react-hooks';

import useAsync from './useAsync';

describe('useAsync', () => {
  it('should call userAsync as soon as it renders', async () => {
    const mockedFunction = jest.fn();
    renderHook(() => useAsync(mockedFunction));
    expect(mockedFunction).toBeCalledTimes(1);
  });

  it('should show error if the promise return an error', async () => {
    const mockedFunction = () => Promise.reject(new Error('error'));
    const { result } = renderHook(() => useAsync(mockedFunction));
    expect(typeof result.current.error).toBe('object');
  });

  it('should call userAsync when execute is called', async () => {
    const mockedFunction = jest.fn();
    const { result } = renderHook(() => useAsync(mockedFunction, false));
    expect(mockedFunction).toBeCalledTimes(0);
    act(() => {
      result.current.execute();
    });
    expect(mockedFunction).toBeCalledTimes(1);
  });
});
