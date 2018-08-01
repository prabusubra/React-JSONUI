import React, { Component } from "react";
import FlatTableData from "./FlatTableData";

class FlatTableRow extends Component {
  state = {
    header: this.props.header,
    data: this.props.data
  };
  processOnClick = e => {
    console.log("Hey, you clicked me...");
    console.log(e.target.value);
  };

  render() {
    console.log(this.state.header);
    console.log(this.state.data);
    return (
      <tr>
        {this.state.header.map((element, index) => {
          return (
            <FlatTableData
              key={index}
              data={this.state.data[element]}
              header={element}
              doOnDelete={this.processOnClick}
              doOnModify={this.processOnClick}
            />
          );
        })}
      </tr>
    );
  }
}

export default FlatTableRow;
