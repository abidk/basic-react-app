import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hello from '../../atoms/Hello';
import Button from '../../atoms/Button';
import './ListItem.css';

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isVisible: true };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        this.setState(oldState => ({ isVisible: !oldState.isVisible }));
    }

    render() {
        const { isVisible } = this.state;

        return (
            <li className="ListItem">
                {isVisible && <Hello isVisible={isVisible} {...this.props} />}
                <Button label={`Show/Hide ${this.props.name}`} action={this.toggleBox} />
            </li>
        )
    }
}

ListItem.defaultProps = {
    name: "Joe Bloggs"
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired
}

export default ListItem;
