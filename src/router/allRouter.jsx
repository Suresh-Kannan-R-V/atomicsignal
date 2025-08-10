import { Navigate } from "react-router-dom";
import { FeedbackPage, Profile, Settings, TeamPage } from "../pages";
import ForgotPassword from "../pages/onBoard/forgetPassword";
import LogIn from "../pages/onBoard/logIn";
import { ResetPage } from "../pages/onBoard/resetPage";
import SignUp from "../pages/onBoard/signUp";
import { PATH } from "./path";

const privateRoutes = [
  {
    path: "/",
    element: <Navigate to={PATH.SignUp} />,
  },
  {
    path: PATH.Profile,
    element: <Profile />,
  },
  {
    path: PATH.TeamPage,
    element: <TeamPage />,
  },
  {
    path: PATH.Feedback,
    element: <FeedbackPage />,
  },
  {
    path: PATH.Setting,
    element: <Settings />,
  },
];

const publicRoutes = [
  {
    path: PATH.SignUp,
    element: <SignUp />,
  },
  {
    path: PATH.ResetPage,
    element: <ResetPage />,
  },
  {
    path: PATH.Login,
    element: <LogIn />,
  },
  {
    path: PATH.ForgotPassword,
    element: <ForgotPassword />,
  },
];

export { privateRoutes, publicRoutes };
