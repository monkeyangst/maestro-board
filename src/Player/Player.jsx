import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayerCard from '../PlayerCard/PlayerCard';
import './Player.scss';
import PropTypes from 'prop-types';

class Player extends Component {
  shouldComponentUpdate(nextProps) {
    // console.log('THIS',this.props,'NEXT',nextProps);
    if (
      this.props.name === nextProps.name &&
      this.props.isChecked === nextProps.isChecked &&
      this.props.isEliminated === nextProps.isEliminated &&
      this.props.score === nextProps.score
    ) return false;
    else return true;
  }

  render() {
    return (
      <Row>
        <Col xs={12} className="player-track">
          <div className="board-bg">
          <PlayerCard isEliminated={this.props.isEliminated} name={this.props.name} number={this.props.number} score={this.props.score} isSelected={this.props.isChecked} namePlayer={this.props.namePlayer} checkPlayer={this.props.checkPlayer} rounds={this.props.rounds} />
          </div>
        </Col>
      </Row>
    )
  }
}

Player.propTypes = {
  isEliminated: PropTypes.bool,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  number: PropTypes.number,
  rounds: PropTypes.number,
  score: PropTypes.number,
  namePlayer: PropTypes.func,
  checkPlayer: PropTypes.func
}

export default Player;