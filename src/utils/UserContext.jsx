import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:"Defauluser"
});
export default UserContext;