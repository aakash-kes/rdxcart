import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import trolley from "../assets/trolley.png";

export default function Header() {
  const data = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark postion">
        <div className="container">
          {/* <a className="navbar-brand" href="trolley">
            LOGO
          </a> */}
          <img src={trolley} alt="Logo" width="35 px" />

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
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/Cart ">
                  Cart({data.length})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
