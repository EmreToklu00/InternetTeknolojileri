import HomeView from "../pages/home/HomeView";
import HomeLayout from "../layout/HomeLayout";
import ReactHooksView from "../pages/react-hooks/ReactHooksView";
import CRUDView from "../pages/crud/CRUDView";
import ReactReduxView from "../pages/redux/ReactReduxView";
import JsonPlaceholderView from "../pages/json-place-holder/JSONPlaceholderView";

var routes = [
  {
    path: "/",
    layout: HomeLayout,
    component: HomeView,
  },
  {
    path: "/react-hooks",
    layout: HomeLayout,
    component: ReactHooksView,
  },
  {
    path: "/crud",
    layout: HomeLayout,
    component: CRUDView,
  },
  {
    path: "/react-redux",
    layout: HomeLayout,
    component: ReactReduxView,
  },
  {
    path: "/json-place-holder",
    layout: HomeLayout,
    component: JsonPlaceholderView,
  },
];

export default routes;

