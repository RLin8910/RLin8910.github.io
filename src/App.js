import './styles.css';
import NavBar from './modules/NavBar';
import Header from './modules/Header';
import Footer from './modules/Footer';

// pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// The Street King
import TheStreetKing from './pages/the-street-king/TheStreetKing';
import PrivacyPolicy from './pages/the-street-king/PrivacyPolicy';
import FeatureRequests from './pages/the-street-king/FeatureRequests';
// Left Turn Legend
import LeftTurnLegend from './pages/left-turn-legend/LeftTurnLegend';

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/the-street-king" element={<TheStreetKing/>}/>
          <Route path = "/the-street-king/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path = "/the-street-king/feature-requests" element={<FeatureRequests/>}/>
          <Route path = "/left-turn-legend" element={<LeftTurnLegend/>}/>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
