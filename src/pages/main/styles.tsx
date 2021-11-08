import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

export const useStyles = makeStyles({
  header: {
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#2D4452",
  },
  news: {
    width: "100%",
    height: "500px",
    padding: "15px",
    backgroundColor: "grey",
  },
});

export const StyledBox = styled(Box)`
  display: flex;
`;

export const StyledAppBar = styled(AppBar)`
  position: fixed;
`;

export const StyledIconButton = styled(IconButton)`
  color: inherit;
`;

export const StyledTypography = styled(Typography)`
  padding-top: "20px";
  padding-bottom: "20px";
`;

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
