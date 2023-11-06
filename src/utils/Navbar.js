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
  {
    id: useId,
    element: <h3>Login Page</h3>,
    title: "Login",
    path: "/login",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h3>SignUp Page</h3>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];

export default navbar;
