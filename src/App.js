import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import About from './pages/About/AboutNav';
import Posts from './pages/Posts/Post';
import DontPost from './pages/DontPost/dontpost';
import MoneyPost from './pages/MoneyPost/moneypost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/posts' component={Posts} />
        <Route path = '/newpost' component = {DontPost} />
        <Route path = '/moneypost' component = {MoneyPost} />
        <Route path='/sign-up'/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
