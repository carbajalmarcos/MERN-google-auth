import { useEffect, useState } from "react";
import { isAuthenticated } from "../services";

export const useIsAuthenticated = (ref: any) => {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let abortController = new AbortController();
    if (ref.current) {
      (async () => {
        try {
          const res = await isAuthenticated();
          if (res.status === 200) {
            setIsAuth(true);
          } else {
            setError(true);
          }
        } catch (err) {
          setError(true);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      abortController.abort();
      ref.current = false;
    };
  }, [ref]);
  return { loading, isAuth, error };
};
