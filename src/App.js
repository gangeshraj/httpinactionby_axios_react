import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render () {
    return (
      // this is the base url to be prepended before any routing path
      //BrowserRouter should be parent component of the compinent where we use router
      <BrowserRouter basename="/routing-app">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
