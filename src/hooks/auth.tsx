import { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from "expo-auth-session";
import {
  clientId,
  redirectUri,
  scope,
  responseType,
  cdnImage,
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
  loading: boolean;
  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success" && !params.error) {
        console.log("types: ", type, "params: ", params);
        const { access_token } = params;

        const { data } = await api.get<User>("/user/@me", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        const firstName = data.username.split(" ")[0];
        data.avatar = `${cdnImage}/avatars/${data.id}/${data.avatar}.png`;

        setUser({
          ...data,
          firstName,
          token: data.token,
        });
        setLoading(false);
      }
    } catch {
      setLoading(false);
      throw new Error("Erro ao fazer login");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
