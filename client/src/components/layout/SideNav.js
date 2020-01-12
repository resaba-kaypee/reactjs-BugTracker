import React, { Fragment, useContext } from "react";
import SideNav from "react-simple-sidenav";
import { Link } from "react-router-dom";
import AuthAdminContext from "../../context/authAdmin/authAdminContext";
import AuthContext from "../../context/auth/authContext";
import IssueContext from "../../context/issue/issueContext";

const Nav = ({ showNav, onHideNav }) => {
  const authAdminContext = useContext(AuthAdminContext);
  const authContext = useContext(AuthContext);
  const issueContext = useContext(IssueContext);
  const { clearIssues } = issueContext;

  const onLogout = () => {
    if(authAdminContext.isAuthenticated){
      authAdminContext.logout()
    } else {
      authContext.logout();
    }
    clearIssues();
  };

  const authLinks = (
    <Fragment>
      <ul className="list-group">
        <li className="list-group-item">
          <i className="fas fa-home"></i>{" "}
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <a onClick={onLogout} href="#!">
            <i className="fas fa-sign-out-alt"></i>{" "}
            <span className="hide-sm"> Logout</span>
          </a>
        </li>
        <li className="list-group-item">
          <i className="fas fa-info-circle"></i>{" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Fragment>
  );

  const adminLinks = (
    <Fragment>
      <ul className="list-group">
        <li className="list-group-item">
          <i className="fas fa-home"></i>{" "}
          <Link to="/admin">Home</Link>
        </li>
        <li className="list-group-item">
          <a onClick={onLogout} href="#!">
            <i className="fas fa-sign-out-alt"></i>{" "}
            <span className="hide-sm"> Logout</span>
          </a>
        </li>
        <li className="list-group-item">
          <i className="fas fa-info-circle"></i>{" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <ul className="bg-primary list-group">
        <li className="list-group-item">
          <i className="fas fa-sign-in-alt"></i>{" "}
          <Link to="/login">Login</Link>
        </li>
        <li className="list-group-item">
          <i className="fas fa-pencil-alt"></i>{" "}
          <Link to="/register">Register</Link>
        </li>
        <li className="list-group-item">
          <i className="fas fa-info-circle"></i>{" "}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Fragment>
  );
  return (
    <SideNav
      showNav={showNav}
      onHideNav={onHideNav}
      navStyle={{ background: "#002366", maxWidth: "250px"}}
    >
      <div style={{
        fontSize: "20px",
      }}>{authAdminContext.admin && authAdminContext.isAuthenticated ? adminLinks 
          : authContext.user && authContext.isAuthenticated ? authLinks 
          : guestLinks}
      </div>
    </SideNav>
  );
};

export default Nav;
