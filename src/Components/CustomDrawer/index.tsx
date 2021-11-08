import Drawer from "@mui/material/Drawer";
import { TCustomDrawer } from "./types";

const CustomDrawer: React.FC<TCustomDrawer> = ({
  drawerWidth,
  variant,
  children,
  display,
  ...rest
}) => {
  return (
    <Drawer
      {...rest}
      variant={variant}
      sx={{
        display,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
