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
import ProtectedRoute from './components/routes/ProtectedRoute';
import UpdatePasswordPage from './pages/user/UpdatePasswordPage';
import UploadAvatarPage from './pages/user/UploadAvatarPage';
import CartPage from './pages/cart/CartPage';

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
            <Route path="/cart" element={<CartPage />} />

            <Route
              path="/me/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update_profile"
              element={
                <ProtectedRoute>
                  <UpdateProfilePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/update_password"
              element={
                <ProtectedRoute>
                  <UpdatePasswordPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/me/upload_avatar"
              element={
                <ProtectedRoute>
                  <UploadAvatarPage />
                </ProtectedRoute>
              }
            />

            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
