import React from "react";
import Header from "./header";
import Footer from "./footer";
import MainPage from "./main-page";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Search from "./search";
import BreakfastPage from "./breakfast-page";
import LunchMenu from "./lunch-menu";
import FoodPage from "../food-page";
import DinnerMenu from "./dinner-menu";
import DessertMenu from "./dessert-menu";
import AppSnackMenu from "./app-snack-menu";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <MainPage />
      <Switch>
        <Route path="/breakfast">
          <BreakfastPage />
        </Route>
        <Route path="/lunch">
          <LunchMenu />
        </Route>
        <Route path="/foodpage">
          <FoodPage />
        </Route>
        <Route path="/dinner">
          <DinnerMenu />
        </Route>
        <Route path="/dessert">
          <DessertMenu />
        </Route>
        <Route path="/app-snack">
          <AppSnackMenu />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
