import client from "@/config/client";
import { useEffect, useState } from "react";

interface UseSanityFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export function useSanityFetch<T>(
  query: string,
  params?: Record<string, any>
): UseSanityFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    client
      .fetch(query, params)
      .then((result) => {
        if (isMounted) {
          setData(result);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [query, params]);

  return { data, isLoading, error };
}
