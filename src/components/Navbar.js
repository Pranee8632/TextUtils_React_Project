import React from "react";
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

// rfc - react functional component

// export default function Navbar()
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="#">
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/About">
                {props.aboutUs}
              </Link> */}
              {/* <a className="nav-link" href="#">
                {props.aboutUs}
              </a>  */}
              
              {/* Link and to is also from the react router */}
            </li>
          </ul>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}

            {/* bootstrap code : success-green , primary-blue , danger-red*/}
            {/* for more bootstrap use the link -> getbootstrap.com  */}
          
          <div className={`form-check form-switch text-${props.text}`}>
            {/*<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  */}

            {/* in bootstrap text-light is used to get the text in the white */}
            <input className="form-check-input mx-1 " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  );
};

// setting the types of props and isrequired means user should send this value 
// if you give the other type_value than mentioned here then it gives an error
Navbar.propTypes = {
  title:PropTypes.string.isRequired,
  aboutUs:PropTypes.string
}

// this is default setting of the values
Navbar.defaultProps={
  title:"set title here",
  aboutUs:"About here"
}