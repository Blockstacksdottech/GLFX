import Head from "next/head";

export default function Forgotpassword() {
  return (
    <>
      <Head>
        <title>GLFX - Forgotpassword</title>
      </Head>

      <main className="d-flex align-items-center my-5 justify-content-center">
        <form
          method="post"
          action="/client/dashboard"
          autoComplete="off"
          autoFocus="off"
          className="form-signin w-100 m-auto"
        >
          <div className="text-center">
            <img className="mb-4" src="../assets/brand/logo.png" alt="GLFX" />
            <h1 className="mb-3">Forgot Password</h1>
          </div>

          <p className="mb-2">
            <small>
              Enter your email address and we'll send you an email with
              instructions to reset your password.
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
            <button className="btn btn-primary w-100 py-2" type="submit">
              Reset Password
            </button>
            <div className="text-center mt-3">
              <p>
                <a href="/login" className="awu">
                  Back to Login
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
