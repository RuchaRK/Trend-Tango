const LOGIN_TOKEN = 'token';

export const setLoginToken = (token) => localStorage.setItem(LOGIN_TOKEN, token);

export const getLoginToken = () => {
  return localStorage.getItem(LOGIN_TOKEN);
};

export const clearLoginToken = () => {
  return localStorage.removeItem(LOGIN_TOKEN);
};
