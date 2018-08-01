import React from "react";
import { Switch, Route } from "react-router-dom";

//Importing Components
import ResumePage from "./Components/Resume";
import AboutPage from "./Components/About";
import ContactPage from "./Components/Contact";
import ProjectPage from "./Components/Project";
import LandingPage from "./Components/Landing";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/resume" component={ResumePage} />
    <Route exact path="/aboutme" component={AboutPage} />
    <Route exact path="/projects" component={ProjectPage} />
    <Route exact path="/contact" component={ContactPage} />
  </Switch>
);

export default Routes;
