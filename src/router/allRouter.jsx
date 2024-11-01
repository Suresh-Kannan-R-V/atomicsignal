import { Profile, TeamPage, FeedbackPage, Settings } from "../pages";
import OnBoard from "../pages/onBoard/onBoard";
import SignUp from "../pages/onBoard/signUp";
import { PATH } from "./path";
import { Navigate } from "react-router-dom";
export const pathSlicer = (path, sliceStart = 1) => path?.slice(sliceStart);

const privateRoutes = [
  {
    path: "/",
    element: <Navigate to={PATH.Profile} />,
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
];

export { privateRoutes, publicRoutes };
