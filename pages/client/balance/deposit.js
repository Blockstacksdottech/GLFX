import Head from "next/head";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import Checker from "@/components/Checker";
import {
  formatDate,
  getBadgeClass,
  handleFileSubmit,
  handleSingleFileSubmit,
  req,
} from "@/helpers/helpers";
import { toast } from "react-toastify";

export default function Deposit() {
  const [User, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [wallet, setWallet] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // usage state
  const [choice, setChoice] = useState("account");
  const [selectedAccount, setSelectedAccount] = useState();
  const [amount, setAmount] = useState();
  const [photo, setPhoto] = useState();

  // fetchers
  const loadWallet = async () => {
    const resp = await req("wallet");
    if (resp) {
      setWallet(resp);
    } else {
      toast.error("Something went wrong");
    }
  };

  const loadAccounts = async () => {};

  const loadTransactions = async () => {
    const resp = await req("transactions");
    if (resp) {
      console.log(resp);
      setTransactions(resp);
    } else {
      toast.error("Failed Fetching transactions");
    }
  };

  const loadData = async () => {
    await loadWallet();
    await loadTransactions();
    setLoading(false);
  };

  // useEffect

  useEffect(() => {
    loadData().then(() => console.log("Loaded data"));
  }, []);

  // input handlers
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSelectChange = (e) => {
    if (choice === "account") {
      setSelectedAccount(null);
    } else if (choice === "wallet") {
      if (e.target.value === wallet.wallet_id) {
        setSelectedAccount(wallet);
      }
    }
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  // submit
  const save = async () => {
    if (!selectedAccount || !selectedAccount.wallet_id) {
      toast.warning(
        `Choose ${choice === "wallet" ? " a wallet" : " an account"}`
      );
    } else if (!amount || amount < 10) {
      toast.warning(`Choose an amount greater than 0`);
    } else {
      const body = {
        source: choice,
        action: "deposit",
        amount,
      };
      const resp = await handleSingleFileSubmit(photo, "management", body);
      if (resp) {
        toast.success("Request Created");
        loadData();
      } else {
        toast.error("Failed submiting the request");
      }
    }
  };

  return (
    <>
      <Head>
        <title>GLFX - Balance | Deposit</title>
      </Head>
      {!loading && wallet && (
        <Checker admin={false}>
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
                      <h1 className="h5 text-center">Deposit</h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 m-auto">
                      <div className="card">
                        <div className="card-body">
                          <form>
                            <div className="mb-3">
                              <div className="mb-2">
                                <label>Account Type</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  checked={choice === "account" ? true : false}
                                  value={choice === "account" ? true : false}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setChoice("account");
                                    }
                                  }}
                                />
                                <label className="form-check-label">
                                  Account
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  checked={choice === "wallet" ? true : false}
                                  value={choice === "wallet" ? true : false}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setChoice("wallet");
                                    }
                                  }}
                                />
                                <label className="form-check-label">
                                  Wallet
                                </label>
                              </div>
                            </div>
                            <div className="mb-">
                              <label className="mb-2">
                                Choose your{" "}
                                {choice === "account" ? "Account" : "Wallet"}
                              </label>
                              <select
                                className="form-select"
                                name="acc"
                                onChange={handleSelectChange}
                                value={
                                  choice === "wallet" && selectedAccount
                                    ? selectedAccount.wallet_id
                                    : ""
                                }
                              >
                                <option>
                                  Choose your{" "}
                                  {choice === "account" ? "Account" : "Wallet"}
                                </option>
                                {choice === "account" && <>{}</>}
                                {choice === "wallet" && (
                                  <>
                                    <option value={`${wallet.wallet_id}`}>
                                      Wallet : {wallet.wallet_id}
                                    </option>
                                  </>
                                )}
                              </select>
                            </div>

                            <div className="my-3 card">
                              <div className="table-responsive">
                                <table className="table table-borderless text-center">
                                  <thead>
                                    <tr>
                                      <th scope="col">Balance</th>
                                      {/* <th scope="col">Equity</th>
                                <th scope="col">Free Margin</th>
                                <th scope="col">Margin</th>
                                <th scope="col">Margin-level</th>
                                <th scope="col">Credit</th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        {!selectedAccount && <>USD --</>}
                                        {selectedAccount && (
                                          <>
                                            {choice === "wallet" &&
                                              `USD ${selectedAccount.amount}`}
                                          </>
                                        )}
                                      </td>
                                      {/* <td>USD 539.60</td>
                                <td>USD 539.60</td>
                                <td>USD 0.00</td>
                                <td>0.00</td>
                                <td>0.00</td> */}
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            <div className="mb-3">
                              <div className="mb-2">
                                <label>Payment Method</label>
                              </div>
                              <div class="row">
                                <div class="col-md-4 mb-2">
                                  <div className="form-check">
                                    {/* <input
                                      className="form-check-input form-check-trader"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      checked={true}
                                    /> */}
                                    <img
                                      className="form-check-label img-fluid"
                                      src="../../assets/img/localdeposit.jpg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <label className="mb-2">Amount</label>
                            <div class="input-group">
                              <span class="input-group-text">USD</span>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Amount"
                                value={amount}
                                onChange={handleAmount}
                              />
                            </div>
                            <div class="clearfix">
                              <div class="float-end">
                                <div className="form-text">
                                  Min amount:{" "}
                                  <span className="badge text-bg-dark">
                                    USD 10
                                  </span>
                                </div>
                              </div>
                            </div>
                            {choice === "wallet" && (
                              <div class="mb-3">
                                <label class="form-label">Receipt Photo</label>
                                <input
                                  class="form-control"
                                  type="file"
                                  id="formFile"
                                  accept="image/*"
                                  onChange={handleFileChange}
                                />
                              </div>
                            )}

                            <div className="clearfix">
                              <a
                                className="btn btn-primary float-end"
                                onClick={save}
                              >
                                Deposit Now
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-12">
                      <div className="card">
                        <div class="card-header">
                          <h6>Transactions</h6>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-borderless">
                              <thead>
                                <tr>
                                  <th scope="col">Transaction ID</th>
                                  <th scope="col">Date</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Action</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Type</th>
                                </tr>
                              </thead>
                              <tbody>
                                {transactions.map((e, i) => {
                                  if (e.t_type === "deposit") {
                                    return (
                                      <tr key={`tr-${i}`}>
                                        <td>#{e.id}</td>
                                        <td>{formatDate(new Date(e.date))}</td>
                                        <td>USD {e.amount}</td>
                                        <td>{e.action}</td>
                                        <td>
                                          <a
                                            className={`badge ${getBadgeClass(
                                              e.status
                                            )}`}
                                          >
                                            {e.status}
                                          </a>
                                        </td>
                                        <td>{e.t_type}</td>
                                      </tr>
                                    );
                                  }
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </>
        </Checker>
      )}
    </>
  );
}
