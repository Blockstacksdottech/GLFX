import Head from "next/head";
import Navbar from "./component/navbar";
import Checker from "@/components/Checker";
import { useEffect, useState } from "react";
import {
  convertFromUSD,
  formatDate,
  getBadgeClass,
  patchReq,
  postReq,
  req,
} from "@/helpers/helpers";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function Wallets() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  const [rates, setRates] = useState([]);

  const fetchUser = async (id) => {
    const resp = await req(`admin/admusers/${id}`);
    if (resp) {
      console.log(resp);
      setUsers(resp);
      setLoading(false);
    } else {
      toast.error("Failed fetching users");
    }
  };

  const fetchRates = async () => {
    const resp = await axios.get("/api/rates");
    if (resp.status === 200) {
      const res = await resp.data;
      console.log(res);
      setRates(res);
    }
  };

  const updateStatus = async (id, status) => {
    const body = {
      status,
      id,
    };
    const resp = await postReq(`admin/admstatus`, body);
    if (resp) {
      fetchUser(params.get("id"));
      toast.success("Updated");
    } else {
      toast.error("");
    }
  };

  useEffect(() => {
    fetchRates().then(() => console.log("Fetched rates"));
    const idd = params.get("id");
    if (idd) {
      fetchUser(idd).then(() => console.log("fetched users"));
    }
  }, [params]);

  return (
    <>
      <Head>
        <title>GLFX - Wallets & Transactions</title>
      </Head>
      <Checker admin={true}>
        {!loading && rates.length > 0 && (
          <>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <main className="col-md-12 ms-sm-auto px-md-5 bg-grey">
                  <div className="pt-3 pb-2 mb-3 border-bottom">
                    <div className="clearfix">
                      <h1 className="h5 float-start">Wallets</h1>
                      <p className="float-end">
                        {user.name} {user.surname}
                      </p>
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
                                {user.wallet.amount}
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
                                {convertFromUSD(user.wallet.amount, rates)}
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
                                  <th scope="col"></th>
                                </tr>
                              </thead>
                              <tbody>
                                {user.transactions.map((e, i) => {
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
                                      {!e.done && (
                                        <td>
                                          <div className="float-end">
                                            <a
                                              className="btn btn-sm btn-secondary me-2"
                                              onClick={() =>
                                                updateStatus(e.id, "Completed")
                                              }
                                            >
                                              Approve
                                            </a>
                                            <a
                                              className="btn btn-sm btn-danger"
                                              onClick={() =>
                                                updateStatus(e.id, "Failed")
                                              }
                                            >
                                              Decline
                                            </a>
                                          </div>
                                        </td>
                                      )}
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
      </Checker>
    </>
  );
}
