import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Sent() {
  return (
    <>
      <Head>
        <title>GLFX - Support | Sent</title>
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
                <h1 className="h5 float-start">Sent</h1>
                <div className="float-end">
                  <a
                    className="btn btn-info"
                    href="/client/support/newmessage/"
                  >
                    New Message
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ms-auto">
                <form action="#">
                  <div className="input-group flex-nowrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Mail"
                    />
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                  </div>
                </form>
              </div>
            </div>

            <div className="table-responsive my-4">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td className="action">
                      <a href="">
                        <i className="bi bi-trash text-danger"></i>
                      </a>
                    </td>
                    <td className="subject">
                      <a href="/client/support/detailed/" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet ...
                      </a>
                    </td>
                    <td className="time float-end">12/10/2024 | 08:30 PM</td>
                  </tr>
                  <tr>
                    <td className="action">
                      <a href="">
                        <i className="bi bi-trash text-danger"></i>
                      </a>
                    </td>
                    <td className="subject">
                      <a href="/client/support/detailed/" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet ...
                      </a>
                    </td>
                    <td className="time float-end">12/10/2024 | 08:30 PM</td>
                  </tr>
                  <tr>
                    <td className="action">
                      <a href="">
                        <i className="bi bi-trash text-danger"></i>
                      </a>
                    </td>
                    <td className="subject">
                      <a href="/client/support/detailed/" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet ...
                      </a>
                    </td>
                    <td className="time float-end">12/10/2024 | 08:30 PM</td>
                  </tr>
                  <tr>
                    <td className="action">
                      <a href="">
                        <i className="bi bi-trash text-danger"></i>
                      </a>
                    </td>
                    <td className="subject">
                      <a href="/client/support/detailed/" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet ...
                      </a>
                    </td>
                    <td className="time float-end">12/10/2024 | 08:30 PM</td>
                  </tr>
                  <tr>
                    <td className="action">
                      <a href="">
                        <i className="bi bi-trash text-danger"></i>
                      </a>
                    </td>
                    <td className="subject">
                      <a href="/client/support/detailed/" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        Lorem ipsum dolor sit amet ...
                      </a>
                    </td>
                    <td className="time float-end">12/10/2024 | 08:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="clearfix">
              <div className="float-end">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
