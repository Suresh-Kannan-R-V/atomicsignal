import { useRoutes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import AllRoutes from "./allRouter";
import Theme from "../themes/theme";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Theme children={<Layout />} />,
      children: AllRoutes,
    },
  ]);
  return routes;
};

export default Routes;
