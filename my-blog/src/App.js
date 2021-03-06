import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
          <div className="App">
              <NavBar />
              <div id="page-body">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/articles-list" exact component={ArticlesListPage} />
                    <Route path="/article/:name" exact component={ArticlePage} />
                    <Route component={NotFoundPage} />
                </Switch>
              </div>
         
          </div>
    </Router>    
  );
}

export default App;
