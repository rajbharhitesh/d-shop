import { Route } from 'react-router-dom';
import ProtectedRoute from '../../components/routes/ProtectedRoute';
import DashboardPage from '../../pages/admin/DashboardPage';
import ListProductsPage from '../../pages/admin/ListProductsPage';

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
    </>
  );
};

export default adminRoutes;
