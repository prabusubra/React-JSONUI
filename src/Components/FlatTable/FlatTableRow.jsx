import React, { Component } from "react";
import FlatTableData from "./FlatTableData";

class FlatTableRow extends Component {
  state = {
    header: this.props.header,
    data: this.props.data
  };
  render() {
    let tabledata = [];
    this.state.header.forEach((element, index) => {
      tabledata.push(
        <FlatTableData key={index} data={this.state.data[element]} />
      );
    });
    console.log(this.state.header);
    console.log(this.state.data);
    return <tr>{tabledata}</tr>;
  }
}

export default FlatTableRow;
