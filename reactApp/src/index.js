import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route , 
  Routes,
  BrowserRouter
} from "react-router-dom";
// import Contact from "./routes/contact";
import Contact from "./routes/contact/Contact";
import ErrorPage from "./error";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/home";
import Cart from "./routes/cart/Cart";
import Checkout from "./routes/checkout/Checkout";
import Shop from "./routes/shop/Shop";
import Details from "./routes/productdetail/Details";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/Contact",
//     element: <Contact/>,
//     errorElement: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/"  exact element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/shoppingcart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/shopdetail" element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>

    <Footer/>
  </React.StrictMode>
);
