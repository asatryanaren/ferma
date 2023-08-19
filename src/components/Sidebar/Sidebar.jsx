import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { BiUser } from "react-icons/bi";
import { AiOutlineMenuFold, AiOutlineDollar } from "react-icons/ai";
import { GiLabradorHead } from "react-icons/gi";
import { TfiMenuAlt, TfiDashboard } from "react-icons/tfi";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={!open && { left: "64px" }}
        style={{ backgroundColor: "white", color: "#808FA5" }}
        // style={open && { marginRight: "64" }}
        // { backgroundColor: "white", color: "#808FA5" },
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {/* Mini variant drawer */}
            {/* <AiOutlineMenuFold /> */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                // marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              {/* <MenuIcon /> */}
              <AiOutlineMenuFold />
            </IconButton>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ background: "#00112B" }}>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ m: "0 auto", backgroundColor: "#00112B" }}
          >
            {/* {theme.direction === "rtl" ? (
              // <ChevronRightIcon />
              <AiOutlineMenuFold />
            ) : (
              // <ChevronLeftIcon />
              // <AiOutlineMenuFold /> */}
            <GiLabradorHead
              style={{
                color: "white",
                fontSize: "25px",
              }}
            />
            {/* )} */}
          </IconButton>
        </DrawerHeader>
        <List sx={{ background: "#00112B", height: "100vh", color: "white" }}>
          {["Dashboard", "Animals", "Select Fields", "Spendings", "Users"].map(
            (text) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "20px",
                    }}
                  >
                    {text === "Dashboard" && <TfiDashboard />}
                    {text === "Animals" && <GiLabradorHead />}
                    {text === "Select Fields" && <TfiMenuAlt />}
                    {text === "Spendings" && <AiOutlineDollar />}
                    {text === "Users" && <BiUser />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph></Typography>
        <Typography paragraph></Typography>
      </Box> */}
    </Box>
  );
}
