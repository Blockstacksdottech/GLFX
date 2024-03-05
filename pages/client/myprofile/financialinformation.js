import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import Checker from "@/components/Checker";
import { postReq, req } from "@/helpers/helpers";
import { toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";

export default function Financialinformation() {
  const [User, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();

  const fetchInfo = async () => {
    const resp = await req("financialinfo");
    if (resp) {
      setInfo(resp);
      setLoading(false);
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchInfo().then(() => console.log("Fetched Info"));
  }, []);

  // handlers
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let temp = { ...info };
    temp[name] = value;
    setInfo(temp);
  };

  const update = async () => {
    const resp = await postReq("financialinfo", info);
    if (resp) {
      await fetchInfo();
      toast.success("Updated");
    } else {
      toast.error("Failed updating financial info");
    }
  };

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      <Head>
        <title>GLFX - My Profile | Financial Information</title>
      </Head>
      <Checker admin={false}>
        <LoadingOverlay active={loading} spinner text={`Loading...`}>
          {!loading && info && (
            <>
              <Navbar />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3 col-lg-2 p-0">
                    <Sidebar />
                  </div>

                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
                    <div className="pt-3 pb-2 mb-3 border-bottom">
                      <div className="clearfix">
                        <h1 className="h5 text-center">
                          Financial Information
                        </h1>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 m-auto">
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
                                    value={info.net_worth}
                                    onChange={handleChange}
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
                                    value={info.annual_income}
                                    onChange={handleChange}
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
                                    value={info.employment_status}
                                    onChange={handleChange}
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
                                    value={info.sources}
                                    onChange={handleChange}
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
                                      info.instruments.toString()
                                    )}
                                    onChange={handleChange}
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
                                    info.assessment1.toString()
                                  )}
                                  onChange={handleChange}
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
                                    info.assessment2.toString()
                                  )}
                                  onChange={handleChange}
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
                                  value={info.initial_investment}
                                  onChange={handleChange}
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
                              <div className="clearfix">
                                <a
                                  className="btn btn-primary float-end"
                                  onClick={update}
                                >
                                  Save
                                </a>
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
        </LoadingOverlay>
      </Checker>
    </>
  );
}
