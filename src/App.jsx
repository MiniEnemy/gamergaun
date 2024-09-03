import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TopHeader from "./components/topheader/TopHeader";
import Home from "./pages/home/Home";
import Login from "./helpers/login/Login.jsx";
import Register from "../src/helpers/register/Register.jsx";
import Contact from "./helpers/contact/Contact.jsx";
import Privacy from "./helpers/privacy/Privacy.jsx";
import Terms from "./helpers/t&c/Terms.jsx";
import PageNotFound from "./pages/notfound/pagenotfound.jsx";
import Aboutus from "./pages/aboutus/AboutUs.jsx";
import LearnMore from "../src/pages/learnmore/learnmore.jsx";
import Productview from "./pages/product/productview/Productview.jsx";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchedData();
  }, []);

  return (

    <Router>
      <ToastContainer />
      <TopHeader title="GamerGaun Rewards" />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/Terms" element={<Terms />} />
        <Route exact path="/Aboutus" element={<Aboutus />} />
        <Route exact path="/more-info" element={<LearnMore />} />
        <Route exact path="/Productview/:id" element={<Productview isLoading={isLoading} product={isLoading} products={products} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
