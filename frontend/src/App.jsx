import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/product/ProductDetailsPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfilePage from './pages/user/ProfilePage';
import UpdateProfilePage from './pages/user/UpdateProfilePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Toaster richColors position="bottom-center" />
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/me/profile" element={<ProfilePage />} />
            <Route path="/me/update_profile" element={<UpdateProfilePage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
