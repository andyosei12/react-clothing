import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// info: Components Import
import Homepage from "./pages/homepage/Homepage";

const Hatspage = (props) => {
  console.log(props);
  return <h1>Hats page</h1>;
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={Hatspage} />
    </Switch>
  );
}

export default App;
