import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login/Login";
import Registration from "./pages/Registration/Registration";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder/PlaceOrder";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/placeorder/:orderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
