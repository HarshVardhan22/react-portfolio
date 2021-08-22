import React from "react";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/projects"><Projects/></Route>
        <Route path ="/blogs"><Blogs/></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
