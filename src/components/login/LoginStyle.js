import { makeStyles } from "@mui/material";

export const LoginStyle = makeStyles({
  form: {
    width: "30%",
    boxSizing: "border-box",
    padding: "20px",
    // boxShadow: "10px 0 5px -2px #888;",
    height: "auto",
  },
  btn: {
    background: "#90DACC",
    color: "white",
    padding: "15px",
    marginTop: "20px",
    width: "100%",
  },
  img: { width: "70%", marginLeft: "80px" },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#001538",
    boxShadow: 3,
  },
});
