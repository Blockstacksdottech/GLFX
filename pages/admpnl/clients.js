import Head from "next/head";
import Navbar from "./component/navbar";

export default function Clients() {
  return (
    <>
      <Head>
        <title>GLFX - My Account | List of Clients</title>
      </Head>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-12 ms-sm-auto px-md-5 bg-grey">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <div className="clearfix">
                <h1 className="h5 float-start">Clients</h1>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-capital">first + Last Name</td>
                    <td className="text-capital">Company Name</td>
                    <td>email@gmail.com</td>
                    <td>+12 1234567890</td>
                    <td className="clearfix">
                      <div className="float-end">
                        <a
                          href="/admpnl/kyc"
                          className="btn btn-sm btn-light me-2"
                        >
                          Documents
                        </a>
                        <a
                          href="/admpnl/accounts"
                          className="btn btn-sm btn-secondary me-2"
                        >
                          Accounts
                        </a>
                        <a
                          href="/admpnl/wallets"
                          className="btn btn-sm btn-dark me-2"
                        >
                          Transactions
                        </a>
                        <a className="btn btn-sm btn-danger">Ban</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-capital">first + Last Name</td>
                    <td className="text-capital">Company Name</td>
                    <td>email@gmail.com</td>
                    <td>+12 1234567890</td>
                    <td className="clearfix">
                      <div className="float-end">
                        <a
                          href="/admpnl/kyc"
                          className="btn btn-sm btn-light me-2"
                        >
                          Documents
                        </a>
                        <a
                          href="/admpnl/accounts"
                          className="btn btn-sm btn-secondary me-2"
                        >
                          Accounts
                        </a>
                        <a
                          href="/admpnl/wallets"
                          className="btn btn-sm btn-dark me-2"
                        >
                          Transactions
                        </a>
                        <a className="btn btn-sm btn-danger">Ban</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-capital">first + Last Name</td>
                    <td className="text-capital">Company Name</td>
                    <td>email@gmail.com</td>
                    <td>+12 1234567890</td>
                    <td className="clearfix">
                      <div className="float-end">
                        <a
                          href="/admpnl/kyc"
                          className="btn btn-sm btn-light me-2"
                        >
                          Documents
                        </a>
                        <a
                          href="/admpnl/accounts"
                          className="btn btn-sm btn-secondary me-2"
                        >
                          Accounts
                        </a>
                        <a
                          href="/admpnl/wallets"
                          className="btn btn-sm btn-dark me-2"
                        >
                          Transactions
                        </a>
                        <a className="btn btn-sm btn-danger">Ban</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-capital">first + Last Name</td>
                    <td className="text-capital">Company Name</td>
                    <td>email@gmail.com</td>
                    <td>+12 1234567890</td>
                    <td className="clearfix">
                      <div className="float-end">
                        <a
                          href="/admpnl/kyc"
                          className="btn btn-sm btn-light me-2"
                        >
                          Documents
                        </a>
                        <a
                          href="/admpnl/accounts"
                          className="btn btn-sm btn-secondary me-2"
                        >
                          Accounts
                        </a>
                        <a
                          href="/admpnl/wallets"
                          className="btn btn-sm btn-dark me-2"
                        >
                          Transactions
                        </a>
                        <a className="btn btn-sm btn-danger">Ban</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-capital">first + Last Name</td>
                    <td className="text-capital">Company Name</td>
                    <td>email@gmail.com</td>
                    <td>+12 1234567890</td>
                    <td className="clearfix">
                      <div className="float-end">
                        <a
                          href="/admpnl/kyc"
                          className="btn btn-sm btn-light me-2"
                        >
                          Documents
                        </a>
                        <a
                          href="/admpnl/accounts"
                          className="btn btn-sm btn-secondary me-2"
                        >
                          Accounts
                        </a>
                        <a
                          href="/admpnl/wallets"
                          className="btn btn-sm btn-dark me-2"
                        >
                          Transactions
                        </a>
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
