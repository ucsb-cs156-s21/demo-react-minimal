import React from "react";
import "main/App.css";
import AppNavbar from "main/components/Nav/AppNavbar";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import AppFooter from "main/components/Footer/AppFooter";
import AboutPage from "main/pages/AboutPage";
import HomePage from "main/pages/HomePage";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Container>
      <AppFooter />
    </div>
  );
}

export default App;
