import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function trade() {
  return (
    <>
      <Head>
        <title>GLFX - My Account | Trade</title>
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
                <h1 className="h5 float-start">Trade</h1>
                <div className="float-end">
                  <div className="row">
                    <div className="col-auto">
                      <img src="../../assets/img/meta5.png" />
                    </div>
                    <div className="col-auto">
                      <p className="small">
                        #5623 <span className="badge bg-info">Demo</span>
                      </p>
                      <p className="small">Standard MT5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                {/* CHART */}
                <div className="card">
                  <h1 className="py-5 text-center">Chart</h1>
                </div>
              </div>
            </div>
            <div className="row mt-2 gx-2">
              <div className="col-md-5">
                <div className="card">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#buy"
                      >
                        Limit
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#sell"
                      >
                        Market
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active p-2" id="buy">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-text ps-1 pb-2">
                            <small>Avbl 0.000000000 USDT</small>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Price</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">USDT</span>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Amount</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">FDUSD</span>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Total</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">USDT</span>
                          </div>

                          <div className="form-text ps-1">
                            <small>Max Buy: 0 FDUSD</small>
                          </div>
                          <div className="form-text ps-1">
                            <small>Est. Fee: 0 USDT</small>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-secondary w-100 mt-2"
                          >
                            Buy FDUSD
                          </button>
                        </div>
                        <div className="col-md-6">
                          <div className="form-text ps-1 pb-2">
                            <small>Avbl 0.98652314 FDUSD</small>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Price</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">USDT</span>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Amount</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">FDUSD</span>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Total</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">USDT</span>
                          </div>

                          <div className="form-text ps-1">
                            <small>Max Sell: 0 FDUSD</small>
                          </div>
                          <div className="form-text ps-1">
                            <small>Est. Fee: 0 USDT</small>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-danger w-100 mt-2"
                          >
                            Sell FDUSD
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade p-2" id="sell">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-text ps-1 pb-2">
                            <small>Avbl 0.000000000 USDT</small>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Price</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="Market"
                              readOnly
                            />
                            <span className="input-group-text">USDT</span>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Amount</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">FDUSD</span>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Total</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">USDT</span>
                          </div>

                          <div className="form-text ps-1">
                            <small>Max Buy: 0 FDUSD</small>
                          </div>
                          <div className="form-text ps-1">
                            <small>Est. Fee: 0 FDUSD</small>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-secondary w-100 mt-2"
                          >
                            Buy FDUSD
                          </button>
                        </div>
                        <div className="col-md-6">
                          <div className="form-text ps-1 pb-2">
                            <small>Avbl 0.000000000 USDT</small>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Price</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="Market"
                              readOnly
                            />
                            <span className="input-group-text">USDT</span>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Amount</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">FDUSD</span>
                          </div>
                          <div className="input-group mb-2">
                            <span className="input-group-text">Total</span>
                            <input
                              type="text"
                              className="form-control form-control-border"
                              placeholder="0"
                            />
                            <span className="input-group-text">USDT</span>
                          </div>

                          <div className="form-text ps-1">
                            <small>Max Sell: 0 USDT</small>
                          </div>
                          <div className="form-text ps-1">
                            <small>Est. Fee: 0 USDT</small>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-danger w-100 mt-2"
                          >
                            Sell FDUSD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card">
                  <nav>
                    <div className="nav" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#open"
                      >
                        Open Orders(0)
                      </button>
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#order"
                      >
                        Order History
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#trade"
                      >
                        Trade History
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content px-2" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="open">
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">DateTime</th>
                              <th scope="col">Type</th>
                              <th scope="col">Price</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Total</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="small">
                                <span className="text-green font-weight-bold">
                                  Buy
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-info">Open</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-danger">
                                  Declined
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="order">
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">DateTime</th>
                              <th scope="col">Type</th>
                              <th scope="col">Price</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Total</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="small">
                                <span className="text-green font-weight-bold">
                                  Buy
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-info">Open</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-danger">
                                  Declined
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="trade">
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">DateTime</th>
                              <th scope="col">Type</th>
                              <th scope="col">Price</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Total</th>
                              <th scope="col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="small">
                                <span className="text-green font-weight-bold">
                                  Buy
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-info">Open</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-warning">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-success">
                                  Success
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="small">
                                <span className="text-danger font-weight-bold">
                                  Sell
                                </span>
                                <br />
                                USDT/FDUSD
                              </td>
                              <td className="small">
                                15 April 2024
                                <br />
                                01:28 AM
                              </td>
                              <td className="small">Market</td>
                              <td className="small">0.00001 USDT</td>
                              <td className="small">0.00032 FDUSD</td>
                              <td className="small">0.12345 USDT</td>
                              <td className="small">
                                <span className="badge bg-danger">
                                  Declined
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
