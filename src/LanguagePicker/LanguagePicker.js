import React from 'react';
import './LanguagePicker.css';

const languagePicker = (props) => {
  return (
    <select className="language-picker form-control-sm" value={props.currentLang} onChange={(e) => props.change(e)}>
    <option value="en">English</option>
    <option value="de">Deutsch</option>
  </select>
  )
}

export default languagePicker;