import React from 'react';
import './PlayerCard.css';

// The white card containing the player's name and number
function PlayerCard(props) {
  return(
    <div className="player-card">
      <span className="player-number">
        {props.number}
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <span className="player-score">
        {props.score}
      </span>
    </div>
  )
}

export default PlayerCard;