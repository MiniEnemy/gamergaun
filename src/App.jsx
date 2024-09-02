import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TopHeader from './components/topheader/TopHeader';
import Home from './pages/home/Home';
import Login from './helpers/login/Login.jsx';
import Register from '../src/helpers/register/Register.jsx';
import Contact from './helpers/contact/Contact.jsx';
import Privacy from './helpers/privacy/Privacy.jsx';
import Terms from './helpers/t&c/Terms.jsx';
import PageNotFound from './pages/notfound/pagenotfound.jsx';
import Aboutus from './pages/aboutus/AboutUs.jsx';
import LearnMore from '../src/pages/learnmore/learnmore.jsx';



function App() {
  return <>
  <Router>
    <TopHeader title="GamerGaun Rewards" />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/privacy" element={<Privacy />} />
      <Route exact path="/Terms" element={<Terms />} />
      <Route exact path="*" element={<PageNotFound />} />
      <Route exact path="/Aboutus" element={<Aboutus />} />
      <Route exact path="/more-info" element={<LearnMore />
} />

      
      
    </Routes>
    <Footer />
  </Router>
  </>
  
  
}

export default App;
