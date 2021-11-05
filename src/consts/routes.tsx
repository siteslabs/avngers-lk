import Main from "../pages/main";
import { EUrls } from "./urls";

export const ROUTES = [
  {
    exact: true,
    path: EUrls.MAIN,
    component: <Main />,
  },
  {
    exact: true,
    path: EUrls.BREAKFAST,
    component: <Main />,
  },
  {
    exact: true,
    path: EUrls.DUTY,
    component: <Main />,
  },
  {
    exact: true,
    path: EUrls.BIRTHDAY,
    component: <Main />,
  },
];
