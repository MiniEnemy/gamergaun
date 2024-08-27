import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import BannerPage from './pages/banner/BannerPage';
import Footer from './components/footer/Footer';
import TopHeader from './components/topheader/TopHeader';
import Home from './pages/home/Home';
import Login from './helpers/login/Login.jsx';

function App() {
  return <>
  <Router>
    <TopHeader />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </Router>
  </>
  
  
}

export default App;
