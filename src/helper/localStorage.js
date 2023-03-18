// Function for get local storage
export const getItem = (key) => localStorage.getItem(key);

// Function for get JSON form local storage
export const getJsonItem = (key) => JSON.parse(localStorage.getItem(key));

// Function for set local storage
export const setItem = (key, value) => localStorage.setItem(key, value);

// Function for set JSON local storage
export const setJsonItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// Function for remove local storage
export const removeItem = (key) => localStorage.removeItem(key);

// Function for clear local storage
export const cleanItem = () => localStorage.clear();

export const localStorageKey = {
    user: 'USER',
};
