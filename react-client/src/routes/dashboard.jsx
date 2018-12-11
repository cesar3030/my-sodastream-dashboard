import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import Overview from "../views/Overview/Overview.jsx";
import Refills from "../views/Refills/Refills.jsx";
import Usage from "../views/Usage/Usage.jsx";
import Reloads from "../views/Reloads/Reloads.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  {
    path: "/reloads",
    name: "Reloads",
    icon: "design_app",
    component: Reloads
  },
  {
    path: "/overview",
    name: "Overview",
    icon: "design_app",
    component: Overview
  },
  {
    path: "/refills",
    name: "Refills",
    icon: "design_app",
    component: Refills
  },
  {
    path: "/usage",
    name: "Usage",
    icon: "design_app",
    component: Usage
  },
  { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
  { path: "/maps", name: "Maps", icon: "location_map-big", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
