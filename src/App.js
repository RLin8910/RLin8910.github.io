import './styles.css';
import NavBar from './modules/NavBar';
import Header from './modules/Header';
import Footer from './modules/Footer';

// pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import {
  BrowserRouter as Router,
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
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
