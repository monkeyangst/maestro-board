import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayerCard from './PlayerCard';
import './Player.scss';

class Player extends Component {
  render() {
    const score = this.props.score > 0 ? this.props.score : 0;
    return(
      <Row>
        <Col xs={2}>Score here</Col>
        <Col xs={10} className="player-track">
          <div className="board-bg">
          <PlayerCard name={this.props.name} number={this.props.number} score={score}/>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Player;