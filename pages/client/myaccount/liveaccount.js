import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import Checker from "@/components/Checker";
import { toast } from "react-toastify";

export default function Liveaccount() {
  const disabled = () => {
    toast.info("Live accounts are disabled for now");
  };

  return (
    <>
      <Head>
        <title>GLFX - My Account | Live Account</title>
      </Head>
      <Checker admin={false}>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-2 p-0">
              <Sidebar />
            </div>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
              <div className="pt-3 pb-2 mb-3 border-bottom">
                <div className="clearfix">
                  <h1 className="h5 float-start">Live Accounts</h1>
                  <div className="float-end">
                    <a className="btn btn-info" href="#" onClick={disabled}>
                      Create Live Account
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
                      <th scope="col">Credits</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*  <tr>
                    <td>
                      <div className="row">
                        <div className="col-2">
                          <img src="../../assets/img/meta5.png" />
                        </div>
                        <div className="col">
                          <p className="small">
                            488576192264{" "}
                            <span className="badge bg-success">Live</span>
                          </p>
                          <p className="small">
                            Standard MT5 -{" "}
                            <span className="badge bg-light text-dark">
                              Islamic
                            </span>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-brand-green">107.61 USD</p>
                    </td>
                    <td>MT5</td>
                    <td>1:100</td>
                    <td>21.52</td>
                    <td className="clearfix">
                      <a className="btn btn-sm btn-danger float-end">Delete</a>
                      <a className="btn btn-sm btn-dark me-2 float-end">
                        Trade
                      </a>
                      <a className="btn btn-sm btn-secondary me-2 float-end">
                        Deposit
                      </a>
                    </td>
                  </tr> */}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </Checker>
    </>
  );
}
