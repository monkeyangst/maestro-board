import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayerCard from './PlayerCard';
import './Player.scss';

class Player extends Component {
  render() {
    const score = this.props.score > 0 ? this.props.score : 0;
    return(
      <Row>
        <Col xs={12} className="player-track">
          <div className="board-bg">
          <PlayerCard isEliminated={this.props.isEliminated} name={this.props.name} number={this.props.number} score={score} isSelected={this.props.isChecked} namePlayer={this.props.namePlayer} checkPlayer={this.props.checkPlayer}/>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Player;