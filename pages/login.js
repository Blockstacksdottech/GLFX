import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>GLFX - Login</title>
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
            <h1 className="mb-3">Login</h1>
          </div>

          <p className="mb-2">
            <small>
              Enter your email address and password to access account.
            </small>
          </p>

          <div className="text-center">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label>Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Login
            </button>
            <div className="text-start mt-3">
              <p>
                <a href="/forgotpassword" className="awu">
                  Forgot Password?
                </a>
              </p>
              <p className="mt-1">
                <a href="/register" className="awu">
                  Don't have an account? Register yourself
                </a>
              </p>
            </div>
          </div>

          <p className="mt-5 mb-3 text-body-secondary">
            &copy; 2024 GLFX - CRM & MT5 | All rights reserved.
          </p>
        </form>
      </main>
    </>
  );
}
