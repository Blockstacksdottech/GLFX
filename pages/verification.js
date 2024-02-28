import Head from "next/head";

export default function Verification() {
  return (
    <>
      <Head>
        <title>GLFX - Email and Phone Verification</title>
      </Head>

      <main className="d-flex align-items-center my-5 justify-content-center">
        <form
          method="post"
          action="/client/myprofile/documentation/"
          autoComplete="off"
          autoFocus="off"
          className="form-signin w-100 m-auto"
        >
          <div className="text-center mb-3">
            <img className="mb-4" src="../assets/brand/logo.png" alt="GLFX" />
            <h3>Phone & Email Verification</h3>
          </div>

          <div className="card my-3">
            <div className="card-header">Phone Number</div>
            <div className="card-body">
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">+234</span>
                  <input
                    type="text"
                    className="form-control"
                    value="1234567890"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label>OTP</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your OTP"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Verify OTP
                  </button>
                </div>
                <div className="form-text mt-2 text-center">
                  If OTP is not received,{" "}
                  <a href="" className="strong">
                    Resend OTP
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card my-3">
            <div className="card-header">Email Address</div>
            <div className="card-body">
              <div className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value="email@email.com"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label>OTP</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your OTP"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Verify OTP
                  </button>
                </div>
                <div className="form-text mt-2 text-center">
                  If OTP is not received,{" "}
                  <a href="" className="strong">
                    Resend OTP
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Continue
          </button>

          <p className="mt-5 mb-3 text-body-secondary">
            &copy; 2024 GLFX - CRM & MT5 | All rights reserved.
          </p>
        </form>
      </main>
    </>
  );
}
