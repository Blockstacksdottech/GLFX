import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Financialinformation() {
  return (
    <>
      <Head>
        <title>GLFX - My Profile | Financial Information</title>
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
                <h1 className="h5 text-center">Financial Information</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 m-auto">
                <div className="card mb-5">
                  <div className="card-body">
                    <form>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="mb-2">
                            Total Estimated Net Worth ($)?
                          </label>
                          <select className="form-select">
                            <option></option>
                            <option>Less than $10000</option>
                            <option>$10000 to $50000</option>
                            <option>$50000 to $100000</option>
                            <option>$100000 to $500000</option>
                            <option>More than $500000</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="mb-2">
                            Total Estimated Annual Income ($)?
                          </label>
                          <select className="form-select">
                            <option></option>
                            <option>Less than $5000</option>
                            <option>$5000 to $20000</option>
                            <option>$20000 to $50000</option>
                            <option>$50000 to $100000</option>
                            <option>More than $100000</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-4">
                          <label className="mb-2">Your Employment Status</label>
                          <select className="form-select">
                            <option></option>
                            <option>Employed</option>
                            <option>Self Employed</option>
                            <option>Student</option>
                            <option>Unemployed</option>
                            <option>Retired</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label className="mb-2">
                            Source Of Income/Wealth
                          </label>
                          <select className="form-select">
                            <option></option>
                            <option>Employment</option>
                            <option>Savings</option>
                            <option>Investment</option>
                            <option>Inheritance</option>
                            <option>Other Source</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label className="mb-2">
                            FOREX, CFDS And Other Instruments
                          </label>
                          <select className="form-select">
                            <option></option>
                            <option>Evet</option>
                            <option>Hayir</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">
                          Trading products are suitable as part of my investment
                          objectives and I am able to assess the risk involved
                          in trading them, including the possibility that I may
                          lose all of my capital
                        </label>
                        <select className="form-select">
                          <option></option>
                          <option>Evet</option>
                          <option>Hayir</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">
                          I have previous professional qualifications and/or
                          work experience in the financial services industry
                        </label>
                        <select className="form-select">
                          <option></option>
                          <option>Evet</option>
                          <option>Hayir</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">
                          Expected initial amount of Investment in USD ? ?
                        </label>
                        <select className="form-select">
                          <option>Less than $5000</option>
                          <option>$5000 to $20000</option>
                          <option>$20000 to $50000</option>
                          <option>$50000 to $100000</option>
                          <option>More than $100000</option>
                        </select>
                      </div>
                      <div className="clearfix">
                        <a className="btn btn-primary float-end">Save</a>
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
