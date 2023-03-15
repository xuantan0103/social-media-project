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
import EditProfile from "../pages/editProfile/EditProfile";
import Friends from "../components/Friends/Friend";

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

  {
    path: routes.editprofile,
    component: EditProfile,
    layout: DefaultLayout,
  },

  { path: routes.friends, component: Friends },
];

const privateRoutes = [
  { path: routes.home, component: Home, layout: DefaultLayout },
  { path: routes.profile, component: Profile, layout: DefaultLayout },
];

export { publicRoutes, privateRoutes };
