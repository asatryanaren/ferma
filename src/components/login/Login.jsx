import {
  TextField,
  Typography,
  Button,
  InputAdornment,
  Grid,
} from "@mui/material";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginedUser } from "../../services/login.service";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("davit.davtyan.dev@gmail.com");
  const [password, setPassword] = useState("qwerty123");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(loginedUser({ email, password }));
  };
  const blur = (e) => {
    if (e.target.name === "email" && e.target.value.length === 0)
      setEmailDirty(true);
    if (e.target.name === "password" && e.target.value.length === 0)
      setPasswordDirty(true);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
    setEmailDirty(false);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
    setPasswordDirty(false);
  };

  return (
    <Grid sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <form
        onSubmit={onsubmit}
        style={{
          width: "30%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          boxShadow: "10px 0 5px -2px #90DACC",
        }}
      >
        <Typography sx={{ fontSize: 18, fontWeight: "bold", color: "#001538" }}>
          Login
        </Typography>
        <TextField
          type="email"
          value={email}
          name="email"
          onBlur={(e) => blur(e)}
          onChange={changeEmail}
          fullWidth
          sx={{ mt: "20px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BiUser />
              </InputAdornment>
            ),
          }}
        />
        {emailDirty && (
          <Typography sx={{ color: "red" }}>Please enter user email</Typography>
        )}
        <TextField
          type="password"
          value={password}
          name="password"
          onBlur={(e) => blur(e)}
          onChange={changePassword}
          fullWidth
          sx={{ mt: "20px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AiOutlineLock />
              </InputAdornment>
            ),
          }}
        />
        {passwordDirty && (
          <Typography sx={{ color: "red" }}>
            Please enter your password
          </Typography>
        )}
        <Button
          fullWidth
          type="submit"
          sx={{
            background: "#90DACC",
            color: "white",
            p: "15px",
            mt: "20px",
            "&:hover": { background: "#20B2AA" },
          }}
        >
          Log in
        </Button>
      </form>
      <img
        src="./images/login/ferma.png"
        style={{ width: "70%", marginLeft: "80px" }}
      />
    </Grid>
  );
};
export default Login;
