import React from 'react';
import './Help.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


function Help(props) {
  return(
    <div className="help-panel">
      <h3>Key Commands</h3>
      <ul>
        <li><span className="help-key">1</span>Assign selected players a 1</li>
        <li><span className="help-key">2</span>Assign selected players a 2</li>
        <li><span className="help-key">3</span>Assign selected players a 3</li>
        <li><span className="help-key">4</span>Assign selected players a 4</li>
        <li><span className="help-key">5</span>Assign selected players a 5</li>
        <li><span className="help-key"><FontAwesomeIcon icon={faArrowRight}/></span>give one point to selected players</li>
        <li><span className="help-key"><FontAwesomeIcon icon={faArrowLeft}/></span>remove one point from selected players</li>
        <li><span className="help-key">U</span>Unselect all players</li>
        <li><span className="help-key">E</span>Eliminate selected players (tap player card again to undo)</li>
        <li><span className="help-key">?</span>Show/hide this help panel</li>


      </ul>
    </div>
  )
}

export default Help;