import { useState, useCallback, useRef } from 'react';

export function useServerAction<T, P extends unknown[] = []>(action: (...args: P) => Promise<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const actionRef = useRef(action);

  actionRef.current = action;

  const execute = useCallback(async (...args: P) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await actionRef.current(...args);
      return result;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, execute };
}
