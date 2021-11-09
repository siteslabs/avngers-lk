import Main from "../pages/main";
import { TRoutes } from "./types";
import { EUrls } from "./urls";

export const ROUTES: TRoutes[] = [
  {
    path: `/:route`,
    component: <Main />,
  },
  {
    path: EUrls.MAIN,
    component: <Main />,
  },
];
