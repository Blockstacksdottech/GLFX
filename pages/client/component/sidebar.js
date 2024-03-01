import { UserContext } from "@/contexts/UserContext";
import { logout } from "@/helpers/helpers";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [User, setUser] = useContext(UserContext);

  return (
    <>
      <div className="sidebar bg-light-grey">
        <div
          className="offcanvas-md offcanvas-end"
          tabIndex="-1"
          id="sidebarMenu"
          aria-labelledby="sidebarMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="sidebarMenuLabel">
              <img
                className="img-fluid"
                src="../../assets/brand/logo.png"
                alt="GLFX"
              />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-md-flex flex-column p-0 overflow-y-auto">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>My Account</span>
            </h6>
            <ul className="nav flex-column mb-auto">
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/myaccount/liveaccount"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Live Accounts"
                >
                  <i className="bi bi-view-list"></i>
                  Live Accounts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/myaccount/demoaccount"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Demo Accounts"
                >
                  <i className="bi bi-view-list"></i>
                  Demo Accounts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/myaccount/mytransaction"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="My Transaction"
                >
                  <i className="bi bi-border-all"></i>
                  My Transaction
                </a>
              </li>
            </ul>
            <hr className="my-1" />
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>My Profile</span>
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/myprofile/personaldetails/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Personal Details"
                >
                  <i className="bi bi-person"></i>
                  Personal Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/myprofile/kyc/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Personal Details"
                >
                  <i className="bi bi-person"></i>
                  Verification
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/myprofile/financialinformation/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Financial Information"
                >
                  <i className="bi bi-safe"></i>
                  Financial Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/myprofile/documentation/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Financial Information"
                >
                  <i className="bi bi-file-earmark-text"></i>
                  Documentation
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/myprofile/security/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Change Portal Password"
                >
                  <i className="bi bi-shield-lock"></i>
                  Security
                </a>
              </li>
            </ul>
            <hr className="my-1" />
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Balance</span>
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/balance/mywallet/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="My Wallet"
                >
                  <i className="bi bi-wallet2"></i>
                  My Wallet
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/balance/deposit/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Deposit"
                >
                  <i className="bi bi-arrow-right-circle"></i>
                  Deposit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/balance/withdraw/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Withdraw"
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  Withdraw
                </a>
              </li>
            </ul>
            <hr className="my-1" />
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Support</span>
            </h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/support/inbox/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Inbox"
                >
                  <i className="bi bi-inbox"></i>
                  Inbox
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href="/client/support/sent/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Sent"
                >
                  <i className="bi bi-arrow-return-right"></i>
                  Sent
                </a>
              </li> */}
            </ul>
            <hr className="my-1" />
            <ul className="nav flex-column">
              <li
                className="nav-item"
                onClick={() => {
                  logout(setUser);
                }}
              >
                <a
                  className="nav-link d-flex align-items-center gap-2 text-red"
                  href="/login"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Logout"
                >
                  <i className="bi bi-box-arrow-right"></i>
                  Logout
                </a>
              </li>
            </ul>

            <div className="flex-column mt-3 mb-0">
              <div className="card bg-support card-support">
                <div className="card-body">
                  <h5 className="card-title">Support</h5>
                  <p className="small">Any Query feel free to Contact</p>
                  <p>
                    <a href="mailto:support@glfx.com" className="text-dark">
                      <i className="bi bi-envelope-at me-2"></i>
                      support@glfx.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      className="text-dark"
                    >
                      <i className="bi bi-whatsapp me-2"></i>
                      Whatsapp us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
