import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayerCard from './PlayerCard';

class Player extends Component {
  render() {
    const score = this.props.score > 0 ? this.props.score : 0;
    return(
      <Row className="mb-3">
        <Col xs={2}>Score here</Col>
        <Col xs={10}>
          <PlayerCard name={this.props.name} number={this.props.number} score={score}/>
        </Col>
      </Row>
    )
  }
}

export default Player;