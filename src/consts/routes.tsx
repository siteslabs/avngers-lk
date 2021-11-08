import Main from "../pages/main";
import { TRoutes } from "./types";
import { EUrls } from "./urls";

export const ROUTES: Array<TRoutes> = [
  {
    path: EUrls.MAIN,
    component: <Main />,
  },
  {
    path: `/:route`,
    component: <Main />,
  },
];
