import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import { useEffect, useState } from "react";
import Checker from "@/components/Checker";
import { deleteReq, req } from "@/helpers/helpers";
import { toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";

export default function Demoaccount() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAccounts = async () => {
    const resp = await req("accounts");
    if (resp) {
      setAccounts(resp);
      console.log(resp);
      setLoading(false);
    } else {
      toast.error("Failed fetching accounts");
    }
  };

  const deleteAccount = async (id) => {
    const resp = await deleteReq(`accounts/${id}`);
    if (resp) {
      toast.success("Account deleted Successfully");
      fetchAccounts();
    } else {
      toast.error("Failed Deleting Account");
    }
  };

  useEffect(() => {
    fetchAccounts().then(() => {
      console.log("loaded accounts");
    });
  }, []);

  return (
    <>
      <Head>
        <title>GLFX - My Account | Demo Account</title>
      </Head>
      <Checker admin={false}>
        <LoadingOverlay active={loading} spinner text={`Loading...`}>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-lg-2 p-0">
                <Sidebar />
              </div>

              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
                <div className="pt-3 pb-2 mb-3 border-bottom">
                  <div className="clearfix">
                    <h1 className="h5 float-start">Demo Accounts</h1>
                    <div className="float-end">
                      <a
                        className="btn btn-info"
                        href="/client/myaccount/createdemoaccount/"
                      >
                        Create Demo Account
                      </a>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Platform</th>
                        <th scope="col">Leverage</th>
                        {/* <th scope="col">Credits</th> */}
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {accounts.map((e, i) => {
                        return (
                          <tr>
                            <td>
                              <div className="row">
                                <div className="col-2">
                                  <img src="../../assets/img/meta5.png" />
                                </div>
                                <div className="col">
                                  <p className="small">
                                    #{e.id}{" "}
                                    <span className="badge bg-info">Demo</span>
                                  </p>
                                  <p className="small">
                                    Standard MT5
                                    {e.islamic && (
                                      <span className="badge bg-light text-dark">
                                        - Islamic
                                      </span>
                                    )}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-brand-green">
                                {e.balance} USD
                              </p>
                            </td>
                            <td>MT5</td>
                            <td>{e.acc_leverage}</td>
                            {/* <td>21.52</td> */}
                            <td className="clearfix">
                              <a
                                className="btn btn-sm btn-danger float-end"
                                onClick={() => deleteAccount(e.id)}
                              >
                                Delete
                              </a>
                              <a
                                className="btn btn-sm btn-dark me-2 float-end"
                                href="/client/myaccount/trade/"
                              >
                                Trade
                              </a>
                              <a
                                href="/client/balance/deposit"
                                className="btn btn-sm btn-secondary me-2 float-end"
                              >
                                Deposit
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </main>
            </div>
          </div>
        </LoadingOverlay>
      </Checker>
    </>
  );
}
