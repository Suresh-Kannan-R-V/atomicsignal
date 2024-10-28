import ProfileCard from "../components/profilecard/ProfileCard";
import { Profile, TeamPage, FeedbackPage } from "../pages";
import Department from "../pages/department/Department";
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
    path: PATH.Setting,
    element: <ProfileCard isSetting={true} />,
  },
  {
    path: PATH.Department,
    element: <Department />,
  },
];

export default AllRoutes;
