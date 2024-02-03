import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Deposit() {
  return (
    <>
      <Head>
        <title>GLFX - Balance | Deposit</title>
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
                <h1 className="h5 text-center">Deposit</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 m-auto">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <div className="mb-2">
                          <label>Account Type</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label className="form-check-label">Account</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label className="form-check-label">Wallet</label>
                        </div>
                      </div>
                      <div className="mb-">
                        <label className="mb-2">Choose your Account</label>
                        <select className="form-select">
                          <option>Choose your Account</option>
                          <option>
                            3165894 ---- Standard MT5 ---- USD 236
                          </option>
                          <option>
                            4165894 ---- Standard MT4 ---- USD 296
                          </option>
                          <option>
                            8165894 ---- Standard MT5 ---- USD 336
                          </option>
                        </select>
                      </div>

                      <div className="my-3 card">
                        <div className="table-responsive">
                          <table className="table table-borderless text-center">
                            <thead>
                              <tr>
                                <th scope="col">Balance</th>
                                <th scope="col">Equity</th>
                                <th scope="col">Free Margin</th>
                                <th scope="col">Margin</th>
                                <th scope="col">Margin-level</th>
                                <th scope="col">Credit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>USD 489.60</td>
                                <td>USD 539.60</td>
                                <td>USD 539.60</td>
                                <td>USD 0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="mb-2">
                          <label>Payment Method</label>
                        </div>
                        <div class="row">
                          <div class="col-md-4 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input form-check-trader"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="credit-debit"
                              />
                              <img
                                className="form-check-label img-fluid"
                                src="../../assets/img/credit-debit.jpg"
                              />
                            </div>
                          </div>
                          <div class="col-md-4 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input form-check-trader"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="credit-debit"
                              />
                              <img
                                className="form-check-label img-fluid"
                                src="../../assets/img/perfectmoney.jpg"
                              />
                            </div>
                          </div>
                          <div class="col-md-4 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input form-check-trader"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="crypto"
                              />
                              <img
                                className="form-check-label img-fluid"
                                src="../../assets/img/crypto-btc-eth-ltc.jpg"
                              />
                            </div>
                          </div>
                          <div class="col-md-4 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input form-check-trader"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="crypto"
                              />
                              <img
                                className="form-check-label img-fluid"
                                src="../../assets/img/localdeposit.jpg"
                              />
                            </div>
                          </div>
                          <div class="col-md-4 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input form-check-trader"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="crypto"
                              />
                              <img
                                className="form-check-label img-fluid"
                                src="../../assets/img/paypal.png"
                              />
                            </div>
                          </div>
                          <div class="col-md-4 mb-2">
                            <div className="form-check">
                              <input
                                className="form-check-input form-check-trader"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="crypto"
                              />
                              <img
                                className="form-check-label img-fluid"
                                src="../../assets/img/razorpay.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <label className="mb-2">Amount</label>
                      <div class="input-group">
                        <span class="input-group-text">USD</span>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Amount"
                        />
                      </div>
                      <div class="clearfix">
                        <div class="float-end">
                          <div className="form-text">
                            Min amount:{" "}
                            <span className="badge text-bg-dark">USD 10</span>
                          </div>
                        </div>
                      </div>

                      <div class="mb-3">
                        <label class="form-label">Receipt Photo</label>
                        <input class="form-control" type="file" id="formFile" />
                      </div>

                      <div className="clearfix">
                        <a className="btn btn-primary float-end">Deposit Now</a>
                      </div>
                    </form>
                  </div>
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
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>31657900748</td>
                            <td>Jun 20 02:40:42</td>
                            <td>USD 100</td>
                            <td>Skrill</td>
                            <td>
                              <a className="badge bg-warning text-dark">
                                Pending
                              </a>
                            </td>
                            <td>Withdrawal</td>
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
                          </tr>
                          <tr>
                            <td>488576192264</td>
                            <td>Jan 23 11:33:35</td>
                            <td>USD 10000</td>
                            <td>Skrill</td>
                            <td>
                              <a className="badge bg-info text-dark">
                                Processing
                              </a>
                            </td>
                            <td>Withdrawal</td>
                          </tr>
                          <tr>
                            <td>488576192264</td>
                            <td>Jan 23 11:33:35</td>
                            <td>USD 500</td>
                            <td>Account to Wallet</td>
                            <td>
                              <a className="badge bg-danger">Rejected</a>
                            </td>
                            <td>Withdrawal</td>
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
