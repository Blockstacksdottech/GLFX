export default function Navbar() {
  return (
    <>
      <header className="navbar sticky-top bg-light flex-md-nowrap p-0">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">
          <img
            className="img-fluid"
            src="../../assets/brand/logo.png"
            alt="GLFX"
          />
        </a>

        <ul className="navbar-nav flex-row me-4">
          <li className="nav-item me-2">
            <a className="nav-link">
              <i className="bi bi-shield-fill-check text-green me-1"></i>
              <small>Mobile Verified</small>
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link">
              <i className="bi bi-shield-fill-check text-green me-1"></i>
              <small>Document Verified</small>
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link">
              <i className="bi bi-shield-fill-check text-green me-1"></i>
              <small>Email Verified</small>
            </a>
          </li>
          <li className="nav-item d-md-none">
            <button
              className="nav-link px-3 text-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list nav-bi"></i>
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}
