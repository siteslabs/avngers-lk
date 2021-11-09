import { Link, useLocation } from "react-router-dom";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { crmList } from "../../consts/sidebarCrm";
import { DrawerHeader, useStyles } from "../../pages/main/styles";
import { TDrawer } from "./types";

const Drawer: React.FC<TDrawer> = ({ setMobileOpen }): JSX.Element => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div>
      <DrawerHeader>
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {crmList.map((crm) => (
          <Link key={crm.path} to={crm.path} className={classes.link}>
            <ListItem
              selected={crm.path === location.pathname}
              button
              key={crm.id}
            >
              <ListItemIcon>{crm.icon}</ListItemIcon>
              <ListItemText primary={crm.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default Drawer;
