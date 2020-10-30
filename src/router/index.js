import React, { Component } from 'react';
import asyncComponent from '../untils/AsyncComponent';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';

const AsyncFlow = asyncComponent(()=>import("../modules/editor/flowChart"))

class RouteConfig extends Component {
  render() {
    return (
        <div className="App" style={{height:'100%'}}>
          <Router>
            <Switch>
              <Route  path="/flow" component={AsyncFlow} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default RouteConfig;
