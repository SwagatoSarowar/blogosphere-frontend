/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface AuthContextProps {
  user: Record<string, any> | null;
  setUser: Dispatch<SetStateAction<Record<string, any> | null>> | null;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: null,
});

let loggedUser: Record<string, any> | null = null;

if (localStorage.getItem("loggedUser")) {
  loggedUser = JSON.parse(localStorage.getItem("loggedUser") as string);
}

export const AuthProvider = function ({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(loggedUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
