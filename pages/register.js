import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>GLFX - Register</title>
      </Head>

      <main className="d-flex align-items-center my-5 justify-content-center">
        <form
          method="post"
          action="/client/myaccount/liveaccount"
          autoComplete="off"
          autoFocus="off"
          className="form-signin w-100 m-auto"
        >
          <div className="text-center">
            <img className="mb-4" src="../assets/brand/logo.png" alt="GLFX" />
            <h1 className="mb-3">Register</h1>
          </div>

          <p className="mb-2">
            <small>
              Do not have an account? Create your account, it takes less than a
              minute.
            </small>
          </p>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
            <label>First Name</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
            <label>Last Name</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Company Name"
            />
            <label>Company Name</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input type="text" className="form-control" placeholder="Phone" />
            <label>Phone</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
            <label>Confirm Password</label>
          </div>

          <div class="form-check text-start mb-3 mt-3">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label" for="flexCheckDefault">
              Agree to <a href="">Terms & Conditions</a> |{" "}
              <a href="">Privacy Statement</a>
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2">Register</button>
          <div className="text-start mt-3">
            <p className="mt-1">
              <a href="/login" className="awu">
                Alreday have an account? Login
              </a>
            </p>
          </div>

          <p className="mt-5 mb-3 text-body-secondary">
            &copy; 2024 GLFX - CRM & MT5 | All rights reserved.
          </p>
        </form>
      </main>
    </>
  );
}
