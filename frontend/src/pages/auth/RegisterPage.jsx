const RegisterPage = () => {
  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form
          className="shadow rounded bg-body"
          action="your_submit_url_here"
          method="post"
          enctype="multipart/form-data"
        >
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
              value=""
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
              value=""
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
              value=""
            />
          </div>

          <button id="register_button" type="submit" className="btn w-100 py-2">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
