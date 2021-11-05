export const localStorageHelper = (
  key: string,
  method: string = "getItem",
  value?: any
) => {
  if (method === "getItem") {
    return localStorage.getItem(key);
  } else if (method === "setItem") {
    return localStorage.setItem(key, value);
  }
};
