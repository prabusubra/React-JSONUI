import React, { Component } from "react";

class FlatTableData extends Component {
  state = { data: this.props.data };
  render() {
    return <td>{this.state.data}</td>;
  }
}

export default FlatTableData;
