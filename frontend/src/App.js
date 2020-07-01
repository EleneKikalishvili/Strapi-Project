import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "./components/nav/nav.components.jsx";
import CollectionImages from "./pages/collection/collection.component.jsx";
import CategoryImages from "./pages/category/category.component.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={CollectionImages} exact />
        <Route path="/:id" component={CategoryImages} />
      </Switch>
    </div>
  );
}

export default App;
