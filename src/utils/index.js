export const tokenKey = 'access_token';

export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const setToStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
}

export const clearStorage = () => {
  return localStorage.clear();
}

export const excerpts = (str, count) => {
  if (str.length > count) {
    str = str.substr(0, count) + '...'
  }
  return str;
}

export function convert(value) {
  if (value >= 1000000) {
    value = (value / 1000000) + 'M'
  } else if (value >= 1000) {
    value = (value / 1000) + 'K';
  }
  return value;
}
