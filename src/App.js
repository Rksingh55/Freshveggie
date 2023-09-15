import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Components/product";
import Cart from "./Components/cart";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Category from "./Pages/Category";
import Item from "./Pages/Item";
import More from "./Pages/More";
import Nav from "./Pages/Nav";
import Gallery from "./Pages/Gallery";
import Createblog from "./Blog/Createblog";
import Allblog from "./Blog/Allblog";
import Footer from "./Pages/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Login from "./Pages/Login";
import Adminpage from "./Pages/Adminpage";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <div className="maindiv"> 
      <h1>Your Products</h1>
      <Product/>
      <Cart/>
      </div> */}

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/more" element={<More />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/createblog" element={<Createblog />} />
          <Route path="/allblog" element={<Allblog />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
