import React        from 'react';
import GameCard     from './GameCard'

export default function GameList({ games, deleteGame }) {
    const emptyMessage = (
        <p>There are no games in your collection</p>
    );

    const gamesList = (
        <div className="ui four cards">
            {games.map(game => <GameCard game={game} key={game._id} deleteGame={deleteGame}/>)}
        </div>
    );

    return(
        <div>
            { games.length === 0 ? emptyMessage : gamesList }
        </div>
    );
}

GameList.propTypes = {
    games:      React.PropTypes.array.isRequired,
    deleteGame: React.PropTypes.func.isRequired
}