import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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

import {
  DrawerHeader,
  StyledBox,
  useStyles,
  StyledAppBar,
  StyledIconButton,
  StyledTypography,
} from "./styles";

import { crmList } from "../../consts/sidebarCrm";

import { JSONConvert } from "../../utils/jsonConverts";
import { localStorageHelper } from "../../utils/localStorageHelper";
import CustomDrawer from "../../Components/CustomDrawer";

const drawerWidth: number = 240;

const initialUserData = (): TUserData => {
  const userData = JSONConvert(localStorageHelper("userData") || "");
  if (userData) {
    return userData;
  }
  return {};
};

const Main = () => {
  const [user, setUser] = useState<TUserData>(initialUserData());
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeListItem, setActiveListItem] = useState<number | null>(null);

  const classes = useStyles();
  const { route } = useParams();
  const theme = useTheme();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    localStorageHelper("userData", JSONConvert({ name: "Самат" }, false));

    if (route) {
      setActiveListItem(
        crmList.filter((path) => path.path === `/${route}`)[0]?.id
      );
    } else {
      setActiveListItem(1);
    }
  }, []);

  const drawer = (
    <div>
      <DrawerHeader>
        <IconButton
          onClick={() => setMobileOpen(false)}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {crmList.map((crm) => (
          <Link key={crm.path} to={crm.path} className={classes.link}>
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
    <StyledBox>
      <CssBaseline />
      <StyledAppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <StyledIconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </StyledIconButton>
          <Typography variant="h6" noWrap component="div">
            Avengers
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <CustomDrawer
          variant="temporary"
          drawerWidth={drawerWidth}
          onClose={handleDrawerToggle}
          open={mobileOpen}
          display={{ xs: "block", sm: "none" }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </CustomDrawer>
        <CustomDrawer
          variant="permanent"
          drawerWidth={drawerWidth}
          display={{ xs: "none", sm: "block" }}
        >
          {drawer}
        </CustomDrawer>
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
        <StyledTypography paragraph>
          Добрый день, {user.name || "Пользователь"}
        </StyledTypography>

        <div className={classes.news}>Объявления и новости.</div>
      </Box>
    </StyledBox>
  );
};

export default Main;
