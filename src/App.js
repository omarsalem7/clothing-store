import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Route, Switch } from "react-router-dom";
import Header from "./componenets/Header/Header";
import SignIn_SignOut_Page from "./pages/SignIn_SignOut_Page/SignIn_SignOut_Page"
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignIn_SignOut_Page} />
      </Switch>
    </div>
  );
}

export default App;
