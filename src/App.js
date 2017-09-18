import React, { Component }     from 'react';
import { NavLink, Route }       from 'react-router-dom';
import GamesPage                from './GamesPage';
import GameFormPage             from './GameFormPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
            <NavLink className="item" activeClassName="active"  exact={true} to="/">Home</NavLink>
            <NavLink className="item" activeClassName="active"  exact={true} to="/games">Games</NavLink>
            <NavLink className="item" activeClassName="active"  exact={true} to="/games/new">Add New Game</NavLink>
        </div>

        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/games/new" component={GameFormPage} />
        <Route exact path="/game/:_id" component={GameFormPage} />
      </div>
    );
  }
}

export default App;
