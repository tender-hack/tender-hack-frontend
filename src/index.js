import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import Routes from "./routes";
// import rootSaga from "./sagas";
import createHistory from "history/createBrowserHistory";
import { Router } from "react-router";
import { routerReducer, routerMiddleware } from "react-router-redux";
import './index.css';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
);

// sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <Routes store={store} history={history} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
