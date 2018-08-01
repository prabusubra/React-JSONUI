import React, { Component } from "react";
import FlatTableHeader from "./FlatTableHeader";
import FlatTableRow from "./FlatTableRow";

class FlatTable extends Component {
  state = {
    header: this.props.header || [],
    data: this.props.data || []
  };
  render() {
    this.state.data = this.props.data;
    let tablerow = [];
    this.state.data.forEach((element, index) => {
      tablerow.push(
        <FlatTableRow key={index} header={this.state.header} data={element} />
      );
    });

    return (
      <div>
        <table className="table-responsive-xl table-bordered">
          <thead>
            <tr>
              {this.state.header.map((element, index) => {
                return <FlatTableHeader key={index} header={element} />;
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((element, index) => {
              return (
                <FlatTableRow
                  key={index}
                  header={this.state.header}
                  data={element}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FlatTable;
