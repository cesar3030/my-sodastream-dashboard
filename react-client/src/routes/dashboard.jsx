import Overview from "../views/Overview/Overview.jsx";
import Refills from "../views/Refills/Refills.jsx";
import Usage from "../views/Usage/Usage.jsx";
import Reloads from "../views/Reloads/Reloads.jsx";

var dashRoutes = [
  {
    path: "/overview",
    name: "Overview",
    icon: "education_paper",
    component: Overview
  },
  {
    path: "/refills",
    name: "Refills",
    icon: "gestures_tap-01",
    component: Refills
  },
  {
    path: "/usage",
    name: "Usage",
    icon: "emoticons_satisfied",
    component: Usage
  },
  {
    path: "/reloads",
    name: "Reloads",
    icon: "objects_spaceship",
    component: Reloads
  },
  { redirect: true, path: "/", pathTo: "/overview", name: "Overview" }
];
export default dashRoutes;
