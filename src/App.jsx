import { Route, Routes } from "react-router-dom";
// components
import Adv from "./components/adv";
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
import Categories from "./pages/categories";
import Login from "./pages/login";
import Auth from "./pages/auth";
import Admin from "./pages/admin";
import CategoryCreate from "./pages/category-create";
import CategoryManage from "./pages/category-manage";
import ProductCreate from "./pages/product-create";
import ProductManage from "./pages/product-manage";
import Error from "./pages/error";
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
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="category-create" element={<CategoryCreate />} />
            <Route path="category-manage" element={<CategoryManage />} />
            <Route path="product-create" element={<ProductCreate />} />
            <Route path="product-manage" element={<ProductManage />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
