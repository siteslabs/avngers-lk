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
  greeting: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  news: {
    width: "100%",
    height: "500px",
    padding: "15px",
    backgroundColor: "grey",
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
