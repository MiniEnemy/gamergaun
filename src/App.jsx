import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import BannerPage from './pages/banner/BannerPage';
import Footer from './components/footer/Footer';
import TopHeader from './components/topheader/TopHeader';
import Home from './pages/home/Home';
import Login from './helpers/login/Login.jsx';
import Register from './helpers/register/register.jsx';
import Contact from './helpers/contact/Contact.jsx';
import Privacy from './helpers/privacy/Privacy.jsx';
import Terms from './helpers/t&c/Terms.jsx';

function App() {
  return <>
  <Router>
    <TopHeader />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/privacy" element={<Privacy />} />
      <Route exact path="/Terms" element={<Terms />} />
      
    </Routes>
    <Footer />
  </Router>
  </>
  
  
}

export default App;
