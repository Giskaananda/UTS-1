import './App.css';
import Header from './Components/header';
import Navbar from './Components/navbar';
import Home from './pages/home/home';
import Tentang from './pages/tentang/tentang';
import Footer from './pages/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <section className="bg">
        <div>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
          <Footer />
        </div>
      </section>
    </Router>
  );
}

export default App;
