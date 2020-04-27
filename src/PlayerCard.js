import React from 'react';
import './PlayerCard.css';

// The white card containing the player's name and number
function PlayerCard(props) {
  let cardCSS = 'player-card';
  if (props.isEliminated) cardCSS = 'player-card eliminated';
  const style = {
    marginLeft: 'calc((100%/25*' + props.score + ') - 200px)'
  }
  return(
    <div className={cardCSS} style={style}>
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