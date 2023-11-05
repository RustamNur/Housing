import { createContext } from "react";
import PropertiesContextApi from "./properties/PropertiesContext";

const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <Root.Provider>
          <PropertiesContextApi>
              {children} 
          </PropertiesContextApi>
    </Root.Provider>
  );
};

export default RootContext;
