import { createContext,useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContext = createContext();

const PropertiesContextApi = ({ children }) => {

  const [state,dispatch] = useReducer(reducer,[])

  return <PropertiesContext.Provider value={[state,dispatch]}>{children}</PropertiesContext.Provider>;
};

export default PropertiesContextApi;