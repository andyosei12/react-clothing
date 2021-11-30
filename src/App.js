import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// info: Components and Pages Import
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Signin from "./pages/signin/Signin.page";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </>
  );
}

export default App;
