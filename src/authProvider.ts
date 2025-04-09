import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", username);
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Invalid username or password"));
    }
  },
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // Runs when user navigates to new location to check for permissions or rules
  getPermissions: () => {
    return Promise.resolve();
  },
  // Runs when user navigates to new location to check for auth
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // Runs when API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
};
