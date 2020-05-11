import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayerCard from '../PlayerCard/PlayerCard';
import './Player.scss';

const player = (props) => {
  return (
    <Row>
      <Col xs={12} className="player-track">
        <div className="board-bg">
        <PlayerCard isEliminated={props.isEliminated} name={props.name} number={props.number} score={props.score} isSelected={props.isChecked} namePlayer={props.namePlayer} checkPlayer={props.checkPlayer} rounds={props.rounds} />
        </div>
      </Col>
    </Row>
  )
}

export default player;