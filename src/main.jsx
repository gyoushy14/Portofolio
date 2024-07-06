import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutGH2 from "./Components/AboutGH2.jsx";
import Services2 from "./Components/SERVICES2.jsx";
import Skills2 from "./Components/Skills2.jsx";
import Projects2 from "./Components/Projects2.jsx";
import Contact from "./Components/Contact.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <AboutGH2 /> },
  { path: "/service", element: <Services2 /> },
  { path: "/skills", element: <Skills2 /> },
  { path: "/projects", element:  <Projects2/> },
  { path: "/contact", element:  <Contact/> },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
