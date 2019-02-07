import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "./routes/index.jsx";
// Store
import { Provider } from 'react-redux';
import store from './redux/store';

import registerServiceWorker from './registerServiceWorker';
import 'assets/css/index.css'
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Provider store={store}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
