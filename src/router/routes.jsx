import { useRoutes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import AllRoutes from "./AllRoutes";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: AllRoutes,
    },
  ]);
  return routes;
};

export default Routes;
