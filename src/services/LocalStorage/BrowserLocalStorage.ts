export const BrowserLocalStorage = {
  setItem: (name: string, value: string): void => localStorage.setItem(name, JSON.stringify(value)),
  getItem: <T extends string = string>(name: string): T | null => {
    const entity = localStorage.getItem(name);
    return entity ? JSON.parse(entity) : null;
  },
  removeItem: (name: string) => localStorage.removeItem(name),
};
