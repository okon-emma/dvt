import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import DashboardOverview from "./dashboard/DashboardOverview";
import Assessments from "./dashboard/Assessments";
import ConsumerRequests from "./dashboard/ConsumerRequests";
import DataInventory from "./dashboard/DataInventory";
import DataMapping from "./dashboard/DataMapping";
import Guides from "./dashboard/Guides";
import Organization from "./dashboard/Organization";
import RiskRegister from "./dashboard/RiskRegister";

import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import Lock from "./auth/Lock";
import NotFoundPage from "./auth/NotFound";
import ServerError from "./auth/ServerError";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />

    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithLoader exact path={Routes.Assessments.path} component={Assessments} />
    <RouteWithLoader exact path={Routes.ConsumerRequests.path} component={ConsumerRequests} />
    <RouteWithLoader exact path={Routes.DataInventory.path} component={DataInventory} />
    <RouteWithLoader exact path={Routes.DataMapping.path} component={DataMapping} />
    <RouteWithLoader exact path={Routes.Guides.path} component={Guides} />
    <RouteWithLoader exact path={Routes.Organization.path} component={Organization} />
    <RouteWithLoader exact path={Routes.RiskRegister.path} component={RiskRegister} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
