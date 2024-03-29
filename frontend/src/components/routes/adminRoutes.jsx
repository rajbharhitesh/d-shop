import { Route } from 'react-router-dom';
import ProtectedRoute from '../../components/routes/ProtectedRoute';
import DashboardPage from '../../pages/admin/DashboardPage';
import ListProductsPage from '../../pages/admin/ListProductsPage';
import NewProductPage from '../../pages/admin/NewProductPage';
import UpdateProductPage from '../../pages/admin/UpdateProductPage';
import UploadProductImagePage from '../../pages/admin/UploadProductImagePage';
import ListOrdersPage from '../../pages/admin/ListOrdersPage';
import UpdateOrderPage from '../../pages/admin/UpdateOrderPage';
import ListUsersPage from '../../pages/admin/ListUsersPage';
import UpdateUserPage from '../../pages/admin/UpdateUserPage';

const adminRoutes = () => {
  return (
    <>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute admin={true}>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute admin={true}>
            <ListProductsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute admin={true}>
            <ListOrdersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute admin={true}>
            <ListUsersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/product/new"
        element={
          <ProtectedRoute admin={true}>
            <NewProductPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateProductPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateOrderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateUserPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products/:id/upload_images"
        element={
          <ProtectedRoute admin={true}>
            <UploadProductImagePage />
          </ProtectedRoute>
        }
      />
    </>
  );
};

export default adminRoutes;
