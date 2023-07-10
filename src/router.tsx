import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import SignupPage from "./pages/signupPage/SignupPage";
import ForSalePage from "./pages/forSalePage/ForSalePage";
import CreateListingPage from "./pages/createListingPage/CreateListingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/for-sale",
    element: <ForSalePage />,
  },
  {
    path: "/create-listing",
    element: <CreateListingPage />,
  },
]);
