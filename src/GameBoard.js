import React, { Component } from 'react';
import Player from './Player';
import {Row, Col} from 'react-bootstrap';

class GameBoard extends Component {

  // Set up state for gameboard
  constructor(props) {
    super(props);
    // this.state = {
      // players: [
      //   {
      //     name: 'Lampe',
      //     number: 1,
      //     score: 5
      //   },
      //   {
      //     name: 'Kevin',
      //     number: 2,
      //     score: 3
      //   },
      //   {
      //     name: 'Brad',
      //     number: 3,
      //     score: 0
      //   },
      //   {
      //     name: 'Chuy',
      //     number: 4,
      //     score: 0
      //   },
      //   {
      //     name: 'Cole',
      //     number: 5,
      //     score: 0
      //   },
      //   {
      //     name: 'Cortney',
      //     number: 6,
      //     score: 0
      //   },
      //   {
      //     name: 'Topping',
      //     number: 7,
      //     score: 0
      //   },
      //   {
      //     name: 'Kareem',
      //     number: 8,
      //     score: 12
      //   },
      //   {
      //     name: 'Courtney',
      //     number: 9,
      //     score: 15
      //   },
      //   {
      //     name: 'Kaci',
      //     number: 10,
      //     score: 0
      //   },
      //   {
      //     name: 'Alayna',
      //     number: 11,
      //     score: 20
      //   },
      //   {
      //     name: 'Cliff',
      //     number: 12,
      //     score: 0
      //   },
      // ]
    // }
      const players = [];
      for ( let i = 1; i <= 13; i++) {
        players.push({
          name: 'Player ' + i,
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
    this.addOneToChecked = this.addOneToChecked.bind(this);
    this.subtractOneFromChecked = this.subtractOneFromChecked.bind(this);
    this.uncheckAll = this.uncheckAll.bind(this);
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
    const newCheck = e.target.checked;
    const players = this.state.players.map( (player, i) => {
      if (playerNum === player.number) player.isChecked = newCheck;
      return player;
    })
    this.setState({players});
  }

  addOneToChecked() {
    const players = this.state.players.map( (player, i) => {
      if ( player.isChecked && player.score < 25 ) player.score++;
      return player;
    })
    this.setState({players});
  }

  subtractOneFromChecked() {
    const players = this.state.players.map( (player, i) => {
      if ( player.isChecked && player.score > 0 ) player.score--;
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
      />
    ))
    return (
      <Row>
        <Col xs={1}>
          <div className="title">
            <h1>MAESTRO</h1>
          </div>
          <div className="control-center">
            <button className="btn btn-primary btn-lg" onClick={this.addOneToChecked}>+</button>
            <button className="btn btn-primary btn-lg" onClick={this.subtractOneFromChecked}>-</button>
            <button className="btn btn-secondary btn-sm" onClick={this.uncheckAll}>Uncheck All</button>
            <button className="btn btn-danger btn-sm">Eliminate</button>
          </div>
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