// import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios";

function App() {
  const [state, setState] = useState();
  async function getLogin() {
    const response = await axios.post(`http://localhost:5000/api/auth/login`);
    setState(response);
    return response.data;
  }
  useEffect(() => {
    getLogin();
  }, []);
  console.log(state);
  return (
    <div>
      {/* <Login /> */}
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
