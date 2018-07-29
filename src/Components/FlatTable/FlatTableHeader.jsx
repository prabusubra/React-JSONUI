import React, { Component } from "react";

class FlatTableHeader extends Component {
  state = {
    header: this.props.header
  };
  render() {
    console.log(this.state.header);

    return <th>{this.state.header}</th>;
  }
}

export default FlatTableHeader;
