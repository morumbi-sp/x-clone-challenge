import React, { useEffect, useState, createContext, ReactNode } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface IAuthContext {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext>({ user: null, loading: true });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   return onAuthStateChanged(auth, setUser);
  // }, []);

  useEffect(() => {
    return auth.onIdTokenChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
