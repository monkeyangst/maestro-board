// Setup window
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import './Setup.css';

function PlayerEntry(props) {
  let playerID = "player-" + props.number;
  return(
    <div className="player-entry-field">
      <label for={playerID} className="player-entry-field-number">{props.number}</label>
      <input
        id={playerID} 
        className="form-control"
        type="text" 
        value={props.name} 
        placeholder="Type player name here" 
        onChange={(e) => props.namePlayer(e, props.number)}
        onKeyPress={event => {
          if (event.key === 'Enter') { props.addPlayer() }; 
        }}
        autoFocus 
      />
    </div>
  )
}

class Setup extends Component {
  render() {
    const playerList = this.props.players.map((player) => (
      <PlayerEntry key={player.number} name={player.name} number={player.number} namePlayer={this.props.namePlayer} addPlayer={this.props.addPlayer} />
    ))


    return(
      <div className="setup-window">
        <p>Welcome to Maestro! Please enter the names of each player.</p>
        <div className="player-entry">
          {playerList}
          <button 
            className="btn btn-secondary btn-round"
            onClick={this.props.addPlayer}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="btn btn-success" onClick={this.props.startGame}>Start Maestro!</button>
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