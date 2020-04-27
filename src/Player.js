import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayerCard from './PlayerCard';
import './Player.scss';

class Player extends Component {
  render() {
    const score = this.props.score > 0 ? this.props.score : 0;
    return(
      <Row>
        <Col xs={1}>
          {/* <input
            type="number"
            className="score-input"
            value={score}
            onChange={ (e) => this.props.updateScore(e, this.props.number) }
          /> */}
          <input 
            type="checkbox"
            checked={this.props.isChecked}
            onChange={ (e) => this.props.checkPlayer(e, this.props.number)}
          />
        </Col>
        <Col xs={11} className="player-track">
          <div className="board-bg">
          <PlayerCard isEliminated={this.props.isEliminated} name={this.props.name} number={this.props.number} score={score}/>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Player;