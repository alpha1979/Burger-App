import React, { Component } from "react";

import classes from "./App.module.css";
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1> Let's Make the Best Burger</h1>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
