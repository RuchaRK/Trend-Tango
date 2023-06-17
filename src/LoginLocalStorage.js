const LOGIN_TOKEN = 'token';

export const setLoginToken = (token) => {
  localStorage.setItem(LOGIN_TOKEN, token);
};

export const getLoginToken = () => {
  localStorage.getItem(LOGIN_TOKEN);
};

export const clearLoginToken = () => {
  localStorage.removeItem(LOGIN_TOKEN);
};
