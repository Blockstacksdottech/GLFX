import Checker from "@/components/Checker";
import { UserContext } from "@/contexts/UserContext";
import { logout } from "@/helpers/helpers";
import { useContext } from "react";

export default function Navbar() {
  const [User, setUser] = useContext(UserContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-light">
        <div className="container-fluid">
          <a className="navbar-brand h1" href="./">
            <img
              className="img-fluid logo"
              src="../../assets/brand/logo.png"
              alt="GLFX"
            />{" "}
            - Admin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/admpnl/clients"
                >
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-danger"
                  onClick={() => logout(setUser)}
                >
                  <i class="bi bi-door-closed"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
