import React, { Component } from "react";

class FlatTableHeader extends Component {
  state = {
    header: this.props.header
  };
  render() {
    return <th>{this.state.header}</th>;
  }
}

export default FlatTableHeader;
