import SideMenu from './SideMenu';

const AdminLayout = ({ children }) => {
  const menuItems = [
    {
      name: 'New Product',
      url: '/admin/product/new',
      icon: 'fas fa-plus',
    },
    {
      name: 'Products',
      url: '/admin/products',
      icon: 'fab fa-product-hunt',
    },
    {
      name: 'Orders',
      url: '/admin/orders',
      icon: 'fas fa-receipt',
    },
    {
      name: 'Users',
      url: '/admin/users',
      icon: 'fas fa-user',
    },
  ];

  return (
    <div>
      <div className="mt-2 mb-4 py-4">
        <h2 className="text-center fw-bolder">Admin Dashboard</h2>
      </div>

      <div className="row justify-content-around">
        <div className="col-12 col-lg-3">
          <SideMenu menuItems={menuItems} />
        </div>
        <div className="col-12 col-lg-8 user-dashboard">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
