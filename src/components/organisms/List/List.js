import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../molecules/ListItem';
import './List.css';

const List = ({ names }) => <ul>{names.map(name => <ListItem key={name} name={name} />)}</ul>

List.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default List;