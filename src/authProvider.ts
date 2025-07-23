import { AuthProvider } from "react-admin";

const API = import.meta.env.VITE_API_URL;

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const request = new Request(API + "/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const response = await fetch(request);

    if (response.status < 200 || response.status >= 300) {
      throw new Error("Login failed");
    }

    const { jwt } = await response.json();

    localStorage.setItem("auth_token", jwt);
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("auth_token");
    return Promise.resolve();
  },
  // Runs when user navigates to new location to check for permissions or rules
  getPermissions: async () => {
    return Promise.resolve();
    const token = localStorage.getItem("auth_token");
    const response = await fetch(API + "/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("GetPermission...");

    if (!response.ok) return Promise.reject();

    const profile = await response.json();
    return Promise.resolve(profile.roles); // You can return roles as permissions
  },
  // getIdentity: async () => {
  //   const token = localStorage.getItem("auth_token");
  //   const response = await fetch(API + "/api/profile", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   console.log("Getidentity");

  //   if (!response.ok) return Promise.reject();

  //   const profile = await response.json();
  //   return Promise.resolve({
  //     id: profile.username,
  //     fullName: profile.username,
  //     email: profile.email,
  //     roles: profile.roles,
  //     avatar: "/default-avatar.png", // Optional
  //   });
  // },
  // Runs when user navigates to new location to check for auth
  checkAuth: () => {
    return localStorage.getItem("auth_token")
      ? Promise.resolve()
      : Promise.reject();
  },
  // Runs when API returns an error
  checkError: (error) => {
    const status = error.status;
    console.log("Error code: " + status);
    return Promise.resolve();
  },
};
