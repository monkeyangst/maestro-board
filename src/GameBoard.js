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
      ]
    }
  }

  render() {
    const players = this.state.players.map((player) => (
      <Player
      key={player.number}
      number={player.number}
      name={player.name}
      score={player.score}
      />
    ))
    return (
      <Row>
        <Col xs={1}>
          <h1>MAESTRO</h1>
        </Col>
        <Col xs={11}>
          <div className="board-bg">
          {players}

          </div>
        </Col>
      </Row>

    )
  }
}

export default GameBoard;