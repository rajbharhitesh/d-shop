import { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useAdminUsersQuery } from '../../redux/api/userApi';
import AdminLayout from '../../components/layout/AdminLayout';
import Loader from '../../components/layout/Loader';

const ListUsersPage = () => {
  const { data, isLoading, error } = useAdminUsersQuery();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  const setUsers = () => {
    const users = {
      columns: [
        {
          label: 'ID',
          field: 'id',
          sort: 'asc',
        },
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
        },
        {
          label: 'Role',
          field: 'role',
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

    data?.users?.forEach((user) => {
      users.rows.push({
        id: user?._id,
        name: user?.name,
        email: user?.email,
        role: user?.role,
        actions: (
          <>
            <Link
              to={`/admin/users/${user?._id}`}
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

    return users;
  };

  if (isLoading) return <Loader />;

  return (
    <AdminLayout>
      <h1 className="my-5">{data?.users?.length} Users</h1>

      <MDBDataTable data={setUsers()} className="px-3" bordered striped hover />
    </AdminLayout>
  );
};

export default ListUsersPage;
