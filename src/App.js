import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { reducer, initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

function App() {
  return (
    <div className="App">

      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </StateProvider>

    </div>
  );
}

export default App;
