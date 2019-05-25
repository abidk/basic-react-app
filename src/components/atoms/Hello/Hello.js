import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Hello.css';

const Hello = (props) => <p className="HelloText">Hello {props.name}</p>

Hello.propTypes = {
    name: PropTypes.string.isRequired
}

export default memo(Hello);