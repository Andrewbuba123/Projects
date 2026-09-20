import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  getCurrentUser,
  login as loginToStorage,
  logout as logoutFromStorage,
} from "../utils/auth";
import { User } from "../types";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => getCurrentUser());

  const login = (loginValue: string, password: string): boolean => {
    const loggedInUser = loginToStorage(loginValue, password);

    if (!loggedInUser) {
      return false;
    }

    setUser(loggedInUser);
    return true;
  };

  const logout = () => {
    logoutFromStorage();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
