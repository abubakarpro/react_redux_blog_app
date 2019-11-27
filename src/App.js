import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import AddPost from "./components/AddPost";
import DisplayPost from "./components/DisplayPost";
import SinglePage from "./components/SinglePost";
import SearchResult from "./components/SearchResult";

import Store from "./store/Store";

function App() {
  return (
    <React.Fragment>
      <Provider store={Store}>
        <Route component={Header} />
        <section className="main wrapper">
          <Switch>
            <Route path="/AddPost" exact component={AddPost} />

            <Route path="/search/:query" component={SearchResult} />
            <Route path="/post/:id" component={SinglePage} />
            <Route path="/AddPost/:id" component={AddPost} />
            <Route path="/" exact component={DisplayPost} />
          </Switch>
        </section>
      </Provider>
    </React.Fragment>
  );
}

export default App;
