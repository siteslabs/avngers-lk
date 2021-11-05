import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";

import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { TUserData } from "./types";

import { useStyles } from "./styles";

import { crmList } from "../../consts/sidebarCrm";

import { JSONConvert } from "../../utils/jsonConverts";
import { localStorageHelper } from "../../utils/localStorageHelper";

const drawerWidth: number = 240;

const initialUserData = () => {
  const userData = JSONConvert(localStorageHelper("userData", "getItem") || "");
  if (userData) {
    return userData;
  }
  return {};
};

const Main = () => {
  const classes = useStyles();
  const [user, setUser] = useState<TUserData>(initialUserData());
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeListItem, setActiveListItem] = useState<number | null>(null);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setActiveListItem(crmList[0].id);

    localStorageHelper(
      "userData",
      "setItem",
      JSONConvert({ name: "Самат" }, "stringify")
    );
  }, []);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {crmList.map((crm) => (
          <Link to={crm.path} className={classes.link}>
            <ListItem
              onClick={() => setActiveListItem(crm.id)}
              selected={crm.id === activeListItem}
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
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Avengers
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <TextField
          id="input-with-icon-textfield"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Typography className={classes.greeting} paragraph>
          Добрый день, {user.name || "Пользователь"}
        </Typography>

        <div className={classes.news}>Объявления и новости.</div>
      </Box>
    </Box>
  );
};

export default Main;
