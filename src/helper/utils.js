import { getJsonItem, localStorageKey } from "./localStorage";

// Check if the user is authenticated or not.
export const useAuth = () => {
    return getJsonItem(localStorageKey.user);
}