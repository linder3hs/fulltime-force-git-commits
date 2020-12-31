import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../layouts";

// Views
import Home from "../views/Home";

function Routes() {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default Routes;
