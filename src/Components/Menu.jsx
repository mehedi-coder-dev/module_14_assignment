import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Frame 8.png";

const Menu = () => {
  return (
    <div className="navbar-dark bg_color">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-start">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="" />
              </a>
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <NavLink to="/" className="nav-link" href="#">
                      Home{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/team" className="nav-link" href="#">
                      Team
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/service" className="nav-link" href="#">
                      Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/project" className="nav-link" href="#">
                      Projects
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/testimonial" className="nav-link" href="#">
                      Testimonials
                    </NavLink>
                  </li>
                </ul>
                <div style={{ marginLeft: "10px" }}>
                  <button type="buttom" className="btn btn-outline-success mx-4">
                    Login
                  </button>
                  <button type="buttom" className="btn btn-success">
                    Register
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
