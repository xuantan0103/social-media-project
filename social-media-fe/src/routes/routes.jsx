//Layouts
import DefaultLayout from "../components/Layout/DefaultLayout";
import FriendLayout from "../components/Layout/FriendLayout";

//Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import FriendRequests from "../pages/FriendRequests/FriendRequest";
import EditProfile from "../pages/EditProfile/EditUer";
import Friendyoumayknow from "../pages/FriendRequests/Friendyoumayknow";

import routes from "../config/routes";
import Friends from "../pages/Friends/Friend";

const publicRoutes = [
  { path: routes.login, component: Login },
  { path: routes.register, component: Register },
  {
    path: routes.friends,
    component: Friends,
    layout: FriendLayout,
  },
  {
    path: routes.friendrequests,
    component: FriendRequests,
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
