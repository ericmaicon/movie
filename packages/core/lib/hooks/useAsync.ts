import { useCallback, useEffect } from 'react';

import { useStateIfMounted } from 'use-state-if-mounted';

function useAsync<T>(
  asyncFunction: (params?: any) => Promise<T>,
  immediate = true,
) {
  const [value, setValue] = useStateIfMounted<T | null>(null);
  const [error, setError] = useStateIfMounted(null);
  const [loading, setLoading] = useStateIfMounted(false);

  const execute = useCallback(
    async (params?: any) => {
      setLoading(true);
      setValue(null);
      setError(null);

      try {
        const response = await asyncFunction(params);
        setValue(response);
        setLoading(false);
      } catch (tempError) {
        setError(tempError);
        setLoading(false);
      }
    },
    [asyncFunction],
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate]);

  return { execute, value, error, loading };
}

export default useAsync;
