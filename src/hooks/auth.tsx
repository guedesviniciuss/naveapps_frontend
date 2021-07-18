import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthData {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('Naveapps:token');
    const user = localStorage.getItem('Naveapps:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const history = useHistory();

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('Naveapps:user', JSON.stringify(user));
    localStorage.setItem('Naveapps:token', token);

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    console.log('entrou');
    localStorage.removeItem('Naveapps:token');
    localStorage.removeItem('Naveapps:user');
    history.push('/login');
    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, token: data.token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useToast must be use within an ToastProvider');

  return context;
}

export { useAuth, AuthProvider };
