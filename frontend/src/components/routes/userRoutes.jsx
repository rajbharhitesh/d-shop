import { Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ProductDetailsPage from '../../pages/product/ProductDetailsPage';
import LoginPage from '../../pages/auth/LoginPage';
import RegisterPage from '../../pages/auth/RegisterPage';
import ProfilePage from '../../pages/user/ProfilePage';
import UpdateProfilePage from '../../pages/user/UpdateProfilePage';
import ProtectedRoute from '../../components/routes/ProtectedRoute';
import UpdatePasswordPage from '../../pages/user/UpdatePasswordPage';
import UploadAvatarPage from '../../pages/user/UploadAvatarPage';
import CartPage from '../../pages/cart/CartPage';
import ShippingPage from '../../pages/cart/ShippingPage';
import ConfirmOrderPage from '../../pages/cart/ConfirmOrderPage';
import PaymentMethodPage from '../../pages/cart/PaymentMethodPage';
import OrderPage from '../../pages/order/OrderPage';
import OrderDetailsPage from '../../pages/order/OrderDetailsPage';

const userRoutes = () => {
  return (
    <>
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

      <Route
        path="/shipping"
        element={
          <ProtectedRoute>
            <ShippingPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/confirm_order"
        element={
          <ProtectedRoute>
            <ConfirmOrderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment_method"
        element={
          <ProtectedRoute>
            <PaymentMethodPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/me/orders"
        element={
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/me/order/:id"
        element={
          <ProtectedRoute>
            <OrderDetailsPage />
          </ProtectedRoute>
        }
      />

      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </>
  );
};

export default userRoutes;
