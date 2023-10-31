import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn, SignUp } from "./views";
import RouteWithLayout from "./RouteWithLayout";
import LoginLayout from "./layouts/LoginLayout/LoginLayout";
import { PATHS } from "./commonTypes";

const router = createBrowserRouter([
  {
    path: PATHS.SIGN_IN,
    element: (
      <RouteWithLayout
        component={SignIn}
        layout={LoginLayout}
        layoutProps={{ title: "Sign In" }}
      />
    ),
  },
  {
    path: PATHS.SIGN_UP,
    element: (
      <RouteWithLayout
        component={SignUp}
        layout={LoginLayout}
        layoutProps={{ title: "Sign Up" }}
      />
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};
export default Routes;
