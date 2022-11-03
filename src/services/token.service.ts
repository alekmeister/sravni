import { BrowserLocalStorage } from './LocalStorage';

const ACCESS_TOKEN_NAME = 'sravni-access-token';

export const TokenService = {
  getLocalAccessToken() {
    return BrowserLocalStorage.getItem(ACCESS_TOKEN_NAME);
  },
  setLocalAccessToken(token: string) {
    BrowserLocalStorage.setItem(ACCESS_TOKEN_NAME, token);
  },
  deleteLocalAccessToken() {
    BrowserLocalStorage.removeItem(ACCESS_TOKEN_NAME);
  },
};
