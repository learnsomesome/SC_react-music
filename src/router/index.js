import SCDiscover from "@/views/discover";
import SCMine from "@/views/mine";
import SCFriend from "@/views/friend";
import SCDownload from "@/views/download";

const routes = [
  {
    path: "/",
    exact: true,
    component: SCDiscover,
  },
  {
    path: "/mine",
    component: SCMine,
  },
  {
    path: "/friend",
    component: SCFriend,
  },
  {
    path: "/download",
    component: SCDownload,
  },
];

export default routes;
