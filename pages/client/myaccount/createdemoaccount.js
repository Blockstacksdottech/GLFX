import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import Checker from "@/components/Checker";
import { toast } from "react-toastify";
import { postReq } from "@/helpers/helpers";

export default function Createdemoaccount() {
  const [User, setUser] = useContext(UserContext);
  const [body, setBody] = useState({
    acc_type: "demo",
    acc_currency: "USD",
    acc_leverage: "",
    islamic: false,
    master_pass: "",
    investor_pass: "",
    nickname: "",
    balance: 0,
  });
  const [checked, setChecked] = useState(false);

  const handleFieldChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    let temp = { ...body };
    temp[name] = val;
    setBody(temp);
  };

  const createAccount = async () => {
    if (checked) {
      console.log("creating account");
      console.log(User);
      const data = {
        user: User.id,
        ...body,
      };
      const resp = await postReq("accounts/", data);
      if (resp) {
        toast.success("Account Created Successfully");
      } else {
        toast.error("Failed Creating Account");
      }
    } else {
      toast.warning("Agree to terms and conditions");
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - My Account | Create Demo Account</title>
      </Head>
      <Checker admin={false}>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-2 p-0">
              <Sidebar />
            </div>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-grey">
              <div className="pt-3 pb-2 mb-3 border-bottom">
                <div className="clearfix">
                  <h1 className="h5 text-center">Create Demo Account</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-md-7 m-auto">
                  <div className="card mb-5">
                    <div className="card-body">
                      <form>
                        <div className="mb-2">
                          <label>Choose Platform</label>
                        </div>
                        <div className="mb-3">
                          <div className="form-check form-check-inline">
                            <img
                              className="form-check-label"
                              src="../../assets/img/mt-5-logo.png"
                            />
                          </div>
                        </div>
                        {/* <div className="mb-3">
                          <label className="mb-2">Account Type</label>
                          <select className="form-select">
                            <option>Select Option</option>
                            <option>Demo Account</option>
                          </select>
                        </div> */}
                        <div className="mb-3">
                          <label className="me-3">Account Currency</label>
                          <div className="form-check form-check-inline">
                            {/* <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            /> */}
                            <label className="form-check-label">USD</label>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="mb-2">Leverage</label>
                          <select
                            className="form-select"
                            name="acc_leverage"
                            value={body.acc_leverage}
                            onChange={handleFieldChange}
                          >
                            <option>Select Leverage</option>
                            <option value="1:100">1:100</option>
                            <option value="1:50">1:50</option>
                            <option value="1:20">1:20</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="mb-2">Amount</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Amount"
                            min="1"
                            max="10000"
                            name="balance"
                            value={body.balance}
                            onChange={handleFieldChange}
                          />
                          <div class="clearfix">
                            <div class="form-text float-end">
                              Min amount : 1 | Max amount : 10000
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="mb-2">Master Password</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={"4tw98xu8"}
                              name="master_pass"
                              value={body.master_pass}
                              onChange={handleFieldChange}
                            />
                            <button className="btn btn-outline-secondary">
                              <i className="bi bi-clipboard"></i>
                            </button>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="mb-2">Investor Password</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={"4tw98xu8"}
                              name="investor_pass"
                              value={body.investor_pass}
                              onChange={handleFieldChange}
                            />
                            <button className="btn btn-outline-secondary">
                              <i className="bi bi-clipboard"></i>
                            </button>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={checked}
                              onChange={(e) => setChecked(e.target.checked)}
                            />
                            <label className="form-check-label">
                              Agree to terms and conditions
                            </label>
                          </div>
                        </div>
                        <div className="clearfix">
                          <a
                            className="btn btn-primary float-end"
                            onClick={createAccount}
                          >
                            Create Account
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
      </Checker>
    </>
  );
}
