import { Route } from 'react-router-dom';
import ProtectedRoute from '../../components/routes/ProtectedRoute';
import DashboardPage from '../../pages/admin/DashboardPage';

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
    </>
  );
};

export default adminRoutes;
