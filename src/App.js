import React from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route to="/" exact component={Home} />
      </Switch>
    </>
  );
}
