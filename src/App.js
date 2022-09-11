import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
