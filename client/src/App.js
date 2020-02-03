import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AdminDashboard from "./components/admin/AdminDashboard";
import UserDashBoard from "./components/user/UserDashBoard";
import Login from "./components/auth/Login";
import IssueState from "./context/issue/IssueState";
import LogState from "./context/log/LogState";
import AuthAdminState from "./context/authAdmin/AuthAdminState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import PrivateAdminRoute from "./components/routing/PrivateAdminRoute";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./assets/css/all.css";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <React.StrictMode>
      <AuthAdminState>
          <AuthState>
            <LogState>
              <IssueState>
                <AlertState>
                  <Router>
                    <Fragment>
                      <Navbar />
                      <div className="">
                        <Switch>
                          <Route exact path="/" component={Login} />
                          <PrivateAdminRoute
                            path="/admin"
                            component={AdminDashboard}
                          />
                          <PrivateRoute
                            path="/dashBoard"
                            component={UserDashBoard}
                          />
                        </Switch>
                      </div>
                    </Fragment>
                  </Router>
                </AlertState>
              </IssueState>
            </LogState>
          </AuthState>
      </AuthAdminState>
    </React.StrictMode>
  );
};

export default App;
