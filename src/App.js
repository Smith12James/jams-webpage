import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Album from './components/Album';
import Landing from './components/Landing';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav align="center">
            <ul>
              <li><a href='/' className="land">Home</a></li>
              <li><a href='/Library' className="lib">Library</a></li>
            </ul>
          </nav>
          <h1 className="logo">Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path ="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}


export default App;
