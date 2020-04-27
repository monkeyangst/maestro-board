import React, { Component } from 'react';
import Player from './Player';
import {Row, Col} from 'react-bootstrap';

class GameBoard extends Component {

  // Set up state for gameboard
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Lampe',
          number: 1,
          score: 5
        },
        {
          name: 'Kevin',
          number: 2,
          score: 3
        },
        {
          name: 'Brad',
          number: 3,
          score: 0
        },
        {
          name: 'Chuy',
          number: 4,
          score: 0
        },
        {
          name: 'Cole',
          number: 5,
          score: 0
        },
        {
          name: 'Cortney',
          number: 6,
          score: 0
        },
        {
          name: 'Topping',
          number: 7,
          score: 0
        },
        {
          name: 'Kareem',
          number: 8,
          score: 12
        },
        {
          name: 'Courtney',
          number: 9,
          score: 15
        },
        {
          name: 'Kaci',
          number: 10,
          score: 0
        },
        {
          name: 'Alayna',
          number: 11,
          score: 20
        },
        {
          name: 'Cliff',
          number: 12,
          score: 0
        },
      ]
    }
    this.scoreChange = this.scoreChange.bind(this);
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

  render() {
    const players = this.state.players.map((player) => (
      <Player
      key={player.number}
      number={player.number}
      name={player.name}
      score={player.score}
      updateScore={this.scoreChange}
      />
    ))
    return (
      <Row>
        <Col xs={1}>
          <h1>MAESTRO</h1>
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