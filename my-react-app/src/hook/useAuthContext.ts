// src/hooks/useAuthProvider.ts
import { useState, useEffect, useCallback } from "react";
import { UserToken } from "../type/user";
import { logInAPI } from "../util/logInAPI";

const USER = "user";

export function useAuthProvider() {
  const [user, setUser] = useState<UserToken | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // localStorage에서 초기값 불러오기
  useEffect(() => {
    const saved = localStorage.getItem(USER);
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem(USER);
      }
    }
  }, []);

  // 로그인
  const logIn = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await logInAPI(email, password);
      setUser(response);
      localStorage.setItem(USER, response.accessToken);
    } catch (error) {
        throw new Error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 로그아웃
  const logOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem(USER);
  }, []);

  return { user, logIn, logOut, loading, error };
}
