//Layouts
import DefaultLayout from "../components/Layout/DefaultLayout";

//Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

import routes from "../config/routes";
import Profile from "../pages/Profile";
const publicRoutes = [
  { path: routes.login, component: Login },
  { path: routes.register, component: Register },
  { path: routes.home, component: Home, layout: DefaultLayout },
  { path: routes.profile, component: Profile, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
