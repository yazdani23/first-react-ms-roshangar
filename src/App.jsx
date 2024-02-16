import './assets/css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const brand = "Amazone";

  //jsx ===> js + xml
  return (
    <BrowserRouter>
      <Header brand={brand} title="Shop" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//16.7 oop  class
//16.8 functional + hooks

{/* <div className="App">



</div>; */}