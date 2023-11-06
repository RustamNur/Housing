import PropertiesContextApi from "./properties/PropertiesContext";

const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesContextApi>{children}</PropertiesContextApi>
    </>
  );
};

export default RootContext;
