import Head from "next/head";
import Navbar from "./component/navbar";
import { useEffect, useState } from "react";
import { formatImage, postReq, req } from "@/helpers/helpers";
import Checker from "@/components/Checker";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function Accounts() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();

  const fetchUser = async (id) => {
    const resp = await req(`admin/admusers/${id}`);
    if (resp) {
      console.log(resp);
      setUsers(resp);
      setLoading(false);
    } else {
      toast.error("Failed fetching users");
    }
  };
  const handleUser = async (id, action) => {
    const body = {
      id,
      action,
    };
    const resp = await postReq("admin/banuser", body);
    if (resp) {
      toast.success(`User ${action === "approve" ? "Approved" : "Declined"}`);
      fetchUser(user.id);
    } else {
      toast.error("Failed");
    }
  };

  useEffect(() => {
    const idd = params.get("id");
    console.log(`Params are`);
    console.log(idd);
    if (idd) {
      fetchUser(idd).then(() => console.log("fetched users"));
    }
  }, [params]);
  return (
    <>
      <Head>
        <title>GLFX - My Account | List of Accounts</title>
      </Head>
      <Checker admin={true}>
        {!loading && (
          <>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <main className="col-md-12 ms-sm-auto px-md-5 bg-grey">
                  <div className="pt-3 pb-2 mb-3 border-bottom">
                    <div className="clearfix">
                      <h1 className="h5 float-start">
                        {/* Personal Details & */} Documents
                      </h1>
                    </div>

                    <div className="row">
                      <div className="col-md-12 m-auto">
                        <div className="card mb-5">
                          <form>
                            <div className="card-body">
                              {/* <div className="row mb-3">
                                <div className="col-md-6">
                                  <label className="mb-2">First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={user.name}
                                    readOnly={true}
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="mb-2">Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={user.surname}
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
                                    value={user.phone}
                                    readOnly={true}
                                  />
                                </div>
                                <div className="col-md-4">
                                  <label className="mb-2">Email Address</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={user.email}
                                    readOnly={true}
                                  />
                                </div>
                                <div className="col-md-4">
                                  <label className="mb-2">Date of Birth</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={user.info.birthday}
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
                                    value={user.info.address}
                                    readOnly={true}
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label className="mb-2">Address Line 2</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={user.info.address2}
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
                                    value={user.info.city}
                                    readOnly={true}
                                  />
                                </div>
                                <div className="col-md-4">
                                  <label className="mb-2">State</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={user.info.state}
                                    readOnly={true}
                                  />
                                </div>
                                <div className="col-md-4">
                                  <label className="mb-2">Country</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={user.info.country}
                                    readOnly={true}
                                  />
                                </div>
                              </div> */}
                              {!user.document && (
                                <h1 className="text-center">
                                  No documents found
                                </h1>
                              )}
                              {user.documents && (
                                <>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div className="mb-3">
                                        <label className="mb-2">
                                          Document Issuing Country
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={user.documents.country}
                                          readOnly={true}
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div className="mb-3">
                                        <label className="mb-2">
                                          Document Type
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          value={user.documents.docType}
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
                                      src={formatImage(user.documents.front)}
                                      class="img-thumbnail"
                                      alt="Front Side of Document"
                                    />
                                  </div>
                                  <label className="mb-2">
                                    <strong>Back</strong> side of Document
                                  </label>
                                  <div className="mb-3">
                                    <img
                                      src={formatImage(user.documents.back)}
                                      class="img-thumbnail"
                                      alt="Back Side of Document"
                                    />
                                  </div>
                                  {!user.is_verified && (
                                    <div className="clearfix">
                                      <div class="float-end">
                                        <a
                                          className="btn btn-success"
                                          onClick={() => {
                                            handleUser(user.id, "approve");
                                          }}
                                        >
                                          Approve
                                        </a>
                                        <a
                                          className="btn btn-danger ms-2"
                                          onClick={() => {
                                            handleUser(user.id, "unapprove");
                                          }}
                                        >
                                          Decline
                                        </a>
                                      </div>
                                    </div>
                                  )}
                                </>
                              )}
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
        )}
      </Checker>
    </>
  );
}
