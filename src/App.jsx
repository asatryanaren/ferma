import "./App.css";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PROTECTED_ROUTES } from "./Routes/prodected";
import { PUBLIC_ROUTES } from "./Routes/public";
import { useEffect } from "react";
import { selectIsLoggedIs } from "./features/loginSlice";
import SideBar from "./components/Sidebar/Sidebar";
import { Box } from "@mui/material";

function App() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams("/");
  // const page = searchParams.get("page") ?? "";
  const isLoggedIn = useSelector(selectIsLoggedIs);

  useEffect(() => {
    if (isLoggedIn && window.location.pathname === "/") {
      setSearchParams({ page: "/dashboard" });
      navigate(`/dashboard`);
    }
  }, [isLoggedIn]);

  const routes = isLoggedIn ? PROTECTED_ROUTES : PUBLIC_ROUTES;

  return (
    <Box sx={{ height: "100%", backgroundColor: isLoggedIn && "#f0f2f5" }}>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<SideBar />}>
            {routes.map((route) => (
              <Route
                index
                path={route.path}
                key={route.path}
                element={route.component}
              />
            ))}
          </Route>
        ) : (
          routes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={route.component}
            />
          ))
        )}
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </Box>
  );
}

export default App;
