import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import Checker from "@/components/Checker";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import {
  convertFromUSD,
  formatDate,
  getBadgeClass,
  req,
} from "@/helpers/helpers";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";

export default function Mywallet() {
  const [User, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();
  const [rates, setRates] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {
    const resp = await req("transactions");
    if (resp) {
      console.log(resp);
      setTransactions(resp);
    } else {
      toast.error("Failed Fetching transactions");
    }
  };

  const fetchRates = async () => {
    const resp = await axios.get("/api/rates");
    console.log("inside rates");
    if (resp.status === 200) {
      console.log(resp);
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
    loadTransactions().then(() => console.log("Fetched Transactions"));
  }, []);

  return (
    <>
      <Head>
        <title>GLFX - Balance | My Wallet</title>
      </Head>
      <Checker admin={false}>
        <LoadingOverlay active={loading} spinner text={`Loading...`}>
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
                                  {transactions.map((e, i) => {
                                    return (
                                      <tr key={`tr-${i}`}>
                                        <td>#{e.id}</td>
                                        <td>{formatDate(new Date(e.date))}</td>
                                        <td>USD {e.amount}</td>
                                        <td>{e.action}</td>
                                        <td>
                                          <a
                                            className={`badge ${getBadgeClass(
                                              e.status
                                            )}`}
                                          >
                                            {e.status}
                                          </a>
                                        </td>
                                        <td>{e.t_type}</td>
                                      </tr>
                                    );
                                  })}
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
        </LoadingOverlay>
      </Checker>
    </>
  );
}
