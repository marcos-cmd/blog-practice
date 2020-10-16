import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
    <Router>
          <div className="App">
              <NavBar />
              <div id="page-body">
                <Route path="/" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/articles-list" exact component={ArticlesList} />
                <Route path="/article/:name" exact component={ArticlePage} />
              </div>
         
          </div>
    </Router>    
  );
}

export default App;
