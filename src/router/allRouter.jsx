import { Profile, TeamPage, FeedbackPage } from "../pages";
import { PATH } from "./path";

export const pathSlicer = (path, sliceStart = 1) => path?.slice(sliceStart);

const AllRoutes = [
  {
    path: pathSlicer(PATH.Profile),
    element: <Profile />,
  },
  {
    path: pathSlicer(PATH.TeamPage),
    element: <TeamPage />,
  },
  {
    path: pathSlicer(PATH.Feedback),
    element: <FeedbackPage />,
  },
];

export default AllRoutes;
