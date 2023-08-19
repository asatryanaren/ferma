import {
  TextField,
  Typography,
  Button,
  InputAdornment,
  Grid,
} from "@mui/material";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const Login = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <form
        onSubmit={submit}
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
        <TextField
          type="password"
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
        <Button
          fullWidth
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
