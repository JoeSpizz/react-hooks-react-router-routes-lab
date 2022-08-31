import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

// src/
// ├── data.js
// ├── index.js
// └── components/
//     ├── App.js
//     ├── Actors.js
//     ├── Directors.js 
//     ├── Home.js
//     ├── Movies.js
//     └── NavBar.js 

function App() {
  return <div>
  <NavBar/>
  <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/movies">
    <Movies/>
    </Route>
    <Route exact path="/actors">
    <Actors/>
    </Route>
    <Route exact path="/directors">
    <Directors/>
    </Route>
    </Switch>
    </div>;
}

export default App;
