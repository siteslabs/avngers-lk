import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { TUserData } from "./types";
import { StyledBox, StyledAppBar, StyledIconButton } from "./styles";
import { EUrls } from "../../consts/urls";
import { JSONConvert } from "../../utils/jsonConverts";
import { localStorageHelper } from "../../utils/localStorageHelper";
import CustomDrawer from "../../Components/CustomDrawer";
import Account from "./pageContents/account";
import Statistics from "./pageContents/statistics";
import Drawer from "../../Components/Drawer";
import { drawerWidth, initialUserData } from "./utils";

const Main = () => {
  const location = useLocation();
  const user: TUserData = initialUserData();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    localStorageHelper("userData", JSONConvert({ name: "Самат" }, false));
  }, []);

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
          <Drawer setMobileOpen={setMobileOpen} />
        </CustomDrawer>
        <CustomDrawer
          variant="permanent"
          drawerWidth={drawerWidth}
          display={{ xs: "none", sm: "block" }}
        >
          <Drawer setMobileOpen={setMobileOpen} />
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
        {(location.pathname === EUrls.STATISTICS && <Statistics />) || (
          <Account user={user} />
        )}
      </Box>
    </StyledBox>
  );
};

export default Main;
