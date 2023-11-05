import { createContext } from "react";
export const UserContext = createContext({
    user: null,
    userRole: null,
    userInformation: null,
});
