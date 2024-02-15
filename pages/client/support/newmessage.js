import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Newmessage() {
  return (
    <>
      <Head>
        <title>GLFX - Support | New Message</title>
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
                <h1 className="h5 float-start">New Message</h1>
              </div>
            </div>

            <div className="card shadow-none mt-3 border border-light">
              <div className="card-body">
                <div className="media mt-3">
                  <div className="media-body">
                    <input
                      className="form-control mb-2"
                      placeholder="Subject"
                    />
                    <textarea
                      className="form-control"
                      rows="9"
                      placeholder="Reply here..."
                    ></textarea>
                  </div>
                </div>
                <div className="clearfix mt-3">
                  <div className="float-end">
                    <a className="btn btn-primary">
                      <i className="bi bi-send mr-1"></i> Send
                    </a>
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
