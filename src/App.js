import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar logoUrl={'https://user-images.githubusercontent.com/87645745/184291912-c83f0d8a-0f6a-41fd-8b97-ea6bd1d0a463.png'} />

        <Switch>
          <Route exact path="/aboutpage">
            <AboutPage />
          </Route>
          <Route exact path="/gallerypage">
            <GalleryPage />
          </Route>
          <Route exact path="/contactpage">
            <ContactPage />
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
