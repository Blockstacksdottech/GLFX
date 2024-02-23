import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import { useEffect, useState } from "react";
import { formatDate, getBadgeClass, req } from "@/helpers/helpers";

export default function Mytransaction() {
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

  useEffect(() => {
    loadTransactions().then(() => console.log("loaded transactions"));
  }, []);

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
                            <th scope="col">Transaction ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
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
  );
}
