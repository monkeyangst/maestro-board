import React, { Component } from 'react';
import Player from './Player';
import {Row, Col} from 'react-bootstrap';

class GameBoard extends Component {

  // Set up state for gameboard
  constructor(props) {
    super(props);

      const players = [];
      for ( let i = 1; i <= 13; i++) {
        players.push({
          name: 'Player',
          number: i,
          score: 0,
          isEliminated: false,
          isChecked: false
        })
      this.state = {
        players
      }

    }
    this.scoreChange = this.scoreChange.bind(this);
    this.checkPlayer = this.checkPlayer.bind(this);
    this.addToChecked = this.addToChecked.bind(this);
    this.uncheckAll = this.uncheckAll.bind(this);
    this.eliminateChecked = this.eliminateChecked.bind(this);
    this.namePlayer = this.namePlayer.bind(this);
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
    const players = this.state.players.map( (player, i) => {
      if ( player.isChecked && !player.isEliminated && player.score < 25 ) player.score += howMany;
      return player;
    });
    this.uncheckAll();
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
          <div className="title">
            <h1>MAESTRO</h1>
          </div>
        </Col>
        <Col xs={1}>
        <div className="control-center">
            <button className="btn btn-success btn-sm btn-block" onClick={() => this.addToChecked(1)}>+1</button>
            <button className="btn btn-success btn-sm btn-block" onClick={() => this.addToChecked(2)}>+2</button>
            <button className="btn btn-success btn-sm btn-block" onClick={() => this.addToChecked(3)}>+3</button>
            <button className="btn btn-success btn-sm btn-block" onClick={() => this.addToChecked(4)}>+4</button>
            <button className="btn btn-success btn-sm btn-block" onClick={() => this.addToChecked(5)}>+5</button>

            <button className="btn btn-primary btn-sm btn-block" onClick={() => this.addToChecked(-1)}>-1</button>
            <button className="btn btn-secondary btn-sm" onClick={this.uncheckAll}>Uncheck All</button>
            <button className="btn btn-danger btn-sm" onClick={this.eliminateChecked}>Eliminate</button>
          </div>

        </Col>
        <Col xs={10}>
          <div>
            {players}
          </div>
        </Col>
      </Row>

    )
  }
}

export default GameBoard;