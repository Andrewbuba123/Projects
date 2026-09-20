import { User } from "../types";

const USER_KEY = "user";

export const login = (loginValue: string, password: string): User | null => {
  if (loginValue !== "admin" || password !== "admin") {
    return null;
  }

  const user: User = { id: crypto.randomUUID(), login: loginValue };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
};


export const logout = (): void => {
  localStorage.removeItem("USER_KEY");
};

export const getCurrentUser = (): User | null => {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
};
