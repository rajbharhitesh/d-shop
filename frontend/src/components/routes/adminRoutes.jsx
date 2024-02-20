import { Route } from 'react-router-dom';
import ProtectedRoute from '../../components/routes/ProtectedRoute';
import DashboardPage from '../../pages/admin/DashboardPage';
import ListProductsPage from '../../pages/admin/ListProductsPage';
import NewProductPage from '../../pages/admin/NewProductPage';

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
        path="/admin/product/new"
        element={
          <ProtectedRoute admin={true}>
            <NewProductPage />
          </ProtectedRoute>
        }
      />
    </>
  );
};

export default adminRoutes;
