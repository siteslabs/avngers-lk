export const localStorageHelper = (key: string, value?: string) => {
  if (value) {
    return localStorage.setItem(key, value);
  }
  return localStorage.getItem(key);
};
