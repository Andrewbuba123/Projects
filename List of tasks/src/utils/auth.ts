export const login = (login: string, password: string): boolean => {
  if (login === "admin" && password === "admin") {
    localStorage.setItem("token", crypto.randomUUID());
    return true;
  }

  return false;
};

export const logout = (): void => {
  localStorage.removeItem("token");
};

export const isAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem("token"));
};
