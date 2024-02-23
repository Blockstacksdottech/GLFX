import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import Checker from "@/components/Checker";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import { convertFromUSD, req } from "@/helpers/helpers";
import axios from "axios";
import { toast } from "react-toastify";

export default function Mywallet() {
  const [User, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();
  const [rates, setRates] = useState([]);

  const fetchRates = async () => {
    const resp = await axios.get("/api/rates");
    if (resp.status === 200) {
      const res = await resp.data;
      setRates(res);
    }
  };

  const fetchWallet = async () => {
    const resp = await req("wallet");
    if (resp) {
      setInfo(resp);
      setLoading(false);
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchRates().then(() => console.log("Fetched rates"));
    fetchWallet().then(() => console.log("Fetched Info"));
  }, []);

  return (
    <>
      <Head>
        <title>GLFX - Balance | My Wallet</title>
      </Head>
      <Checker admin={false}>
        {!loading && info && rates.length > 0 && (
          <>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 col-lg-2 p-0">
                  <Sidebar />
                </div>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
                  <div className="pt-3 pb-2 mb-3 border-bottom">
                    <div className="clearfix">
                      <h1 className="h5 text-center">My Wallet</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <div className="card bg-blue">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0 text-white">
                                USD
                              </h5>
                              <span className="h2 font-weight-bold mb-0 text-white">
                                {info.amount}
                              </span>
                            </div>
                            <div className="col-auto">
                              <div className="text-white ">
                                <i className="bi bi-coin f-50"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <div className="card bg-navy-blue">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb-0 text-white">
                                EURO
                              </h5>
                              <span className="h2 font-weight-bold mb-0 text-white">
                                {convertFromUSD(info.amount, rates)}
                              </span>
                            </div>
                            <div className="col-auto">
                              <div className="text-white ">
                                <i className="bi bi-currency-euro f-50"></i>
                              </div>
                            </div>
                          </div>
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
                                  <td>Deposit</td>
                                </tr>
                                <tr>
                                  <td>488576192264</td>
                                  <td>Jan 23 11:33:35</td>
                                  <td>USD 200</td>
                                  <td>Wallet to Account</td>
                                  <td>
                                    <a className="badge bg-success">
                                      Completed
                                    </a>
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
                                  <td>Deposit</td>
                                </tr>
                                <tr>
                                  <td>488576192264</td>
                                  <td>Jan 23 11:33:35</td>
                                  <td>USD 500</td>
                                  <td>Account to Wallet</td>
                                  <td>
                                    <a className="badge bg-danger">Rejected</a>
                                  </td>
                                  <td>Deposit</td>
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
        )}
      </Checker>
    </>
  );
}
