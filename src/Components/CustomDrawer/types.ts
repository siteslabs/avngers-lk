import { DrawerProps } from "@mui/material";

export type TCustomDrawer = DrawerProps & {
  drawerWidth?: number;
  display?: {
    xs: string;
    sm: string;
  };
};
