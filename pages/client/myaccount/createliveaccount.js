import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Createliveaccount() {
  return (
    <>
      <Head>
        <title>GLFX - My Account | Create Live Account</title>
      </Head>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 p-0">
            <Sidebar />
          </div>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <div className="clearfix">
                <h1 className="h5 text-center">Create Live Account</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 m-auto">
                <div className="card mb-5">
                  <div className="card-body">
                    <form>
                      <div className="mb-2">
                        <label>Choose Platform</label>
                      </div>
                      <div className="mb-3">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input form-check-trader"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="MT4"
                          />
                          <img
                            className="form-check-label"
                            src="../../assets/img/mt-4-logo.png"
                          />
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input form-check-trader"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="MT5"
                          />
                          <img
                            className="form-check-label"
                            src="../../assets/img/mt-5-logo.png"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Account Type</label>
                        <select className="form-select">
                          <option>Select Option</option>
                          <option>Cent</option>
                          <option>Premium</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="me-3">Account Currency</label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label className="form-check-label">USC</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Leverage</label>
                        <select className="form-select">
                          <option>Select Leverage</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="me-3">Islamic</label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label className="form-check-label">No</label>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Master Password</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={"4tw98xu8"}
                          />
                          <button className="btn btn-outline-secondary">
                            <i className="bi bi-clipboard"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Investor Password</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={"4tw98xu8"}
                          />
                          <button className="btn btn-outline-secondary">
                            <i className="bi bi-clipboard"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Nick Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nick Name"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">
                            Agree to terms and conditions
                          </label>
                        </div>
                      </div>
                      <div className="clearfix">
                        <a className="btn btn-primary float-end">
                          Create Account
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
