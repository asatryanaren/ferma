import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { BiUser } from "react-icons/bi";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineDollar,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { GiLabradorHead } from "react-icons/gi";
import { TfiMenuAlt, TfiDashboard } from "react-icons/tfi";
import { Button } from "@mui/material";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/loginSlice";

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

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => setOpen(!open);
  const disptach = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    disptach(logOut());
    navigate("/");
  };

  return (
    <>
      <Box sx={{ display: "flex", mb: "80px" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={!open && { width: `calc(100% - ${64}px)` }}
          style={{ backgroundColor: "white", color: "#808FA5" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
              >
                {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
              </IconButton>
              Dashboard
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "#009D75" }}>English</Typography>
              <Button
                variant="outlined"
                sx={{ ml: "10px", color: "inherit" }}
                onClick={logout}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader sx={{ background: "#00112B" }}>
            <GiLabradorHead
              style={{
                color: "white",
                fontSize: "25px",
                margin: "0 auto",
              }}
            />
          </DrawerHeader>

          <List sx={{ background: "#00112B", height: "100vh", color: "white" }}>
            {[
              "Dashboard",
              "Animals",
              "Select Fields",
              "Spendings",
              "Users",
            ].map((text) => (
              <NavLink
                to={`/${text.toLowerCase()}`}
                key={text}
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
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
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
          <ListItemButton
            onClick={handleDrawerToggle}
            sx={{
              background: "#051A43",
              color: "white",
              display: "flex",
              justifyContent: "center",
              minHeight: "50px",
              "&:hover": {
                background: "#00112B",
              },
            }}
          >
            {open ? <AiOutlineLeft /> : <AiOutlineRight />}
          </ListItemButton>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
