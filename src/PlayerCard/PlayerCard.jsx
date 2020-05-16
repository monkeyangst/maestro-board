import React from 'react';
import ScaleText from "react-scale-text";
import './PlayerCard.css';

// The white card containing the player's name and number
const playerCard = (props) => {
  let {rounds, score, name, number, checkPlayer, isEliminated, isSelected} = props;
  let cardCSS = 'player-card';
  if (isEliminated) cardCSS = 'player-card eliminated';
  else if (isSelected) cardCSS = 'player-card selected';
  let totalPoints = rounds * 5;
  const style = {
    marginLeft: 'calc((100%/' + totalPoints + '*' + score + ') - 200px)'
  }
  return(
    <div className={cardCSS} style={style} onClick={(e) => checkPlayer(e, number)}>
      <div className="player-number">
        {number}
      </div>
      <div className="player-name"  title={score}>
        <ScaleText maxFontSize={24}>

            {name}
            </ScaleText>
        </div>
    </div>
  )
}

export default playerCard;