import { Route, Routes } from "react-router-dom";
// components
import Nav from "./components/nav";
import Footer from "./components/footer";
// pages
import Home from "./pages/home";
import Detail from "./pages/detail";
import About from "./pages/about";
import Payment from "./pages/payment";
import Return from "./pages/return";
import Garant from "./pages/garant";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Basket from "./pages/basket";
import Favorites from "./pages/favorites";
import Error from "./pages/error";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
