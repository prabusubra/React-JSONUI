import React, { Component } from "react";

class CreateEntity extends Component {
  state = {};
  render() {
    return (
      <button className="btn btn-primary m-4" onClick={this.props.doOnClick}>
        Create
      </button>
    );
  }
}

export default CreateEntity;
