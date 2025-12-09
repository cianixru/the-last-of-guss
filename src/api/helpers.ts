import { OpenAPI } from "./generated";

const STORAGE_KEY = "auth_token";

export const setAuthToken = (token?: string) => {
  OpenAPI.TOKEN = token;
  try {
    if (token) {
      localStorage.setItem(STORAGE_KEY, token);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    console.warn("Storage не доступен", e);
  }
};

export const initAuthFromStorage = () => {
  try {
    const t = localStorage.getItem(STORAGE_KEY) || undefined;
    if (t) {
      OpenAPI.TOKEN = t;
    }
  } catch (e) {
    console.warn("Storage не доступен", e);
  }
};

export const getAuthToken = () => OpenAPI.TOKEN;
