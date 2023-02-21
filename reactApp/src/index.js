import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./routes/contact";
import ErrorPage from "./error";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Contact",
    element: <Contact/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);
