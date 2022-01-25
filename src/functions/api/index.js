let fetchMethod;

if (typeof window === "undefined") {
  const fetch = require("node-fetch");

  fetchMethod = fetch;
} else {
  fetchMethod = fetch;
}

const baseConfig = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

const api = {
  get: (url, options = {}) => {
    const headers = getHeaders(options);

    return fetchMethod(url, {
      method: "GET",
      ...options,
      headers,
    });
  },

  post: (url, { body, ...options }) => {
    const headers = getHeaders(options);

    return fetchMethod(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
      headers,
    });
  },

  delete: (url, options = {}) => {
    const headers = getHeaders(options);

    return fetchMethod(url, {
      method: "DELETE",
      ...options,
      headers,
    });
  },
};

module.exports = { api };

const getHeaders = (options) => {
  let headers = { ...baseConfig.headers };
  if (options.headers) {
    headers = {
      ...headers,
      ...options.headers,
    };
  }
  if (typeof window !== "undefined") {
    setAuthHeaders({ options, headers });
  }
  return headers;
};

const setAuthHeaders = ({ options, headers }) => {
  if (options.isAuth) {
    const token = localStorage.getItem("auth_local_token");

    headers.Authorization = `Bearer ${token}`;
  }
};
