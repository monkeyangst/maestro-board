import React from 'react';
import './Help.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


function Help(props) {
  return(
    <div className="help-panel">
      <h3>Help</h3>
      <p>Select players by clicking their names. Assign points using key commands below.</p>
      <p>Accidentally eliminated players can be reinstated by reselecting their name.</p>
      <h4>Key Commands</h4>
      <table className="key-commands">
        <tr>
					<td><span className="help-key">1</span>&nbsp;...&nbsp;<span className="help-key">5</span></td>
					<td>Assign score to selected players</td>
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
					<td>Eliminate selected players</td>
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