import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";

export default function Security() {
  return (
    <>
      <Head>
        <title>GLFX - My Profile | Change Portal Password</title>
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
                <h1 className="h5 text-center">Change Portal Password</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 m-auto">
                <div className="card mb-5">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="mb-2">Current Password</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your current password"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">New Password</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your new password"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-2">Confirm Password</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Please confirm your new password"
                        />
                      </div>
                      <div className="clearfix">
                        <a className="btn btn-primary float-end">Update</a>
                      </div>
                    </form>
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
