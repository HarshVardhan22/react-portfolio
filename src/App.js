import React from "react";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/projects"><Projects/></Route>
        <Route path ="/blogs"><Blogs/></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
