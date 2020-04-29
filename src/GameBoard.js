import React, { Component } from 'react';
import Player from './Player';
import {Row, Col} from 'react-bootstrap';
import './GameBoard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSkullCrossbones, faPlus, faMinus, faTimes} from '@fortawesome/free-solid-svg-icons';

class GameBoard extends Component {

  // Set up state for gameboard
  constructor(props) {
    super(props);

      const players = [{
          name: '',
          number: 1,
          score: 0,
          isEliminated: false,
          isChecked: false
        }]

      this.state = {
        players,
        showControls: false
      }

    this.scoreChange = this.scoreChange.bind(this);
    this.checkPlayer = this.checkPlayer.bind(this);
    this.addToChecked = this.addToChecked.bind(this);
    this.uncheckAll = this.uncheckAll.bind(this);
    this.eliminateChecked = this.eliminateChecked.bind(this);
    this.namePlayer = this.namePlayer.bind(this);
    this.changePlayers = this.changePlayers.bind(this);
    this.toggleControls = this.toggleControls.bind(this);
  }

  toggleControls() {
    // When controls are hidden, board should be completely "audience facing" -- no scorekeeper business visible
    if (this.state.showControls) {
      // if the controls are currently showing, hide them
      this.setState({showControls: false});
      // uncheck any remaining checked players, for audience-facingness
      this.uncheckAll();
    } else this.setState({showControls: true});
  }

  changePlayers(howMany) {
    let newPlayerArray = [].concat(this.state.players);
    if (howMany === 1) {
      const nextPlayer = this.state.players.length + 1;
      const newPlayer = {
        name: '',
        number: nextPlayer,
        score: 0,
        isEliminated: false,
        isChecked: false
      }
      newPlayerArray.push(newPlayer);
    } else if (howMany === -1 && newPlayerArray.length > 1) {
      newPlayerArray.splice(-1,1);
    }

    this.setState({ players: newPlayerArray })

  }

  namePlayer(e, playerNum) {
    console.log('Naming a player');
    const newName = e.target.value;
    const players = this.state.players.map( (player, i) => {
      if (playerNum === player.number) player.name = newName;
      return player;
    })
    this.setState({players});

  }

  scoreChange(e,playerNum) {
    const newScore = e.target.value;
    if ( newScore > 25 ) return;
    const players = this.state.players.map( (player, i) => {
      if (playerNum === player.number) player.score = newScore;
      return player;
    })
    this.setState({players});
  }

  checkPlayer(e, playerNum) {
    const players = this.state.players.map( (player, i) => {
      if (playerNum === player.number) player.isChecked = !player.isChecked;
      return player;
    })
    this.setState({players});
  }

  addToChecked(howMany) {
    const players = this.state.players.map( (player) => {
      const originalScore = player.score;
      if ( player.isChecked && !player.isEliminated && player.score < 25 ) {
        player.score += howMany;
        // but if we have made score below zero or above 25, screw it
        if (player.score > 25 || player.score < 0) player.score = originalScore;
      }
      return player;
    });
    this.setState({players});
  }

  eliminateChecked() {
    const players = this.state.players.map( (player, i) => {
      if ( player.isChecked ) player.isEliminated += true;
      return player;
    })
    this.setState({players});
  }


  uncheckAll() {
    const players = this.state.players.map( (player, i) => {
      player.isChecked = false;
      return player;
    })
    console.dir(players);
    this.setState({players});
  }

  render() {
    const players = this.state.players.map((player) => (
      <Player
      key={player.number}
      number={player.number}
      name={player.name}
      score={player.score}
      updateScore={this.scoreChange}
      checkPlayer={this.checkPlayer}
      isChecked={player.isChecked}
      isEliminated={player.isEliminated}
      namePlayer={this.namePlayer}
      />
    ))


    return (
      <Row>
        <Col xs={1}>
        { this.state.showControls ? 
          <div className="control-center">
            <button className="btn btn-danger btn-round" onClick={this.toggleControls}><FontAwesomeIcon icon={faTimes} /></button>
            <p className="instructions">Click player number to select</p>

            <h3>Scoring</h3>
            <button className="btn btn-secondary btn-round add-remove-button" onClick={() => this.addToChecked(-1)}><FontAwesomeIcon icon={faMinus} /></button>
            <button className="btn btn-secondary btn-round add-remove-button" onClick={() => this.addToChecked(1)}><FontAwesomeIcon icon={faPlus} /></button>

            <h3>Players</h3>
            <button className="btn btn-secondary btn-round add-remove-button" onClick={() => this.changePlayers(-1)}><FontAwesomeIcon icon={faMinus} /></button>
            <button className="btn btn-secondary btn-round add-remove-button" onClick={() => this.changePlayers(1)}><FontAwesomeIcon icon={faPlus} /></button>


            <button className="btn btn-dark btn-sm" onClick={this.uncheckAll}>Uncheck All</button>
            <button className="btn btn-danger btn-sm" onClick={this.eliminateChecked}><FontAwesomeIcon icon={faSkullCrossbones} />Eliminate</button>

          </div>

          :
          <div className="title">
            <h1 title="Click to show controls" className="maestro-title" onClick={this.toggleControls}>MAESTRO</h1>
          </div>
        }

        </Col>
        <Col xs={11}>
          <div>
            {players}
          </div>
        </Col>
      </Row>
    )
  }
}

export default GameBoard;