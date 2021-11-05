import Main from "../pages/main";
import { TRoutes } from "./types";
import { EUrls } from "./urls";

export const ROUTES: Array<TRoutes> = [
  {
    path: EUrls.MAIN,
    component: <Main />,
  },
  {
    path: EUrls.BREAKFAST,
    component: <Main />,
  },
  {
    path: EUrls.DUTY,
    component: <Main />,
  },
  {
    path: EUrls.BIRTHDAY,
    component: <Main />,
  },
];
