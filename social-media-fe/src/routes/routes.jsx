//Layouts
import DefaultLayout from "../components/Layout/DefaultLayout";
import FriendLayout from "../components/Layout/FriendLayout";

//Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

import routes from "../config/routes";
import Profile from "../pages/Profile";
import FriendRequests from "../pages/FriendRequests/FriendRequest";
import FriendSent from "../pages/FriendRequests/FriendSent";
import EditProfile from "../pages/EditProfile/EditProfile";
import Friends from "../components/Friends/Friend";
import Friendsuggestion from "../components/Friends/Friendsuggestion";
import Friendyoumayknow from "../pages/FriendRequests/Friendyoumayknow";

const publicRoutes = [
  { path: routes.login, component: Login },
  { path: routes.register, component: Register },
  {
    path: routes.friendrequests,
    component: FriendRequests,
    layout: FriendLayout,
  },

  {
    path: routes.sentrequests,
    component: FriendSent,
    layout: DefaultLayout,
  },

  { path: routes.friends, component: Friends, layout: FriendLayout },

  {
    path: routes.friendsuggestion,
    component: Friendsuggestion,
    layout: FriendLayout,
  },

  {
    path: routes.friendyoumayknow,
    component: Friendyoumayknow,
    layout: FriendLayout,
  },
];

const privateRoutes = [
  { path: routes.home, component: Home, layout: DefaultLayout },
  { path: routes.profile, component: Profile, layout: DefaultLayout },
  {
    path: routes.editprofile,
    component: EditProfile,
    layout: DefaultLayout,
  },
];

export { publicRoutes, privateRoutes };
