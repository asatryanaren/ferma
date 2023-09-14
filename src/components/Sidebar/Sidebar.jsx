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
import { Button, Paper } from "@mui/material";
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
  const [pageName, setPageName] = React.useState("dashboard");
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
          style={{
            backgroundColor: "white",
            color: "#808FA5",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
              >
                {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
              </IconButton>
              Dashboard {pageName !== "dashboard" && `/ ${pageName}`}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  sx={{
                    color: "#1da57a",
                    fontSize: "14px",
                    position: "relative",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                >
                  English
                </Typography>
                <Paper
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: "33px",
                    left: "-16px",
                    p: "13px",
                    boxShadow: "0px 2px 22px -1px rgba(0,0,0,0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,.85)",
                      "&:hover": {
                        backgroundColor: "#F5F5F5",
                      },
                    }}
                  >
                    English
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,.85)",
                      "&:hover": {
                        backgroundColor: "#F5F5F5",
                      },
                    }}
                  >
                    Հայերեն
                  </Typography>
                </Paper>
              </Box>

              {/* <BlockHover sx={{ backgroundColor: "red" }} /> */}

              <Button
                variant="outlined"
                sx={{
                  ml: "10px",
                  color: "#1F2228",
                  fontSize: "14px",
                  padding: "4px 15px",
                  borderRadius: "2px",
                  backgroundColor: "transparent",
                  border: "1px solid #d9d9d9",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: "1px solid #1da57a",
                    color: "#1da57a",
                  },
                }}
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
                to={text.toLowerCase()}
                key={text}
                onClick={() => setPageName(text.toLowerCase())}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                // style={({ isActive }) => ({
                //   backgroundColor: isActive ? "var(--color-active)" : "green",
                // })}
              >
                <ListItem
                  disablePadding
                  sx={{
                    display: "block",
                    "&:active": {
                      // color: colors.blue[500],
                      backgroundColor: "red",
                    },
                  }}
                >
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
