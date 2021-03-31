import React from "react";
import { Jumbotron } from "react-bootstrap";
const About = () => {
  return (
    <Jumbotron>
      <h1>This is 127.0.0.1 (aka home)</h1>
      <div className="text-left">
        <p>Welcome to (Changeme To App Name)!</p>
        <p>
          This app can hopefully help you understand how to work with a code
          base created initially with Create React App, and then customized for
          use in CMPSC 156 at UCSB.
        </p>
        <p>This repo is similar to t</p>
        <p>Some tools used to create this app:</p>
        <ul>
          <li>
            <a href="https://github.com/facebook/create-react-app">
              Create React App
            </a>{" "}
            - used for creating the React frontend from scratch
          </li>
          <li>
            <a href="https://jestjs.io/">Jest</a> - a testing framework for
            JavaScript
          </li>
          <li>
            <a href="https://storybook.js.org/">Storybook</a> - used to provide
            a way to look at React Components in isolation
          </li>
        </ul>
      </div>
    </Jumbotron>
  );
};

export default About;
