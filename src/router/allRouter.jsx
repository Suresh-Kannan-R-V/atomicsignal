
import { Profile, TeamPage, FeedbackPage, Settings } from "../pages";
import { PATH } from "./path";

export const pathSlicer = (path, sliceStart = 1) => path?.slice(sliceStart);

const AllRoutes = [
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
    path: PATH.Settings,
    element: <Settings />,

  },
];

export default AllRoutes;
