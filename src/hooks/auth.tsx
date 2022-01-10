import { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from "expo-auth-session";
import {
  clientId,
  redirectUri,
  scope,
  cdnImage,
  responseType,
} from "../configs";
import { api } from "../services/api";

type User = {
  id: number;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    try {
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${clientId}&redirect_uri=${clientId}&response_type=${responseType}&scope=${scope}`;
      setLoading(true);
      AuthSession.startAsync({ authUrl: authUrl });
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
