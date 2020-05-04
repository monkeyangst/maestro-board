import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayerCard from './PlayerCard';
import './Player.scss';

function Player(props) {
  return (
    <Row>
      <Col xs={12} className="player-track">
        <div className="board-bg">
        <PlayerCard isEliminated={props.isEliminated} name={props.name} number={props.number} score={props.score} isSelected={props.isChecked} namePlayer={props.namePlayer} checkPlayer={props.checkPlayer}/>
        </div>
      </Col>
    </Row>
  )
}

export default Player;