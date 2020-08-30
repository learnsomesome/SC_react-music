import React from "react";

import { Redirect } from "react-router-dom";

import SCDiscover from "@/views/discover";
import SCRecommend from "@/views/discover/c-views/recommend";
import SCRanking from "@/views/discover/c-views/ranking";
import SCSongs from "@/views/discover/c-views/songs";
import SCDjradio from "@/views/discover/c-views/djradio";
import SCArtist from "@/views/discover/c-views/artist";
import SCAlbum from "@/views/discover/c-views/album";

import SCMine from "@/views/mine";
import SCFriend from "@/views/friend";
import SCDownload from "@/views/download";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: SCDiscover,
    children: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: SCRecommend,
      },
      {
        path: "/discover/ranking",
        component: SCRanking,
      },
      {
        path: "/discover/songs",
        component: SCSongs,
      },
      {
        path: "/discover/djradio",
        component: SCDjradio,
      },
      {
        path: "/discover/artist",
        component: SCArtist,
      },
      {
        path: "/discover/album",
        component: SCAlbum,
      },
    ],
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
