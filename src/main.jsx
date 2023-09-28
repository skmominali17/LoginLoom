import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DbProvider } from "./contexts/DataBaseContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import { UserLoggedProvider } from "./contexts/UserLogged.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/home",
    element:<Home />
  },
   
  {
    path: "/profile",
    element: <Profile />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DbProvider>
      <UserLoggedProvider>
        <RouterProvider router={router} />
      </UserLoggedProvider>
    </DbProvider>
  </React.StrictMode>
);
