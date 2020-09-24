import React from "react";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./main-page";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Search from "./search";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <MainPage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
