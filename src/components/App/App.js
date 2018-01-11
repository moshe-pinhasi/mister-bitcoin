import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContactsPage from '../ContactsPage/ContactsPage'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>

        <BrowserRouter>
          <Switch>
            {/* <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostShow} /> */}
            <Route path="/" component={ContactsPage} />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
