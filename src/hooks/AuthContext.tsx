import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthContext {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface SignInCredentials {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthContext>(() => {
    const token = localStorage.getItem('@Naveapps/token');
    const user = localStorage.getItem('@Naveapps/user');

    if (user && token) {
      return { user: JSON.parse(user), token };
    }

    return {} as AuthContext;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { user, token } = response.data;

    localStorage.setItem('@Naveapps/token', token);
    localStorage.setItem('@Naveapps/user', JSON.stringify(user));

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Naveapps/token');
    localStorage.removeItem('@Naveapps/user');

    setData({} as AuthContext);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
