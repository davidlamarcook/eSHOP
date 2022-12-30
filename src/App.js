import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import { reducer, initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

function App() {
  return (
    <div className="App">
    
    <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <Routes>
        <Route path='/checkout' element={<Checkout />}/>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </Router>
    </StateProvider>

    </div>
  );
}

export default App;
