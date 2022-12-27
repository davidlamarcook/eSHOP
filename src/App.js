import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"

function App() {
  return (
    <div className="App">
    
    <Router>
      <Routes>
        <Route path='/checkout' element={<Checkout />}/>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
