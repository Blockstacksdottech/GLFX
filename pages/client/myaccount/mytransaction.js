import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Mytransaction() {
  return (
    <>
      <Head>
        <title>GLFX - My Account | Transactions</title>
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
                <h1 className="h5 text-center">Transactions</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Account Number</th>
                            <th scope="col">Payment Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Status</th>
                            <th scope="col">Type</th>
                            <th scope="col">Account Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>31657900748</td>
                            <td>Jun 20 02:40:42</td>
                            <td>USD 100</td>
                            <td>Crypto - BTC | ETH | LTC</td>
                            <td>
                              <a className="badge bg-warning text-dark">
                                Pending
                              </a>
                            </td>
                            <td>Deposit</td>
                            <td>Standard MT5</td>
                          </tr>
                          <tr>
                            <td>488576192264</td>
                            <td>Jan 23 11:33:35</td>
                            <td>USD 200</td>
                            <td>Jetapay - INR</td>
                            <td>
                              <a className="badge bg-success">Completed</a>
                            </td>
                            <td>Deposit</td>
                            <td>Standard MT4</td>
                          </tr>
                          <tr>
                            <td>488576192264</td>
                            <td>Jan 23 11:33:35</td>
                            <td>USD 10000</td>
                            <td>Local Deposit</td>
                            <td>
                              <a className="badge bg-info text-dark">
                                Processing
                              </a>
                            </td>
                            <td>Deposit</td>
                            <td>Standard MT4</td>
                          </tr>
                          <tr>
                            <td>488576192264</td>
                            <td>Jan 23 11:33:35</td>
                            <td>USD 500</td>
                            <td>B2binpay</td>
                            <td>
                              <a className="badge bg-danger">Rejected</a>
                            </td>
                            <td>Deposit</td>
                            <td>Standard MT4</td>
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
