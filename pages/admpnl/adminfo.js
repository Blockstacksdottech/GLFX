import Head from "next/head";
import Navbar from "./component/navbar";
import { useEffect, useState } from "react";
import { formatImage, postReq, req } from "@/helpers/helpers";
import Checker from "@/components/Checker";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function AdmInfo() {
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
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
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
                        Personal Details & Financial Information
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
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="card mb-5">
                          <div className="card-body">
                            <form>
                              <div className="row mb-3">
                                <div className="col-md-6">
                                  <label className="mb-2">
                                    Total Estimated Net Worth ($)?
                                  </label>
                                  <select
                                    className="form-select"
                                    name="net_worth"
                                    value={user.financial.net_worth}
                                    readOnly={true}
                                  >
                                    <option></option>
                                    <option value="Less than $10000">
                                      Less than $10000
                                    </option>
                                    <option value="$10000 to $50000">
                                      $10000 to $50000
                                    </option>
                                    <option value="$50000 to $100000">
                                      $50000 to $100000
                                    </option>
                                    <option value="$100000 to $500000">
                                      $100000 to $500000
                                    </option>
                                    <option value="More than $500000">
                                      More than $500000
                                    </option>
                                  </select>
                                </div>
                                <div className="col-md-6">
                                  <label className="mb-2">
                                    Total Estimated Annual Income ($)?
                                  </label>
                                  <select
                                    className="form-select"
                                    name="annual_income"
                                    value={user.financial.annual_income}
                                    readOnly={true}
                                  >
                                    <option></option>
                                    <option value="Less than $5000">
                                      Less than $5000
                                    </option>
                                    <option value="$5000 to $20000">
                                      $5000 to $20000
                                    </option>
                                    <option value="$20000 to $50000">
                                      $20000 to $50000
                                    </option>
                                    <option value="$50000 to $100000">
                                      $50000 to $100000
                                    </option>
                                    <option value="More than $100000">
                                      More than $100000
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col-md-4">
                                  <label className="mb-2">
                                    Your Employment Status
                                  </label>
                                  <select
                                    className="form-select"
                                    name="employment_status"
                                    value={user.financial.employment_status}
                                    readOnly={true}
                                  >
                                    <option></option>
                                    <option value="Employed">Employed</option>
                                    <option value="Self Employed">
                                      Self Employed
                                    </option>
                                    <option value="Student">Student</option>
                                    <option value="Unemployed">
                                      Unemployed
                                    </option>
                                    <option value="Retired">Retired</option>
                                  </select>
                                </div>
                                <div className="col-md-4">
                                  <label className="mb-2">
                                    Source Of Income/Wealth
                                  </label>
                                  <select
                                    className="form-select"
                                    name="sources"
                                    value={user.financial.sources}
                                    readOnly={true}
                                  >
                                    <option></option>
                                    <option value="Employment">
                                      Employment
                                    </option>
                                    <option value="Savings">Savings</option>
                                    <option value="Investment">
                                      Investment
                                    </option>
                                    <option value="Inheritance">
                                      Inheritance
                                    </option>
                                    <option value="Other Source">
                                      Other Source
                                    </option>
                                  </select>
                                </div>
                                <div className="col-md-4">
                                  <label className="mb-2">
                                    FOREX, CFDS And Other Instruments
                                  </label>
                                  <select
                                    className="form-select"
                                    name="instruments"
                                    value={capitalize(
                                      user.financial.instruments.toString()
                                    )}
                                    readOnly={true}
                                  >
                                    <option></option>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                  </select>
                                </div>
                              </div>
                              <div className="mb-3">
                                <label className="mb-2">
                                  Trading products are suitable as part of my
                                  investment objectives and I am able to assess
                                  the risk involved in trading them, including
                                  the possibility that I may lose all of my
                                  capital
                                </label>
                                <select
                                  className="form-select"
                                  name="assessment1"
                                  value={capitalize(
                                    user.financial.assessment1.toString()
                                  )}
                                  readOnly={true}
                                >
                                  <option></option>
                                  <option value="True">True</option>
                                  <option value="False">False</option>
                                </select>
                              </div>
                              <div className="mb-3">
                                <label className="mb-2">
                                  I have previous professional qualifications
                                  and/or work experience in the financial
                                  services industry
                                </label>
                                <select
                                  className="form-select"
                                  name="assessment2"
                                  value={capitalize(
                                    user.financial.assessment2.toString()
                                  )}
                                  readOnly={true}
                                >
                                  <option></option>
                                  <option value="True">True</option>
                                  <option value="False">False</option>
                                </select>
                              </div>
                              <div className="mb-3">
                                <label className="mb-2">
                                  Expected initial amount of Investment in USD ?
                                  ?
                                </label>
                                <select
                                  className="form-select"
                                  name="initial_investment"
                                  value={user.financial.initial_investment}
                                  readOnly={true}
                                >
                                  <option value="Less than $5000">
                                    Less than $5000
                                  </option>
                                  <option value="$5000 to $20000">
                                    $5000 to $20000
                                  </option>
                                  <option value="$20000 to $50000">
                                    $20000 to $50000
                                  </option>
                                  <option value="$50000 to $100000">
                                    $50000 to $100000
                                  </option>
                                  <option value="More than $100000">
                                    More than $100000
                                  </option>
                                </select>
                              </div>
                              {/* <div className="clearfix">
                                <a
                                  className="btn btn-primary float-end"
                                  onClick={update}
                                >
                                  Save
                                </a>
                              </div> */}
                            </form>
                          </div>
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
