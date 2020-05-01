// Setup window
import React, { Component } from 'react';
import PropTypes from 'prop-types';

function PlayerEntry(props) {
  let playerID = "player-" + props.number;
  let autoFocus = '';
  return(
    <div className="player-entry-field">
      <span className="player-entry-field-number">{props.number}</span>
      <input type="text" value={props.name} placeholder="Type player name here" onChange={(e) => props.namePlayer(e, props.number)} id={playerID} autoFocus />
    </div>
  )
}

class Setup extends Component {
  render() {
    const playerList = this.props.players.map((player) => (
      <PlayerEntry key={player.number} name={player.name} number={player.number} namePlayer={this.props.namePlayer}/>
    ))


    return(
      <div className="setup-window">
        <p>Welcome to Maestro! Please enter the names of each player.</p>
        <div className="player-entry">
          {playerList}
          <button onClick={this.props.addPlayer}>Add Player</button>
          <button onClick={this.props.startGame}>Start Maestro!</button>
        </div>
      </div>

    )
  }
}

Setup.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  namePlayer: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
}

export default Setup;