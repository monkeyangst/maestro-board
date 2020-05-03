// Setup window
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import {Row, Col} from 'react-bootstrap';
import './Setup.css';

function PlayerEntry(props) {
  let playerID = "player-" + props.number;
  return(
    <Row className="player-entry-field">
      <Col xs={1}>
        <label htmlFor={playerID} className="player-entry-field-number">{props.number}</label>
      </Col>
      <Col xs={11}>
      <input
          id={playerID} 
          className="form-control"
          type="text" 
          value={props.name} 
          placeholder="Type player name here" 
          onChange={(e) => props.namePlayer(e, props.number)}
          onKeyPress={event => {
            if (props.isLast) {
              if (event.key === 'Enter') { props.addPlayer() }; 
            }
          }}
          autoFocus 
        />
      </Col>
    </Row>
  )
}

class Setup extends Component {
  render() {
    let howManyPlayers = this.props.players.length;
    console.log(howManyPlayers + ' players');
    const playerList = this.props.players.map((player,i) => (
      <PlayerEntry key={player.number} name={player.name} number={player.number} namePlayer={this.props.namePlayer} addPlayer={this.props.addPlayer} removePlayer={this.props.removePlayer} isLast={(player.number === howManyPlayers) ? true : false}/>
    ))


    return(
      <div className="setup-panel">
        <h3>Player Setup</h3>
        <div className="player-entry">
          {playerList}
          <div className="setup-buttons">
            <button 
              className="remove-player-button btn btn-secondary btn-round" title="Remove player"
              onClick={this.props.removePlayer}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
             <button 
              className="add-player-button btn btn-secondary btn-round" title="Add player"
              onClick={this.props.addPlayer}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="start-game-button btn btn-success" title="Start Maestro" onClick={this.props.startGame}>Start Maestro!</button>
          </div>
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