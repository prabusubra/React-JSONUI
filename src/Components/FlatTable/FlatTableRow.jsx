import React, { Component } from "react";
import FlatTableData from "./FlatTableData";
import Properties from "../EnitityComponents/Properties";
class FlatTableRow extends Component {
  state = {
    header: this.props.header,
    data: this.props.data
  };
  processOnClick = e => {
    console.log("Hey, you clicked me...");
    console.log(e.target.value);
  };

  /* showProperties = tabledata => {
    console.log("showProperties" + tabledata);
    return <Properties key={tabledata} data={tabledata} />;
  }; */

  render() {
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
              showProperties={this.props.showProperties}
            />
          );
        })}
      </tr>
    );
  }
}

export default FlatTableRow;
