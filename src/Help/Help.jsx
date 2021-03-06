import React from 'react';
import './Help.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft, faArrowUp, faArrowDown, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';


const Help = (props) => {
	const { t } = useTranslation();
	
	return(
		<div className="help-panel">
			<h3>{t("Help")}</h3>
			<p>{t("Select players by clicking their names. Assign points using key commands below.")}</p>
			<p>{t("Accidentally eliminated players can be reinstated by reselecting their name.")}</p>
			<h4>{t("Key Commands")}</h4>
			<table className="key-commands">
				<tbody>
					<tr>
						<td><span className="help-key">1</span>&nbsp;...&nbsp;<span className="help-key">5</span></td>
						<td>{t("Assign score to selected players")}</td>
					</tr>
					<tr>
						<td><span className="help-key"><FontAwesomeIcon icon={faArrowRight}/></span> or <span className="help-key"><FontAwesomeIcon icon={faPlus} /></span></td>
						<td>{t("Give one point to selected players")}</td>
					</tr>
					<tr>
						<td><span className="help-key"><FontAwesomeIcon icon={faArrowLeft}/></span> or <span className="help-key"><FontAwesomeIcon icon={faMinus} /></span></td>
						<td>{t("Remove one point from selected players")}</td>
					</tr>
					{/* <tr>
						<td><span className="help-key"><FontAwesomeIcon icon={faArrowUp}/></span></td>
						<td>{t("Add one round to board")}</td>
					</tr>
					<tr>
						<td><span className="help-key"><FontAwesomeIcon icon={faArrowDown}/></span></td>
						<td>{t("Remove one round from board")}</td>
					</tr> */}
					<tr>
						<td><span className="help-key">U</span></td>
						<td>{t("Unselect all players")}</td>
					</tr>
					<tr>
						<td><span className="help-key">E</span></td>
						<td>{t("Eliminate selected players")}</td>
					</tr>
					<tr>
						<td><span className="help-key">S</span></td>
						<td>{t("Show Player Setup panel")}</td>
					</tr>
					<tr>
						<td><span className="help-key">?</span></td>
						<td>{t("Show/hide Help panel")}</td>
					</tr>
				</tbody>
			</table>
			<div className="version">{t("Version")} {props.version}</div>
		</div>
		)
	}

	Help.propTypes = {
		version: PropTypes.string
	}

	
	export default Help;