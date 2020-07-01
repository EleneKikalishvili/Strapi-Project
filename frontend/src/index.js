import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import client from "./utils/apollo";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
