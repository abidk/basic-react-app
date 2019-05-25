import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => <button className="Button" onClick={props.action}>{props.label}</button>

Button.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
}

export default memo(Button);
