import { useEffect, useState } from 'react';
import { useRegisterMutation } from '../../redux/api/authApi';
import { toast } from 'sonner';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, { isLoading, error, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success('User Registered  Successfully..!!');
    }
  }, [error, isSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();

    const registerData = { name, email, password };

    register(registerData);
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h2 className="mb-4 text-center">Register</h2>

          <div className="mb-3">
            <label for="name_field" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name_field"
              className="form-control"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="email_field" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            id="register_button"
            type="submit"
            className="btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'REGISTER'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
