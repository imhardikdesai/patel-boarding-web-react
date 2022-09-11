import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/aboutpage">
            <AboutPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
