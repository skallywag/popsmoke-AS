import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAppDispatch } from "../src/state/state.hooks";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { setLogin } from "./state/appSlice";
import themes from "../src/themes/themes.module.scss";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";

function App() {
  const loginDispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      loginDispatch(setLogin(true));
    } else {
      loginDispatch(setLogin(false));
    }
  }, []);
  return (
    <div className="App">
      <NavBar />
      <ToastContainer
        theme="dark"
        progressStyle={{ background: themes.primaryOrange }}
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
