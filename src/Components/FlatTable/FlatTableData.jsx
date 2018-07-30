import React, { Component } from "react";

class FlatTableData extends Component {
  state = { data: this.props.data };
  render() {
    let content = JSON.stringify(this.state.data);
    content = content.replace(/[!#$%^&*"{}]/g, "");
    return <td>{content}</td>;
  }
}

export default FlatTableData;
