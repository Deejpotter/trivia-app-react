import { createContext } from "react";

let Context = createContext({auth: false, user: null});

export default Context;