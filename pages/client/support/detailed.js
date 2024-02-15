import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Detailed() {
  return (
    <>
      <Head>
        <title>GLFX - Support | Message Details</title>
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
                <div className="h5 float-start">
                  <a href="/client/support/inbox/" className="text-dark">
                    <i className="bi bi-arrow-left-circle"></i> Back to Inbox
                  </a>
                </div>
              </div>
            </div>

            <div className="card shadow-none mt-3 border border-light">
              <div className="card-body">
                <div className="media mb-3">
                  <div className="media-body">
                    <span className="media-meta float-end">
                      12/10/2024 | 08:22 AM
                    </span>

                    <small className="text-muted">
                      From : info@example.com
                    </small>
                    <h5 className="my-3 text-primary m-0">
                      Subject goes here ...
                    </h5>
                  </div>
                </div>

                <div className="chat-body">
                  <p className="small px-2 py-1 text-dark text-wrap text-start my-2">
                    <span className="h6">
                      Support <br />
                    </span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem.
                  </p>

                  <p className="small px-2 py-1 text-secondary text-wrap text-end my-2">
                    <span className="h6">
                      Me <br />
                    </span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem.
                  </p>
                </div>
                <hr />
                <div className="media mt-3">
                  <div className="media-body">
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
