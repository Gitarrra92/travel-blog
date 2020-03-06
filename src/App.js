import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import SinglePost from "./views/SinglePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/post/:id" component={SinglePost} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
