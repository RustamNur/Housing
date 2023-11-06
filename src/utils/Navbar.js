import useId from "../hooks/useId";
import HomePage from "../pages/home/HomePage";
import PropertiesPage from "../pages/properties/PropertiesPage";


export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
];

export default navbar;
