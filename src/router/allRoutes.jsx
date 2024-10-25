import FeedbackPage from "../pages/feedback/feedback";
import Profile from "../pages/profile/profile";
import TeamPage from "../pages/team/team";

const AllRoutes = [
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/feedback",
    element: <FeedbackPage />,
  },
];

export default AllRoutes;
