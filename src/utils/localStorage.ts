const LocalStorage = {
  setLocalStorage: function (key: string, value: string | number | boolean) {
    return typeof window !== "undefined"
      ? localStorage.setItem(key, JSON.stringify(value))
      : null;
  },

  getLocalStorage: function (
    key: string,
    defaultValue: string | number | boolean | undefined
  ) {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } else {
      return null;
    }
  },

  setObjectLocalStorage: function (key: string, value: object) {
    return typeof window !== "undefined"
      ? localStorage.setItem(key, JSON.stringify(value))
      : null;
  },

  getObjectLocalStorage: function (key: string) {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : null;
    } else {
      return null;
    }
  },

  removeLocalStorage: function (key: string) {
    return typeof window !== "undefined" ? localStorage.removeItem(key) : null;
  },

  clearLocalStorage: function () {
    return typeof window !== "undefined" ? localStorage.clear() : null;
  },
};

export default LocalStorage;
