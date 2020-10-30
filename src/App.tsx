import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Checkout from "./pages/checkout/Checkout";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/orders/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./components/MyContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";

const promise = loadStripe(
  "pk_test_51HXPJiALBtiLlXJisQevunzT5S5IAb1kE4XfAlBw1HinkajEr60p9QH0LSTv7WdOdQrp1zbEMkpF91spTk4L1SXE00DZNhOzrC"
);

const App: React.FC = () => {
  // @ts-ignore
  const [{}, dispatch] = useStateValue();

  useEffect((): void => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in or was loggedin
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
