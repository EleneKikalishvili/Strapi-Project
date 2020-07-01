import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import client from "./utils/apollo";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
