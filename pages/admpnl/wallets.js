import Head from "next/head";
import Navbar from "./component/navbar";

export default function Wallets() {
  return (
    <>
      <Head>
        <title>GLFX - Wallets & Transactions</title>
      </Head>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-12 ms-sm-auto px-md-5 bg-grey">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <div className="clearfix">
                <h1 className="h5 float-start">Wallets</h1>
                <p className="float-end">Client Name</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-2">
                <div className="card bg-blue">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0 text-white">
                          USD
                        </h5>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          350,897
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="text-white ">
                          <i className="bi bi-coin f-50"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">31657900748</div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className="card bg-green">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0 text-white">
                          EURO
                        </h5>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          50,897
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="text-white ">
                          <i className="bi bi-currency-euro f-50"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">31657900748</div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <div className="card bg-navy-blue">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0 text-white">
                          EURO
                        </h5>
                        <span className="h2 font-weight-bold mb-0 text-white">
                          50,897
                        </span>
                      </div>
                      <div className="col-auto">
                        <div className="text-white ">
                          <i className="bi bi-currency-euro f-50"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">31657900748</div>
                </div>
              </div>
            </div>

            <div className="row my-3">
              <div className="col-md-12">
                <div className="card">
                  <div class="card-header">
                    <h6>Transactions</h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Wallet Number</th>
                            <th scope="col">Payment Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Status</th>
                            <th scope="col">Type</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>31657900748</td>
                            <td>Jun 20 02:40:42</td>
                            <td>USD 100</td>
                            <td>Skrill</td>
                            <td>
                              <a className="badge bg-danger">Rejected</a>
                            </td>
                            <td>Deposit</td>
                            <td>
                              <div className="float-end">
                                <a className="btn btn-sm btn-secondary me-2">
                                  Approve
                                </a>
                                <a className="btn btn-sm btn-danger">Decline</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>488576192264</td>
                            <td>Jan 23 11:33:35</td>
                            <td>USD 200</td>
                            <td>Wallet to Account</td>
                            <td>
                              <a className="badge bg-success">Completed</a>
                            </td>
                            <td>Withdrawal</td>
                            <td>
                              <div className="float-end">
                                <a className="btn btn-sm btn-secondary me-2">
                                  Approve
                                </a>
                                <a className="btn btn-sm btn-danger">Decline</a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
