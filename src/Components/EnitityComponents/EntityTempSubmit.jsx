import React, { Component } from "react";

class EntityTempSubmit extends Component {
  state = {
    submitAction: true
  };
  render() {
    return (
      <button className="btn btn-primary m-4" onClick={this.props.onSubmit}>
        Submit
      </button>
    );
  }
}

export default EntityTempSubmit;
