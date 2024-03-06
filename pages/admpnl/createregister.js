import Head from "next/head";
import Navbar from "./component/navbar";
import { useEffect, useState } from "react";
import { formatImage, postReq, registerCall, req } from "@/helpers/helpers";
import Checker from "@/components/Checker";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { RegsiterValidator } from "@/helpers/validators";
import { useRouter } from "next/router";

export default function AdmInfo() {
  const router = useRouter();

  const registerMethod = async (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let phone = document.getElementById("phone").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let company_name = document.getElementById("company_name").value;

    if (confirm !== password) {
      toast.warning("Password missmatch");
    } else {
      let data = {
        username,
        email,
        password,
        name,
        surname,
        phone,
        company_name,
      };

      const parsed = RegsiterValidator.safeParse(data);
      if (parsed.success) {
        let resp = await registerCall(data, false);
        if (resp) {
          if (resp.failed) {
            for (let err of resp.result) {
              toast.error("failed creating user : " + err);
            }
          } else {
            toast.success("User Created");
            router.push("/admpnl/clients");
          }
        } else {
          console.log(resp);
          toast.error("failed Creating user");
        }
      } else {
        for (const err of parsed.error.issues) {
          toast.error(`${err.path[0]} : ${err.message}`);
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - My Account | List of Accounts</title>
      </Head>
      <Checker admin={true}>
        {
          <>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <main className="d-flex align-items-center my-5 justify-content-center">
                  <form
                    method="post"
                    action="/client/myaccount/liveaccount"
                    autoComplete="off"
                    autoFocus="off"
                    className="form-signin w-100 m-auto"
                  >
                    <div className="text-center">
                      <img
                        className="mb-4"
                        src="../assets/brand/logo.png"
                        alt="GLFX"
                      />
                      <h1 className="mb-3">Create User</h1>
                    </div>

                    <div className="form-floating mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        id="name"
                      />
                      <label>First Name</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        id="surname"
                      />
                      <label>Last Name</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        id="username"
                      />
                      <label>Username</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                        id="company_name"
                      />
                      <label>Company Name</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        id="email"
                      />
                      <label>Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        id="phone"
                      />
                      <label>Phone</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                      />
                      <label>Password</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        id="confirm"
                      />
                      <label>Confirm Password</label>
                    </div>

                    <button
                      className="btn btn-primary w-100 py-2"
                      onClick={registerMethod}
                    >
                      Register
                    </button>
                  </form>

                  {/* <div className="pt-3 pb-2 mb-3 border-bottom">
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
                              
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </main>
              </div>
            </div>
          </>
        }
      </Checker>
    </>
  );
}
