import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Group from '~/pages/Group';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Signup from '~/pages/Signup';
import Login from '~/pages/Login';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.group, component: Group },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.signup, component: Signup },
    { path: config.routes.login, component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
