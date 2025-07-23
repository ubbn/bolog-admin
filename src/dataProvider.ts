import { DataProvider, fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  const token = localStorage.getItem("auth_token");
  if (token) {
    options.headers.set("Authorization", `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

// Base provider for regular resources
const baseProvider = jsonServerProvider(
  import.meta.env.VITE_API_URL + "/api",
  httpClient,
);

// Wrap and extend base provider
export const dataProvider: DataProvider = {
  ...baseProvider,

  getOne: (resource, params) => {
    if (resource === "profile") {
      return httpClient(`${import.meta.env.VITE_API_URL}/api/profile`).then(
        ({ json }) => ({
          data: { ...json, id: "me" }, // `id` is required by React Admin
        }),
      );
    }
    return baseProvider.getOne(resource, params);
  },

  update: (resource, params) => {
    if (resource === "profile") {
      return httpClient(`${import.meta.env.VITE_API_URL}/api/profile`, {
        method: "PUT",
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: { ...json, id: "me" },
      }));
    }
    return baseProvider.update(resource, params);
  },
};
