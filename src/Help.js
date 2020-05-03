import React from 'react';
import './Help.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


function Help(props) {
  return(
    <div className="help-panel">
      <h3>Help</h3>
      <p>Select players by clicking their names. Assign points using key commands below. Accidentally eliminated players can be reinstated by selecting their name again.</p>
      <h4>Key Commands</h4>
      <table className="key-commands">
        <tr>
					<td><span className="help-key">1</span></td>
					<td>Assign selected players a 1</td>
				</tr>
        <tr>
					<td><span className="help-key">2</span></td>
					<td>Assign selected players a 2</td>
				</tr>
        <tr>
					<td><span className="help-key">3</span></td>
					<td>Assign selected players a 3</td>
				</tr>
        <tr>
					<td><span className="help-key">4</span></td>
					<td>Assign selected players a 4</td>
				</tr>
        <tr>
					<td><span className="help-key">5</span></td>
					<td>Assign selected players a 5</td>
				</tr>
        <tr>
					<td><span className="help-key"><FontAwesomeIcon icon={faArrowRight}/></span> or <span className="help-key">+</span></td>
					<td>Give one point to selected players</td>
				</tr>
        <tr>
					<td><span className="help-key"><FontAwesomeIcon icon={faArrowLeft}/></span> or <span className="help-key">-</span></td>
					<td>Remove one point from selected players</td>
				</tr>
        <tr>
					<td><span className="help-key">U</span></td>
					<td>Unselect all players</td>
				</tr>
        <tr>
					<td><span className="help-key">E</span></td>
					<td>Eliminate selected players (tap player card again to undo)</td>
				</tr>
        <tr>
					<td><span className="help-key">S</span></td>
					<td>Show Player Setup panel</td>
				</tr>
        <tr>
					<td><span className="help-key">?</span></td>
					<td>Show/hide Help panel</td>
				</tr>


      </table>
    </div>
  )
}

export default Help;