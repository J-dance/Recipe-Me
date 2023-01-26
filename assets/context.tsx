import { createContext, useContext } from "react";
import { GlobalUserContent } from "./types";

export const UserContext = createContext<GlobalUserContent>({
userData: {
  name: '',
  id: '',
  authenticated: false,
  recipes: []
}, // set a default value for context
setUserData: () => {},
});

export const useUserContext = () => useContext(UserContext);