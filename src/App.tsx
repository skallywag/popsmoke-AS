import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.scss";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
