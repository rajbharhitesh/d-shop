import { useEffect } from 'react';
import { toast } from 'sonner';
import { MDBDataTable } from 'mdbreact';
import { useAdminOrdersQuery } from '../../redux/api/orderApi';
import AdminLayout from '../../components/layout/AdminLayout';
import Loader from '../../components/layout/Loader';
import { Link } from 'react-router-dom';

const ListOrdersPage = () => {
  const { data, isLoading, error } = useAdminOrdersQuery();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  const setOrders = () => {
    const orders = {
      columns: [
        {
          label: 'ID',
          field: 'id',
          sort: 'asc',
        },
        {
          label: 'Payment Status',
          field: 'paymentStatus',
          sort: 'asc',
        },
        {
          label: 'Order Status',
          field: 'orderStatus',
          sort: 'asc',
        },

        {
          label: 'Actions',
          field: 'actions',
          sort: 'asc',
        },
      ],
      rows: [],
    };

    data?.orders?.forEach((order) => {
      orders.rows.push({
        id: order?._id,
        paymentStatus: order?.paymentInfo?.status?.toUpperCase(),
        orderStatus: order?.orderStatus,
        actions: (
          <>
            <Link
              to={`/admin/orders/${order?._id}`}
              className="btn btn-outline-primary"
            >
              <i className="fa fa-pencil"></i>
            </Link>

            <button className="btn btn-outline-danger ms-2">
              <i className="fa fa-trash"></i>
            </button>
          </>
        ),
      });
    });

    return orders;
  };

  if (isLoading) return <Loader />;

  return (
    <AdminLayout>
      <h1 className="my-5">{data?.orders?.length} Orders</h1>

      <MDBDataTable
        data={setOrders()}
        className="px-3"
        bordered
        striped
        hover
      />
    </AdminLayout>
  );
};

export default ListOrdersPage;
