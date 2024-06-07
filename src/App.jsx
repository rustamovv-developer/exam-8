import { Route, Routes } from "react-router-dom";
// components
import Nav from "./components/nav";
import Footer from "./components/footer";
// pages
import Home from "./pages/home";
import Detail from "./pages/detail";
import Products from "./pages/products";
import About from "./pages/about";
import Payment from "./pages/payment";
import Return from "./pages/return";
import Garant from "./pages/garant";
import Contact from "./pages/contact";
import BlogPage from "./pages/blog";
import Basket from "./pages/basket";
import Favorites from "./pages/favorites";
import Error from "./pages/error";
import Adv from "./components/adv";
// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Adv />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
