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
                <h1 className="h5 float-start">
                  Personal Details & Documentation
                </h1>
              </div>

              <div className="row">
                <div className="col-md-12 m-auto">
                  <div className="card mb-5">
                    <form>
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="mb-2">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value="First Name"
                              readOnly={true}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="mb-2">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Last Name"
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-4">
                            <label className="mb-2">Phone Number</label>
                            <input
                              type="number"
                              className="form-control"
                              value="Phone Number"
                              readOnly={true}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="mb-2">Email Address</label>
                            <input
                              type="number"
                              className="form-control"
                              value="Email Address"
                              readOnly={true}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="mb-2">Date of Birth</label>
                            <input
                              type="text"
                              className="form-control"
                              value="01/04/1989"
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="mb-2">Address Line 1</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Address Line 1"
                              readOnly={true}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="mb-2">Address Line 2</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Address Line 2"
                              readOnly={true}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-4">
                            <label className="mb-2">City</label>
                            <input
                              type="text"
                              className="form-control"
                              value="City"
                              readOnly={true}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="mb-2">State</label>
                            <input
                              type="text"
                              className="form-control"
                              value="State"
                              readOnly={true}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="mb-2">Country</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Country"
                              readOnly={true}
                            />
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div className="mb-3">
                              <label className="mb-2">
                                Document Issuing Country
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value="USA"
                                readOnly={true}
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div className="mb-3">
                              <label className="mb-2">Document Type</label>
                              <input
                                type="text"
                                className="form-control"
                                value="ID Card"
                                readOnly={true}
                              />
                            </div>
                          </div>
                        </div>

                        <label className="mb-2">
                          <strong>Front</strong> side of Document
                        </label>
                        <div className="mb-3">
                          <img
                            src="/assets/img/front.jpg"
                            class="img-thumbnail"
                            alt="Front Side of Document"
                          />
                        </div>
                        <label className="mb-2">
                          <strong>Back</strong> side of Document
                        </label>
                        <div className="mb-3">
                          <img
                            src="/assets/img/back.png"
                            class="img-thumbnail"
                            alt="Back Side of Document"
                          />
                        </div>
                        <div className="clearfix">
                          <div class="float-end">
                            <a className="btn btn-success">Approve</a>
                            <a className="btn btn-danger ms-2">Decline</a>
                          </div>
                        </div>
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
