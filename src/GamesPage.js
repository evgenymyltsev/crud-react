import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames, deleteGame } from './actions'

import GamesList from './GameList'

class GamesPage extends Component {

    componentDidMount() {
        this.props.fetchGames()
    }

   render() {
       return (
           <div>
               <h1>Games List</h1>

               <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
           </div>
       )
   }
}

GamesPage.propTYpes = {
    games:      React.PropTypes.array.isRequired,
    fetchGames: React.PropTypes.func.isRequired,
    deleteGame: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames, deleteGame })(GamesPage);