import './styles.css';
import NavBar from './modules/NavBar';
import Header from './modules/Header';
import Footer from './modules/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Changelog from './pages/Changelog';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
// The Street King
import TheStreetKing from './pages/the-street-king/TheStreetKing';
import PrivacyPolicy from './pages/the-street-king/PrivacyPolicy';
import FeatureRequests from './pages/the-street-king/FeatureRequests';
import GameChangelogs from './pages/GameChangelogs';
// Left Turn Legend
import LeftTurnLegend from './pages/left-turn-legend/LeftTurnLegend';
// Blog
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import GetBlogs from './pages/BlogPost';
// Minigames
import Minigames from './pages/Minigames';
import MinigamePage from './pages/MinigamePage';
import GetMinigames from './pages/MinigameEntry';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const BLOG_DIR = './blog-posts/';

function App() {
  const blogs = GetBlogs();
  const minigames = GetMinigames();
  return(
    <div className="page-container">
      <NavBar/>
      <Header/>
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/changelog" element = {<Changelog/>}/>
          <Route path = "/shop" element = {<Shop/>}/>
          <Route path = "/the-street-king" element={<TheStreetKing/>}/>
          <Route path = "/the-street-king/privacy-policy" element={<PrivacyPolicy game="The Street King"/>}/>
          <Route path = "/the-street-king/feature-requests" element={<FeatureRequests/>}/>
          <Route path = "/the-street-king/changelogs" element={<GameChangelogs game="The Street King"/>}/>
          <Route path = "/left-turn-legend" element={<LeftTurnLegend/>}/>
          <Route path = "/left-turn-legend/privacy-policy" element={<PrivacyPolicy game="Left Turn Legend"/>}/>
          <Route path = "/left-turn-legend/changelogs" element={<GameChangelogs game="Left Turn Legend"/>}/>
          <Route path = "/blog" element={<Blog/>}/>
          {
            blogs.map((blog) =>{
              return (<Route path = {blog.getPagePath()} key={blog.getPagePath()} element = {<BlogPage
                title={blog.getName()} date={blog.getDate()} filename = {blog.getContentPath()} url={blog.getPagePath()}
              />}/>);
            })
          }
          <Route path = "/minigames" element={<Minigames/>}/>
          {
            minigames.map((minigame) =>{
              return(<Route path={minigame.getPagePath()} key={minigame.getPagePath()} element={
                <MinigamePage title={minigame.getName()} filename={minigame.getContentPath()} url={minigame.getPagePath()}
                  gamePath={minigame.getGamePath()} thumbPath={minigame.getPreviewImage()}
                />
              }/>);
            })
          }
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;