import React, { Component } from "react";
import Button from '../../atoms/Button';

class Form extends Component {

  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    const { name } = this.state;

    this.props.addName(name);

    this.setState({ name: "" });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="form-group">
        {/* TODO atoms */}
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={this.handleChange} />

        <Button action={this.handleSubmit} label="Save" />
      </div>
    );
  }
}

export default Form;