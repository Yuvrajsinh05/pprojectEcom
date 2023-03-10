// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./index"
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)






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
import {Header} from "./components/header/header";
import Footer from "./components/footer/Footer";
import Home from "./routes/home/home";
import Cart from "./routes/cart/Cart";
import Checkout from "./routes/checkout/Checkout";
import Shop from "./routes/shop/Shop";
import Details from "./routes/productdetail/Details";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/shopdetail/:productId" element={<Details />} />
      </Routes>
      </div>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)


export default App;
