import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav({ handleSearch }) {
  const [queryText, setQueryText] = useState("");

  const handler = () => {
    handleSearch(queryText);
  }

  return <div className="col-2">
    <nav
      className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
      id="sidebar"
    >
      <div className="nav-container">
        <a className="navbar-brand" href="/">
          <img src="/logo/Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <Link className="nav-item nav-link" to="/">
                  <i className="fas fa-home fa-lg"></i>&nbsp; Home
                </Link>
              </li>
              <li>
                <Link className="nav-item nav-link" to="#">
                  <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                </Link>
              </li>
              <li>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control mb-2"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={(e) => {
                      setQueryText(e.target.value);
                    }}
                  />
                  <div
                    className="input-group-append"
                    style={{ marginBottom: 4 }}
                  >
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      type="button"
                      id="button-addon1"
                      onClick={handler}
                    >
                      GO
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-btn">
        <button className="btn signup-btn" type="button">
          Sign Up
        </button>
        <button className="btn login-btn" type="button">
          Login
        </button>
        <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
      </div>
    </nav>
  </div>;
}
