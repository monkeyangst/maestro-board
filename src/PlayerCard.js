import React from 'react';
import './PlayerCard.css';

// The white card containing the player's name and number
function PlayerCard(props) {
  let cardCSS = 'player-card';
  if (props.isEliminated) cardCSS = 'player-card eliminated';
  else if (props.isSelected) cardCSS = 'player-card selected';
  const style = {
    marginLeft: 'calc((100%/25*' + props.score + ') - 200px)'
  }
  return(
    <div className={cardCSS} style={style}>
      <div className="player-number" onClick={(e) => props.checkPlayer(e, props.number)}>
        {props.number}
      </div>
      <div className="player-name">
          {props.name}
        {/* <input
          className="player-name-field"
          placeholder="type name"
          type="text"
          value={props.name}
          onChange={(e) => props.namePlayer(e, props.number)}
        /> */}
      </div>
      {/* <span className="player-score">
        {props.score}
      </span> */}
    </div>
  )
}

export default PlayerCard;