import Head from "next/head";
import Navbar from "./component/navbar";

export default function Accounts() {
  return (
    <>
      <Head>
        <title>GLFX - My Account | List of Accounts</title>
      </Head>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-12 ms-sm-auto px-md-5 bg-grey">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <div className="clearfix">
                <h1 className="h5 float-start">Accounts</h1>
                <p className="float-end">Client Name</p>
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
                  <tr>
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
                      <div className="float-end">
                        <a className="btn btn-sm btn-danger">Ban</a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="row">
                        <div className="col-2">
                          <img src="../../assets/img/meta4.png" />
                        </div>
                        <div className="col">
                          <p className="small">5022</p>
                          <p className="small">
                            Standard MT4 -{" "}
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
                    <td>MT4</td>
                    <td>1:100</td>
                    <td>21.52</td>
                    <td className="clearfix">
                      <div className="float-end">
                        <a className="btn btn-sm btn-danger">Ban</a>
                      </div>
                    </td>
                  </tr>

                  <tr>
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
                          <p className="small">Premium</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-brand-green">1107.61 USD</p>
                    </td>
                    <td>MT5</td>
                    <td>1:100</td>
                    <td>21.52</td>
                    <td className="clearfix">
                      <div className="float-end">
                        <a className="btn btn-sm btn-danger">Ban</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
